import { auth, googleProvider, facebookProvider } from '../../Firebase/Firebase';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from '../../main';
// import { setSignInValue } from '../../Redux/Reducers.tsx/SignInUser';
// import { storeLoggedUserDetails } from './Login';

export const Providers = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // User successfully signed in with Google
      console.log("User signed in with Google:", result.user);
      navigate('/dashboard'); // Assuming path doesn't require quotes
    } catch (error: any) {
      console.error("Google sign-in failed:", error.message);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      // User successfully signed in with Facebook
      console.log("User signed in with Facebook:", result.user);
      navigate('/dashboard'); // Assuming path doesn't require quotes
    } catch (error: any) {
      console.error("Facebook sign-in failed:", error.message);
    }
  };

  return { handleGoogleSignIn, handleFacebookSignIn };
};
