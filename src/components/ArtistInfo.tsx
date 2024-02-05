import DiscordLogo from 'src/asset/icons/DiscordLogo.png';
import InstagramLogo from 'src/asset/icons/InstagramLogo.png';
import TwitterLogo from 'src/asset/icons/TwitterLogo.png';
import YoutubeLogo from 'src/asset/icons/YoutubeLogo.png';
import GlobeLogo from 'src/asset/icons/Globe.png';

const ArtistData = {
  name: 'Bob Dylan',
  stats: [{ Volume: '250k+' }, { 'NFTs Sold': '50+' }, { Followers: '3000+' }],

  bio: 'American Singer-Songwriter',
  NftWallet: 'asdrewasdqweqweasdreasdasdas',
  socialLinks: [
    {
      platform: 'website',
      img: `${GlobeLogo}`,
      link: 'https://www.google.com/',
    },
    { platform: 'discord', img: `${DiscordLogo}`, link: 'https://www.google.com/' },
    { platform: 'youtube', img: `${YoutubeLogo}`, link: 'https://www.google.com/' },
    { platform: 'twitter', img: `${TwitterLogo}`, link: 'https://www.google.com/' },
    { platform: 'instagram', img: `${InstagramLogo}`, link: 'https://www.google.com/' },
  ],
};

export default function ArtistInfo() {
  return (
    <div className='bg-background text-white'>
      <div className='max-w-[80%] mx-auto flex flex-col py-[40px] gap-[20px]'>
        {/* Left */}
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className='text-H2'>{ArtistData.name}</div>
          {/* Right */}
          <div className='flex gap-5 leading-[60px] h-fit'>
            <div className='bg-buttonBackground px-[30px] rounded-[20px]'>
              {ArtistData.NftWallet}
            </div>
            <div className='border-2 border-solid px-[30px] rounded-[20px] border-buttonBackground'>
              Follow
            </div>
          </div>
        </div>
        <div className='flex gap-6'>
          {ArtistData.stats.map((stat) => (
            <div key={Object.keys(stat)[0]}>
              {Object.keys(stat)[0]}: {Object.values(stat)[0]}
            </div>
          ))}
        </div>
        <div>Bio: {ArtistData.bio}</div>
        <div>
          Links:
          <div className='flex gap-6'>
            {ArtistData.socialLinks.map((link) => (
              <div key={link.platform}>
                <img src={link.img} alt={link.platform} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
