import { useNavigate } from 'react-router-dom';
import ArtistCover from 'src/asset/images/artist-cover.png';
import CardPreview from 'src/components/CardPreview';

type Card = {
  song: string;
  artist: string;
  price: number;
  highestBid: number;
};

const data: Card[] = [
  {
    song: 'Like A Rolling Stone',
    artist: 'Bob Dylan',
    price: 1.63,
    highestBid: 0.33,
  },
  {
    song: 'Blowing In The Wind',
    artist: 'Bob Dylan',
    price: 1.63,
    highestBid: 0.33,
  },
  {
    song: 'Hurricane',
    artist: 'Bob Dylan',
    price: 1.63,
    highestBid: 0.33,
  },
];

const ArtistData = {
  name: 'Bob Dylan',
  bio: 'American Singer-Songwriter',
};

export default function UserDashboard() {
  const navigate = useNavigate();
  const handleCreateNewNFTSong = () => {
    navigate('/user-dashboard/user-id/create');
  };

  return (
    <div>
      <div className='text-H1 hidden'>User Dashboard</div>
      <div className='before:bg-red-500 h-[300px] sm:h-[370px]'>
        <img src={ArtistCover} alt='artist cover' className='w-[100%] h-[100%] object-cover ' />
      </div>

      <div className='bg-background text-white'>
        <div className='max-w-[80%] mx-auto flex flex-col md:flex-row md:justify-between py-[40px] gap-[20px]'>
          <p className='text-H2'>Welcome back {ArtistData.name}</p>
          <div className='flex flex-col md:flex-row gap-5 leading-[60px] h-fit'>
            <button
              className='border-2 border-solid px-[30px] rounded-[20px] border-buttonBackground'
              onClick={handleCreateNewNFTSong}
            >
              Create a new NFT song
            </button>
          </div>
        </div>
      </div>

      <div className='bg-background2 text-white'>
        <div className='max-w-[80%] mx-auto py-[80px]'>
          <div className='grid grid-cols-2 xl:grid-cols-3 gap-6'>
            {data.map((card) => (
              <CardPreview key={card.song} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
