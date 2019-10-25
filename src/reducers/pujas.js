import {PujaActions} from './../actions/constants'
const initialState = {
    availablePujas:[],
    selectedPuja: null
  };
  
  export default function pujas(state = initialState, action = {}) {
    switch (action.type) {
      
      default:
        return state;
    }
  }