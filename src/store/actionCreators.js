import * as actionTypes from './actionTypes'


export const setUser = (user) => {

    return  { 
        action:actionTypes.SET_USER,
        payload:{ 
            currentUser:user
        }
    }
   }
export const addParticipant = (participant) => {

 return  { action:actionTypes.ADD_PARTICIPANT,
     payload:{participant}}
}

export const removeParticipant = (participantKey) => {

    return  { 
        action:actionTypes.REMOVE_PARTICIPANT, 
        payload:{
participantKey
        }
    }
   }



