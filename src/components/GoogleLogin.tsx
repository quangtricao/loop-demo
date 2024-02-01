import { googleLogout, useGoogleLogin } from '@react-oauth/google';

import { useAppDispatch, useAppSelector } from '../redux/hook';
import { clearAccount } from '../redux/slices/accountSlice';
import { getGoogleProfile } from '../services/accountService';

import { saveTokenToLocalStorage, clearTokenAndAccountFromLocalStorage } from '../utils/localStorage';

export default function GoogleLogin() {
  const dispatch = useAppDispatch();
  const account = useAppSelector((state) => state.account.account);

  const login = useGoogleLogin({
    onSuccess: (response) => {
      saveTokenToLocalStorage(response.access_token);
      dispatch(getGoogleProfile(response.access_token));
    },
    onError: (err) => console.log(err),
  });

  const logOut = () => {
    clearTokenAndAccountFromLocalStorage();
    dispatch(clearAccount());
    googleLogout();
  };

  return (
    <div>
      {account ? (
        <div>
          <img src={account.picture} alt='account ' />
          <h3>account Logged in</h3>
          <p>Name: {account.name}</p>
          <p>Email Address: {account.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button className='bg-red-950 text-white' onClick={() => login()}>
          Sign in with Google 🚀{' '}
        </button>
      )}
    </div>
  );
}
