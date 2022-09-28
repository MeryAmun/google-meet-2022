import * as actionType from './actionTypes'

export const initalState = {
    currentUser:null,
    participants: {}
}

export const meetReducer = (state = initalState, action) => {
    switch (action.type) {
        case actionType.SET_USER: {
            let { payload } = action;
            state = {...state, currentUser:{...payload.currentUser}}
            return state
            
        }
            case actionType.ADD_PARTICIPANT:{ 
          let  { payload } = action;
          const currentUserId = Object.keys(state.currentUser)[0];
          const participantId = Object.keys(payload.participant)[0];
          if(currentUserId === participantId){
              payload.participant[participantId].currentUser = true
          }
          let participants = {...state.participants,...payload.participant}
            state = {...state, participants}
            return state
            }
            case actionType.REMOVE_PARTICIPANT: {
                let  { payload } = action;
                let participants = {...state.participants}
                delete participants[payload.participantKey]
                state = {...state, participants}

                return state
            }
            
            break;
        default:{
               return  state
            }
    }
}