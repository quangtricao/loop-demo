import ArtistCover from 'src/asset/images/artist-cover.png';
import ArtistInfo from 'src/components/ArtistInfo';
import Cards from 'src/components/Cards';

export default function Artist() {
  return (
    <div>
      <div className='text-H1 hidden'>Artist Info</div>
      <div className='before:bg-red-500 h-[370px]'>
        <img src={ArtistCover} alt='artist cover' className='w-[100%] h-[100%] object-cover ' />
      </div>
      <ArtistInfo />
      <Cards />
    </div>
  );
}
