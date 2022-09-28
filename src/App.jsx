import React, {useEffect} from 'react';
import dbRef,{db, userName, connectedRef} from './server/firebase';
import { connect } from 'react-redux';


const App = (props) => {
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
                userRef.onDisconnect().remove()
            }
        })
      
    }, [])
    

    // useEffect( async () => {
    //  const stream = await getUserStream();
    //  stream.getVideoTracks()[0].enabled = false;
    //  props.setMainStream(stream)
    // }, [])
    
  return (
    <div>{userName}</div>
  )
}

export default App