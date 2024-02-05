import Img from 'src/asset/images/create-account.png';

type CardPreviewProp = {
  card: {
    song: string;
    artist: string;
    price: number;
    highestBid: number;
  };
};

export default function CardPreview({ card }: CardPreviewProp) {
  return (
    <div>
      <div className='w-100% h-fit bg-background rounded-[20px]'>
        <div>
          <img src={Img} alt='1' className='rounded-t-[20px]' />
        </div>
        <div className='flex flex-col px-[30px] pt-[20px] pb-[25px]'>
          <div className='text-H5'>{card.song}</div>
          <div className='flex gap-[10px]'>
            <img src={Img} alt='2' className='w-[24px] rounded-[12px]' />
            <div>{card.artist}</div>
          </div>

          <div className='pt-[25px] flex justify-between'>
            <div>
              <div className='text-[12px]'>Price</div>
              <div>{card.price} ETH</div>
            </div>
            <div className='text-right'>
              <div className=' text-[12px]'>Highest bid</div>
              <div>{card.highestBid} wETH</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
