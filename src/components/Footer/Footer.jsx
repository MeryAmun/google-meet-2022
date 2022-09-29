import React, {useState, useEffect} from 'react'
import './footer.css';
import {
  faMicrophone,
  faVideo,
  faDesktop,
  faVideoSlash,
  faMicrophoneSlash
} from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => {
  const [streamState, setStreamState] = useState({
    mic:true,
    video:false,
    screen:false,
  })

  const onMicClick = () => {
    setStreamState((currentState) =>{
      return {
        ...currentState,
        mic: !currentState.mic
      }
    })
  }

  const onVideoClick = () => {
    setStreamState((currentState) =>{
      return {
        ...currentState,
        video: !currentState.video
      }
    })
  };
  const onScreenClick = () => {
   onScreenClick(setScreenState);
  }

  const setScreenState = (isEnabled) => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        screen: isEnabled
      }
    })
  }

  useEffect(() => {
  onMicClick(streamState.mic);
  }, [streamState.mic]);

  useEffect(() => {
   onVideoClick(streamState.video);
   }, [streamState.video])
  
  
  return (
   <div className="meeting-footer">
      <div className={'meeting-icons' + (!streamState.mic ? "active" : "") }
    data-tip={streamState.mic ? "Mute Audio" : "Unmute Audio"}onClick={onMicClick}>
      <FontAwesomeIcon
      icon={!streamState.mic ? faMicrophoneSlash : faMicrophone}
      title='mute'
      />
    </div>
    <div className={"meeting-icons" + (!streamState.video ? "active" : "")}
    data-tip={streamState.video ? "Hide Video" : "Show Video"}
    onClick={onVideoClick}
    >
<FontAwesomeIcon
      icon={!streamState.video ? faVideoSlash : faVideo}
      />
    </div>
   <div className="meeting-icons"
    data-tip="share-screen"
    onClick={onScreenClick}
    disabled={streamState.screen}
    >
<FontAwesomeIcon icon={faDesktop}/>
    </div>
    <ReactTooltip/>
   </div>
  )
}

export default Footer