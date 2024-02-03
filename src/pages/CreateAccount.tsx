import { ChangeEvent, useState } from 'react';

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
      <div className='flex justify-between gap-[60px]  bg-background '>
        <div className='grow basis-0 bg-white'>
          <img src={ImageCover} alt='something here' className='object-cover h-[100%] w-[100%]' />
        </div>

        <div className='grow basis-0'>
          <div className='flex flex-col gap-[40px] text-white h-[100%] py-[100px] pr-[195px]'>
            <p className='text-H2'>Create Account</p>
            <p className='text-H5'>Welcome! Enter Your Details And Join The Loop Revolution</p>
            <div className='flex flex-col gap-[30px] w-[330px]'>
              <input
                type='text'
                placeholder='Username'
                className='rounded-[20px] py-[16px] px-[20px] text-black'
                onChange={usernameOnChange}
              />
              <input
                type='text'
                placeholder='Email Address'
                className='rounded-[20px] py-[16px] px-[20px] text-black'
                onChange={emailOnChange}
              />
              <input
                type='text'
                placeholder='Password'
                className='rounded-[20px] py-[16px] px-[20px] text-black'
                onChange={passwordOnChange}
              />
              <input
                type='text'
                placeholder='Confirm Password'
                className='rounded-[20px] py-[16px] px-[20px] text-black'
                onChange={confirmPasswordOnChange}
              />
              <button onClick={handleSumbit} className='bg-buttonBackground rounded-[20px] py-[16px] px-[20px]'>
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
