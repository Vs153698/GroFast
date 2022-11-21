import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { authentication } from "../firebase/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingContext, setLoadingContext] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const unsub = authentication.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    setLoadingInitial(false);
    return unsub;
  }, []);

  const signUpWithEmailPassword = (name, email, password) => {
    setLoadingContext(true)
    createUserWithEmailAndPassword(authentication, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        setLoadingContext(false)
      }
    );
  };
  const logout = async()=>{
    setLoadingContext(true)
    await signOut(authentication).catch((err)=>setError(err))
  }
  const memoedValue = useMemo(
    () => ({
      currentUser,
      signUpWithEmailPassword,
      loadingInitial,
      loadingContext,
      error,
      setError,
      logout,
    }),
    [currentUser, loadingContext, loadingInitial, error]
  );
  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};
export default function useAuth() {
  return useContext(AuthContext);
}
