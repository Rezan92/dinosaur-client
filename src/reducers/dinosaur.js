import {GET_DINOSAUR, GET_ONE} from '../action'
export default (state = [], action = {}) => {
  switch (action.type) {
        case GET_DINOSAUR:
          return{...state,
            allDinosaur:[ ...action.payload]};
          case GET_ONE:
            return {
              oneDinosaur:{...action.payload}
            }   
    default:
      return state;
  }
};