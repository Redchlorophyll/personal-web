import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  User
} from "firebase/auth";
import { auth } from "@/config/firebase";
import { isUserAuthorized } from "@/utils/local-authorization";
import { Snackbar } from 'ui';

type authContextType = {
  googleSignInWithRedirect?: () => void;
  googleSignInWithPopUp?: () => void;
  logout?: () => void;
  user?: User;
};

const AuthContext = createContext<authContextType>({});

export const AuthContextProvider = ({ children }) => {
  const [ user, setUser ] = useState<User>({} as User);
  const [ isNotAuthorized, setIsNotAuthorized ] = useState(false);

  const googleSignInWithRedirect = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);

    localStorage.setItem('isLogin', 'true');
  };

  const googleSignInWithPopUp = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);

    localStorage.setItem('isLogin', 'true');
    window.dispatchEvent(new Event("storage"));
  };

  const logout = () =>{
    signOut(auth)
    setUser(null);

    localStorage.setItem('isLogin', 'false');
    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        if (isUserAuthorized(currentUser)) {
          setUser(currentUser);
        } else {
          console.log('User Not Authorized', currentUser);
          logout();
          setIsNotAuthorized(true);
        }

        localStorage.setItem('isLogin', 'false');
        window.dispatchEvent(new Event("storage"));
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log(isNotAuthorized)
  }, [isNotAuthorized]);

  return (
    <AuthContext.Provider
      value={{ googleSignInWithRedirect, googleSignInWithPopUp, logout, user }}
    >
    <Snackbar isShown={isNotAuthorized} onClose={() => setIsNotAuthorized(false)}>User Not Authorized</Snackbar>
    {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};