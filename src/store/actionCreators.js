import * as actionTypes from './actionTypes'



export const setMainStream = (stream) => {
    return {
        type:actionTypes.SET_MAIN_STREAM,
        payload:{
            mainStream: stream
        }
    }
}



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

   export const updateUser = (user) => {
       return {
  type:actionTypes.UPDATE_USER,
  payload:{
      currentUser:user
  }
       }
   }

   export const updateParticipant = (user) => {
  return {
      type:actionTypes.UPDATE_PARTICIPANT,
      payload:{
         newUser:user
      }
  }
   }



