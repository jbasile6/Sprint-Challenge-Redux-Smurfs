/*
  Be sure to import in all of the action types from `../actions`
*/

import { SMURF_FETCH, FETCH_SUCCESS, FETCH_FAILURE, ADD_SMURF } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
  }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const reducers = (state = initialState, action) => {
  switch(action.type) {
    
    case SMURF_FETCH:
    return {
      ...state,
      fetchingSmurfs: true
    };

    case FETCH_SUCCESS:
    return {
      ...state,
      fetchingSmurfs: false,
      smurfs: [...state.smurfs, ...action.payload]
    };

    case FETCH_FAILURE:
    return {
      ...state,
      fetchingSmurfs: false,
      error: action.payload 
    };

    case ADD_SMURF:
    return {
      ...state,
      smurfs:[
        ...state.smurfs, {
          name: action.name,
          age: action.age,
          height: action.height
        }
      ]
    }
    default:
    return state;
  }
}
