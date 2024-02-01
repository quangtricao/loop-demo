export default function Footer() {
  return (
    <div className='bg-background text-white flex justify-between py-[40px] px-[195px]'>
      <div className='w-[327.41px] pr-[84px]'>
        <div>
          Whether you're an artist ready to take center stage or a music lover seeking a new way to connect with your
          favorite tunes, Loop welcomes you to a world where every beat matters. Let's redefine the music experience
          together. 🚀🎵
        </div>
        <div>Join the Loop Revolution:</div>
      </div>

      <div>
        <div>Explore</div>
        <div>Marketplace</div>
        <div>Rankings</div>
        <div>Connect a wallet</div>
      </div>

      <div>
        <div>Join Our Weekly Digest</div>
        <div>Get exclusive promotions & updates straight to your inbox.</div>
        <div className='bg-white leading-[60px] pr-0 pl-[20px] text-black rounded-[20px] flex justify-between'>
          Enter your email here
          <button className='bg-buttonBackground px-[50px] rounded-[20px]'>Subcribe</button>
        </div>
      </div>
    </div>
  );
}
