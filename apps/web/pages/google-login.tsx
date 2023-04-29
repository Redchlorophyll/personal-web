import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserAuth } from '@/context/Auth';
import { Button } from 'shared-ui';
import Image from 'next/image';

export default function GoogleLogin() {
  const { googleSignInWithRedirect, user, logout } = UserAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const onClickGoogleSignIn = async () => {
    try {
      await googleSignInWithRedirect();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('isLogin') === 'true') setIsLoggedIn(true);
    else setIsLoggedIn(false);

    // watch changes in localStorage
    window.addEventListener('storage', () => {
      if (localStorage.getItem('isLogin') === 'true') setIsLoggedIn(true);
      else setIsLoggedIn(false);
    });
  }, []);

  return (
    <div className="w-full flex justify-center text-center">
      <div className="m-[180px]">
        <div className="pb-5">
          <h1 className="mb-2">Google Sign Up</h1>
          {isLoggedIn && Object.keys(user || {}).length === 0 ? (
            <div className="flex justify-center">
              <div className="bg-[url('../img/icons/ic_loading.svg')] w-[40px] h-[40px] bg-contain animate-spin" />
            </div>
          ) : (
            ''
          )}
          {Object.keys(user || {}).length === 0 ? (
            ''
          ) : (
            <>
              <div className="font-semibold mb-2">Logged in as,</div>
              <div className="border-2 border-black-200 py-2 pl-3 pr-5 rounded-md flex bor">
                <div className="w-[54px] h-[54px] rounded-full overflow-hidden relative mr-4">
                  <Image fill src={user?.photoURL} alt="user profile image" />
                </div>
                <div>
                  <div className="flex justify-start">
                    <span className="font-bold text-left">
                      {user?.displayName}
                    </span>
                  </div>
                  <div className="flex justify-start">
                    <span className="text-black-700 text-left">
                      {user?.email}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="pb-2">
          {Object.keys(user || {}).length === 0 ? (
            isLoggedIn ? (
              ''
            ) : (
              <Button onClick={onClickGoogleSignIn}>Google Sign In</Button>
            )
          ) : (
            <Button variant="muted" type="translucent" onClick={logout}>
              Logout
            </Button>
          )}
        </div>
        <Button
          variant={
            isLoggedIn && Object.keys(user || {}).length === 0
              ? 'muted'
              : 'primary'
          }
          onClick={() =>
            isLoggedIn && Object.keys(user || {}).length === 0
              ? ''
              : router.push('/linky')
          }
        >
          Go back to Linky Page
        </Button>
      </div>
    </div>
  );
}
