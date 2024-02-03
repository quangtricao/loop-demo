import { ChangeEvent, useState } from 'react';

import User from '../asset/icons/User.png';
import EnvelopeSimple from '../asset/icons/EnvelopeSimple.png';
import LockKey from '../asset/icons/LockKey.png';
import ImageCover from '../asset/images/create-account.png';

type CreateObjectType = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function CreateAccount() {
  const [createObject, setCreateObject] = useState<CreateObjectType>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function usernameOnChange(event: ChangeEvent<HTMLInputElement>): void {
    setCreateObject({ ...createObject, username: event.target.value });
  }

  function emailOnChange(event: ChangeEvent<HTMLInputElement>): void {
    setCreateObject({ ...createObject, username: event.target.value });
  }

  function passwordOnChange(event: ChangeEvent<HTMLInputElement>): void {
    setCreateObject({ ...createObject, username: event.target.value });
  }
  function confirmPasswordOnChange(event: ChangeEvent<HTMLInputElement>): void {
    setCreateObject({ ...createObject, username: event.target.value });
  }

  function handleSumbit() {
    console.log(createObject);
  }

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between md:gap-[60px]  bg-background '>
        <div className='grow basis-0 bg-white'>
          <img src={ImageCover} alt='something here' className='object-cover h-[100%] w-[100%]' />
        </div>

        <div className='grow basis-0'>
          <div className='flex flex-col gap-[40px] text-white pt-[30px] pb-[40px] pr-0 md:pr-[195px] md:py-[100px]'>
            <p className='text-H2'>Create Account</p>
            <p className='text-H5'>Welcome! Enter Your Details And Join The Loop Revolution</p>
            <div className='flex flex-col gap-[30px] w-[330px]'>
              {/* Username input */}
              <div className='relative block '>
                <span className='absolute inset-y-0 left-0 flex items-center pl-[20px]'>
                  <img src={User} alt='User icon' />
                </span>
                <input
                  className=' bg-white w-full rounded-[20px] py-[16px] pl-[50px] pr-[20px] text-black focus:outline-none focus:ring-2 focus:ring-buttonBackground'
                  placeholder='Username'
                  type='text'
                  name='username'
                  onChange={usernameOnChange}
                />
              </div>
              {/* Email input */}
              <div className='relative block '>
                <span className='absolute inset-y-0 left-0 flex items-center pl-[20px]'>
                  <img src={EnvelopeSimple} alt='EnvelopeSimple icon' />
                </span>
                <input
                  className=' bg-white w-full rounded-[20px] py-[16px] pl-[50px] pr-[20px] text-black focus:outline-none focus:ring-2 focus:ring-buttonBackground'
                  placeholder='Email Address'
                  type='text'
                  name='email'
                  onChange={emailOnChange}
                />
              </div>
              {/* Password input */}
              <div className='relative block '>
                <span className='absolute inset-y-0 left-0 flex items-center pl-[20px]'>
                  <img src={LockKey} alt='LockKey icon' />
                </span>
                <input
                  className=' bg-white w-full rounded-[20px] py-[16px] pl-[50px] pr-[20px] text-black focus:outline-none focus:ring-2 focus:ring-buttonBackground'
                  placeholder='Password'
                  type='text'
                  name='password'
                  onChange={passwordOnChange}
                />
              </div>
              {/* Confirm Password input */}
              <div className='relative block '>
                <span className='absolute inset-y-0 left-0 flex items-center pl-[20px]'>
                  <img src={LockKey} alt='LockKey icon' />
                </span>
                <input
                  className=' bg-white w-full rounded-[20px] py-[16px] pl-[50px] pr-[20px] text-black focus:outline-none focus:ring-2 focus:ring-buttonBackground'
                  placeholder='Confirm Password'
                  type='text'
                  name='password confirm'
                  onChange={confirmPasswordOnChange}
                />
              </div>

              <button
                onClick={handleSumbit}
                className='bg-buttonBackground rounded-[20px] py-[16px] px-[20px] hover:brightness-[80%] duration-500'
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
