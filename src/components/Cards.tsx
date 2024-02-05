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

export default function Cards() {
  return (
    <div>
      <div className='bg-background'>
        <div className='max-w-[80%] mx-auto'>
          <div className='flex '>
            {sectionList.map((section) => (
              <div
                key={section.name}
                className='grow flex justify-center gap-5 py-[10px] border-solid border-b-2 border-text2'
              >
                <div className='text-text2 font-bold'>{section.name}</div>
                <div className='bg-text2 px-3 rounded-[20px]'>{section.number}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-background2 text-white'>
        <div className='max-w-[80%] mx-auto py-[80px]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {data.map((card) => (
              <CardPreview key={card.song} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
