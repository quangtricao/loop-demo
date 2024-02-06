import { Link, useLocation } from 'react-router-dom';
import CardPreview from './CardPreview';

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
  {
    song: 'Mr. Tambourine Man',
    artist: 'Bob Dylan',
    price: 1.63,
    highestBid: 0.33,
  },
  {
    song: 'Lay Lady Lay',
    artist: 'Bob Dylan',
    price: 1.63,
    highestBid: 0.33,
  },
  {
    song: 'Tangled Up in Blue',
    artist: 'Bob Dylan',
    price: 1.63,
    highestBid: 0.33,
  },
];

const sectionList = [
  { name: 'Created', number: 302 },
  { name: 'Owned', number: 67 },
  { name: 'Collection', number: 4 },
];

const selectedStyle = {
  color: 'white',
  borderBottom: '1px solid',
  borderColor: '#858584',
};

const notSelectedStyle = {
  color: '#858584',
};

export default function Cards() {
  const id = useLocation().pathname;

  return (
    <div>
      <div className='bg-background'>
        <div className='max-w-[80%] mx-auto'>
          <div className='flex '>
            {sectionList.map((section) => (
              <div
                key={section.name}
                style={id.includes(section.name.toLowerCase()) ? selectedStyle : notSelectedStyle}
                className='grow flex justify-center gap-5 py-[10px] '
              >
                <Link to={`/artist/artist-name/${section.name.toLocaleLowerCase()}`}>
                  <div>{section.name}</div>
                </Link>
                <div className='hidden sm:block bg-text2 px-3 rounded-[20px] text-white'>
                  {section.number}
                </div>
              </div>
            ))}
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
