import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { authentication } from '../../Firebase/Firebase';
import { useAppDispatch } from '../../main';
import { setSignInValue } from '../../Redux/Reducers.tsx/SignInUser';
import { storeLoggedUserDetails } from './Login';

export const Providers = () => {
    const dispatch = useAppDispatch();

    const PROVIDERS:any = {
        google: GoogleAuthProvider,
        fb:FacebookAuthProvider
    }

    const storeUserData = (data: any) => {
        dispatch(setSignInValue(data));
    }

    const loginFunction = async (type: any) => {
        let provider = new PROVIDERS[type]();
        try {
            let result = await signInWithPopup(authentication, provider);
            await storeLoggedUserDetails(
                result.user,
                storeUserData,
            );
        } catch (error: any) {
            console.log(error, "error");
        }
    }

    return loginFunction;
}