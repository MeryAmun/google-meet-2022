import React, {useEffect, useReducer} from 'react';
import dbRef,{db, userName, connectedRef} from './server/firebase';
import { connect } from 'react-redux';
import { initalState, meetReducer } from './store/reducer';
import { setUser,addParticipant, removeParticipant } from './store/actionCreators';


const App = (props) => {
    //const [state, dispatch ] = useReducer(meetReducer, initalState )
    const participantsRef = dbRef.child("participants")
    const getUserStream = async () => {
        const localStream = await navigator.mediaDevices.getUserMedia({
            audio:true,
            video:true
        });
        return localStream;
    };

    useEffect(() => {
        connectedRef.on("value", (snap) => {
            if(snap.val()){
                const defaultPreferences = {
                    audio:true,
                    video:false,
                    screen:false
                };
              const userRef =   participantsRef.push({
                    userName,
                    preference:defaultPreferences

                });
                props.setUser({
                    [userRef.key]:{
                        userName,
                        ...defaultPreferences
                    }
                })
                userRef.onDisconnect().remove()
            }
        });
      
        
      
    }, [])
    
    useEffect(() => {
     if(props.user){
        participantsRef.on("child_added", (snap) => {
            const {userName, preferences} = snap.val();
            props.addParticipant({
                [snap.key]:{
                    userName,
                    ...preferences
                }
            })
        })
        participantsRef.on("child_removed", (snap) => {
            props.removeParticipant(snap.key)
        })
     }
    }, [props.user])
    

    // useEffect( async () => {
    //  const stream = await getUserStream();
    //  stream.getVideoTracks()[0].enabled = false;
    //  props.setMainStream(stream)
    // }, [])
    
  return (
    <div>
        <h3>{JSON.stringify(props.user)}</h3>
        <h3>{JSON.stringify(props.participant)}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        user:state.currentUser,
        participants:state.participants
    }
}
const mapDispatchToProps = (dispatch) => {
   return {
        setUser: (user) => dispatch(setUser(user)),
    addParticipant: (participant) => dispatch(addParticipant(participant)),
    removeParticipant: (participantId) => dispatch(removeParticipant(participantId))
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)