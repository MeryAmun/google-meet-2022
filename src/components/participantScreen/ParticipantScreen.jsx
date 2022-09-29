import React from 'react';
import './participant.css'
import Card from '../constants/Card/Card'
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ParticipantScreen = (props) => {
  const {
    currentIndex, currentParticipant, hideVideo, videoRef,
    showAvatar,currentUser 
  } = props
  return (
    <div className={`participant ${hideVideo ? "hide" : ""}`}>
<Card>
  <video 
  ref={videoRef}
  className='video'
  id={`participantVideo${currentIndex}`}
  autoPlay
  playsInline
  >
  </video>
  {
    !currentParticipant.audio && (
      <FontAwesomeIcon
      className='muted'
      icon={faMicrophoneSlash}
      title="Muted"
      />
    )}
  {
    showAvatar && (
      <div className="avatar" 
      style={{background: currentParticipant.avatarColor}}>
{currentParticipant.name[0]}
      </div>
    )}
    <div className="name">
      {currentIndex.name}
      {currentUser ? "(You)" : ""}
    </div>
</Card>
    </div>
  )}

export default ParticipantScreen