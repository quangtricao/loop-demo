import ImageCover from '../asset/images/create-account.png';

export default function CreateAccount() {
  return (
    <div>
      <div className='flex justify-between gap-[60px]  bg-background '>
        <div className='grow basis-0 bg-white'>
          <img src={ImageCover} alt='something here' className='object-cover h-[100%] w-[100%]' />
        </div>

        <div className='grow basis-0'>
          <div className='flex flex-col gap-[40px] text-white h-[100%] py-[100px] pr-[195px]'>
            <p className='text-heading1'>Create Account</p>
            <p className='text-heading2'>Welcome! Enter Your Details And Join The Loop Revolution</p>
            <div className='flex flex-col gap-[30px] w-[330px]'>
              <input type='text' placeholder='Username' className='rounded-[20px] py-[16px] px-[20px]' />
              <input type='text' placeholder='Email Address' className='rounded-[20px] py-[16px] px-[20px]' />
              <input type='text' placeholder='Password' className='rounded-[20px] py-[16px] px-[20px]' />
              <input type='text' placeholder='Confirm Password' className='rounded-[20px] py-[16px] px-[20px]' />
              <button className='bg-buttonBackground rounded-[20px] py-[16px] px-[20px]'>Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
