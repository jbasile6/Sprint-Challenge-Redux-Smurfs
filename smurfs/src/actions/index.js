/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const SMURF_FETCH = 'SMURF_FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_SMURF = 'ADD_SMURF';

/*STRETCH
export const EDIT_SMURF = 'EDIT_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
*/

export const smurfFetch = () => dispatch => {
  dispatch({ 
    type: SMURF_FETCH 
  });
  axios
  .get('http://localhost:3333/smurfs')
  .then( res => {
    dispatch({ 
      type: FETCH_SUCCESS,
      payload: res.data
    });
  })
  .catch( err => {
    dispatch({
      type: FETCH_FAILURE,
      payload: err
    })
  })
}
