const initialState = {
    isAuth: false,
    requestingAuth: false,
    clearingAuth: false,
    authSession: null,
    authError: "",
    requestingRestore: true,
    logoutError: ""
  };
  
  export default function authenticate(state = initialState, action = {}) {
    switch (action.type) {
      
      default:
        return state;
    }
  }