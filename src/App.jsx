import React, {useEffect} from 'react';
import dbRef,{db, userName, connectedRef} from './server/firebase';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setUser,addParticipant, removeParticipant } from './store/actionCreators';
import { MainScreen } from './components';


const App = () => {
    //const [state, dispatch ] = useReducer(meetReducer, initalState )
    const dispatch = useDispatch()
    const {currentUser, participants } = useSelector((state) => state)
    const participantsRef = dbRef.child("participants")
    // const getUserStream = async () => {
    //     const localStream = await navigator.mediaDevices.getUserMedia({
    //         audio:true,
    //         video:true
    //     });
    //     return localStream;
    // };

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
                dispatch(setUser({
                    [userRef.key]:{
                        userName,
                        ...defaultPreferences
                    }
                }))
                userRef.onDisconnect().remove()
            }
        });
      
        
      
    }, [])
    
    useEffect(() => {
     if(currentUser){
        participantsRef.on("child_added", (snap) => {
            const {userName, preferences} = snap.val();
           dispatch(addParticipant({
            [snap.key]:{
                userName,
                ...preferences
            }
        }))
        })
        participantsRef.on("child_removed", (snap) => {
            dispatch(removeParticipant(snap.key))
        })
     }
    }, [currentUser])
    

    // useEffect( async () => {
    //  const stream = await getUserStream();
    //  stream.getVideoTracks()[0].enabled = false;
    //  props.setMainStream(stream)
    // }, [])
    
  return (
    <div>
          <MainScreen/>
        {/* <h3>Current User: {JSON.stringify(currentUser)}</h3> <br />
        <h3>Participants: {JSON.stringify(participants)}</h3> */}
      
    </div>
  )
}



export default App 
//connect(mapStateToProps,mapDispatchToProps)(App)
// const mapStateToProps = (state) => {
//     return {
//         user: state.currentUser,
//         participants: state.participants
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//    return {
//         setUser: (user) => dispatch(setUser(user)),
//     addParticipant: (participant) => dispatch(addParticipant(participant)),
//     removeParticipant: (participantKey) => dispatch(removeParticipant(participantKey))
//    }
// }