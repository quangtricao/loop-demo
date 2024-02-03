import * as Yup from 'yup';
import { useFormik } from 'formik';

import User from '../asset/icons/User.png';
import EnvelopeSimple from '../asset/icons/EnvelopeSimple.png';
import LockKey from '../asset/icons/LockKey.png';
import ImageCover from '../asset/images/create-account.png';

export default function CreateAccount() {
  const registerObject = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username required'),
      email: Yup.string().email('Invalid email address').required('Email required'),
      password: Yup.string().min(6, 'Must be at least 6 characters or more').required('Password required'),
      passwordConfirmation: Yup.string()
        .min(6, 'Must be at least 6 characters or more')
        .required('Password required')
        .test('Password confirmation match', 'Password confirmation does not match', function () {
          return this.parent['passwordConfirmation'] === this.parent['password'] ? true : false;
        }),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between md:gap-[60px] bg-background '>
        <div className='grow basis-0 bg-white'>
          <img src={ImageCover} alt='something here' className='object-cover h-[100%] w-[100%]' />
        </div>

        <div className='grow basis-0'>
          <div className='flex flex-col gap-[35px] text-white w-[100%] pt-[30px] pb-[40px] xl:py-[8%]'>
            <p className='text-H2 w-[90%] mx-[auto] md:mx-0'>Create Account</p>
            <p className='text-H5 w-[90%] mx-[auto] md:mx-0'>
              Welcome! Enter Your Details And Join The Loop Revolution
            </p>
            <form onSubmit={registerObject.handleSubmit}>
              <div className='flex flex-col gap-[20px] w-[90%] xl:w-[50%] mx-[auto] md:mx-0 '>
                {/* Username input */}
                <div>
                  <div className='relative block '>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-[20px]'>
                      <img src={User} alt='User icon' />
                    </span>
                    <input
                      className=' bg-white w-full rounded-[20px] py-[16px] pl-[50px] pr-[20px] text-black focus:outline-none focus:ring-2 focus:ring-buttonBackground'
                      placeholder='Username'
                      type='text'
                      name='username'
                      onChange={registerObject.handleChange}
                      value={registerObject.values.username}
                      onInvalid={() => console.log('Enter User Name Here')}
                    />
                  </div>
                  {registerObject.errors.username && registerObject.touched.username ? (
                    <div className='text-red-600 font-semibold pl-6'>{registerObject.errors.username}</div>
                  ) : null}
                </div>

                {/* Email input */}
                <div>
                  <div className='relative block '>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-[20px]'>
                      <img src={EnvelopeSimple} alt='EnvelopeSimple icon' />
                    </span>
                    <input
                      className=' bg-white w-full rounded-[20px] py-[16px] pl-[50px] pr-[20px] text-black focus:outline-none focus:ring-2 focus:ring-buttonBackground'
                      placeholder='Email Address'
                      type='email'
                      name='email'
                      onChange={registerObject.handleChange}
                      value={registerObject.values.email}
                    />
                  </div>
                  {registerObject.errors.email && registerObject.touched.email ? (
                    <div className='text-red-600 font-semibold pl-6'>{registerObject.errors.email}</div>
                  ) : null}
                </div>

                {/* Password input */}
                <div>
                  <div className='relative block '>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-[20px]'>
                      <img src={LockKey} alt='LockKey icon' />
                    </span>
                    <input
                      className=' bg-white w-full rounded-[20px] py-[16px] pl-[50px] pr-[20px] text-black focus:outline-none focus:ring-2 focus:ring-buttonBackground'
                      placeholder='Password'
                      type='password'
                      name='password'
                      onChange={registerObject.handleChange}
                      value={registerObject.values.password}
                    />
                  </div>
                  {registerObject.errors.password && registerObject.touched.password ? (
                    <div className='text-red-600 font-semibold pl-6'>{registerObject.errors.password}</div>
                  ) : null}
                </div>

                {/* Confirm Password input */}
                <div>
                  <div className='relative block '>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-[20px]'>
                      <img src={LockKey} alt='LockKey icon' />
                    </span>
                    <input
                      className=' bg-white w-full rounded-[20px] py-[16px] pl-[50px] pr-[20px] text-black focus:outline-none focus:ring-2 focus:ring-buttonBackground'
                      placeholder='Confirm Password'
                      type='password'
                      name='passwordConfirmation'
                      onChange={registerObject.handleChange}
                      value={registerObject.values.passwordConfirmation}
                    />
                  </div>
                  {registerObject.errors.passwordConfirmation && registerObject.touched.passwordConfirmation ? (
                    <div className='text-red-600 font-semibold pl-6'>{registerObject.errors.passwordConfirmation}</div>
                  ) : null}
                </div>

                <button
                  type='submit'
                  className='bg-buttonBackground rounded-[20px] py-[16px] px-[20px] hover:brightness-[80%] duration-500'
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
