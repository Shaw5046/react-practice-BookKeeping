import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { 
  useReducer, 
  useContext, 
  useEffect, 
  // useState 
} from "react";
import { auth } from "../firebase";

const initialState = {
  currentUser: null,
};

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        currentUser: null,
      };
    default: return state;
  }
}

export function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const loginWithGithub = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log('object')
        console.log(user);
        dispatch({type: 'LOGIN', payload:user})
      } else {
        dispatch({type: 'LOGOUT'})
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser: state.currentUser,
    login,
    signup,
    logout,
    loginWithGithub,
  };
  return <AuthContext.Provider value={value} {...props} />;
}
