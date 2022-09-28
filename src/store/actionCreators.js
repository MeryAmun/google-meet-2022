import * as actionTypes from './actionTypes'


export const setUser = (user) => {

    return  { 
        type:actionTypes.SET_USER,
        payload:{ 
            currentUser:user
        }
    }
   }
export const addParticipant = (participant) => {

 return  { 
     type:actionTypes.ADD_PARTICIPANT,
     payload:{
         participant
        }
    }
}

export const removeParticipant = (participantKey) => {

    return  { 
        type:actionTypes.REMOVE_PARTICIPANT, 
        payload:{
participantKey
        }
    }
   }



