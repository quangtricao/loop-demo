import DiscordLogo from '../asset/footer/DiscordLogo.png';
import InstagramLogo from '../asset/footer/InstagramLogo.png';
import TwitterLogo from '../asset/footer/TwitterLogo.png';
import YoutubeLogo from '../asset/footer/YoutubeLogo.png';

export default function Footer() {
  return (
    <div className='bg-background text-white flex flex-col md:flex-row py-[40px] px-[195px]'>
      <div className='w-[327.41px] pr-[84px] grow'>
        <div className='text-text2 mb-[20px]'>
          Whether you're an artist ready to take center stage or a music lover seeking a new way to connect with your
          favorite tunes, Loop welcomes you to a world where every beat matters. Let's redefine the music experience
          together. 🚀 🎵
        </div>
        <div className='text-text2'>Join the Loop Revolution:</div>
        <div className='flex flex-row gap-[10px]'>
          <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
            <img src={DiscordLogo} alt='discord logo' />
          </a>
          <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
            <img src={InstagramLogo} alt='discord logo' />
          </a>
          <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
            <img src={TwitterLogo} alt='discord logo' />
          </a>
          <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
            <img src={YoutubeLogo} alt='discord logo' />
          </a>
        </div>
      </div>

      <div className='grow'>
        <div className='text-H5 mb-[25px]'>Explore</div>
        <div className='text-text2 mb-[20px]'>Marketplace</div>
        <div className='text-text2 mb-[20px]'>Rankings</div>
        <div className='text-text2'>Connect a wallet</div>
      </div>

      <div className='grow'>
        <div className='text-H5 mb-[25px]'>Join Our Weekly Digest</div>
        <div className='text-text2 mb-[20px]'>Get exclusive promotions & updates straight to your inbox.</div>
        <div className='bg-white leading-[60px] pr-0 pl-[20px] text-black rounded-[20px] flex justify-between'>
          <input type='text' placeholder='Enter your email here' className='w-[100%] focus:outline-none' />
          <button className='bg-buttonBackground px-[50px] rounded-[20px] text-white hover:brightness-[80%] duration-500'>
            Subcribe
          </button>
        </div>
      </div>
    </div>
  );
}
