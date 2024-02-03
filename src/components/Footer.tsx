import DiscordLogo from '../asset/icons/DiscordLogo.png';
import InstagramLogo from '../asset/icons/InstagramLogo.png';
import TwitterLogo from '../asset/icons/TwitterLogo.png';
import YoutubeLogo from '../asset/icons/YoutubeLogo.png';

export default function Footer() {
  return (
    <div className='bg-background2 text-white flex flex-col justify-between gap-[30px] py-[40px] px-0 xl:flex-row xl:gap-0 md:px-[195px]'>
      <div className='flex flex-col xl:flex-row gap-[30px] xl:gap-[12%]'>
        <div className='w-[90%] mx-[auto] xl:w-[33%] xl:mx-0'>
          <div className='text-text2 mb-[20px] text-justify md:text-left'>
            Whether you're an artist ready to take center stage or a music lover seeking a new way to connect with your
            favorite tunes, Loop welcomes you to a world where every beat matters. Let's redefine the music experience
            together. 🚀 🎵
          </div>
          <div className='text-text2'>Join the Loop Revolution:</div>
          <div className='flex flex-row gap-[10px]'>
            <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
              <img src={DiscordLogo} alt='discord logo' className='hover:scale-[85%] duration-500' />
            </a>
            <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
              <img src={InstagramLogo} alt='discord logo' className='hover:scale-[85%] duration-500' />
            </a>
            <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
              <img src={TwitterLogo} alt='discord logo' className='hover:scale-[85%] duration-500' />
            </a>
            <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
              <img src={YoutubeLogo} alt='discord logo' className='hover:scale-[85%] duration-500' />
            </a>
          </div>
        </div>

        <div className='w-[90%] mx-[auto] xl:w-fit xl:mx-0'>
          <div className='text-H5 mb-[25px]'>Explore</div>
          <div className='text-text2 mb-[20px]'>Marketplace</div>
          <div className='text-text2 mb-[20px]'>Rankings</div>
          <div className='text-text2'>Connect a wallet</div>
        </div>
      </div>

      <div className='w-[90%] mx-[auto] xl:w-[100%] xl:mx-0'>
        <div className='text-H5 mb-[25px]'>Join Our Weekly Digest</div>
        <div className='text-text2 mb-[20px]'>Get exclusive promotions & updates straight to your inbox.</div>
        <div className='bg-white leading-[60px] pr-0 pl-[20px] text-black rounded-[20px] flex justify-between'>
          <input
            type='text'
            name='Email Subcribe'
            placeholder='Enter your email here'
            className='w-[100%] focus:outline-none'
          />
          <button className='bg-buttonBackground px-[50px] rounded-[20px] text-white hover:brightness-[80%] duration-500'>
            Subcribe
          </button>
        </div>
      </div>
    </div>
  );
}
