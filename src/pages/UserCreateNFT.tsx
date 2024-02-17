import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserCreateNFT() {
  const navigate = useNavigate();
  const [images, setImages] = useState<string[]>([]);
  const [imageFile, setImageFile] = useState<File[]>([]);

  const previewImage = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFiles = event.target.files; // Get the selected files.
    if (!imageFiles) {
      return;
    }

    const imageSrcArr: string[] = [];
    const imageFilesArr: File[] = [];

    for (let i = 0; i < imageFiles.length; i++) {
      const imageSrc = URL.createObjectURL(imageFiles[i]); // Get the image path.
      imageSrcArr.push(imageSrc);
      imageFilesArr.push(imageFiles[i]);
    }

    setImages([...images, ...imageSrcArr]);
    setImageFile([...imageFile, ...imageFilesArr]);
  };

  const handleRemoveImage = (fileName: string) => {
    const imageFiltered = images.filter((img) => img !== fileName);
    setImages(imageFiltered);
  };

  return (
    <div className='bg-background text-white'>
      <div className='max-w-[80%] mx-auto'>
        <button
          className='border-2 border-solid px-[20px] rounded-[20px] border-buttonBackground py-[2px] my-[10px]'
          onClick={() => navigate('/user-dashboard/user-id')}
        >
          Back to profile page
        </button>
        <div className='flex flex-col gap-[30px] max-w-[30%]'>
          <div>
            <input
              className='bg-white w-full rounded-[20px] py-[16px] pl-[50px] pr-[20px] text-black focus:outline-none focus:ring-2 focus:ring-buttonBackground'
              placeholder='Title'
              type='text'
            />
          </div>
          <div>
            <input
              className='bg-white w-full rounded-[20px] py-[16px] pl-[50px] pr-[20px] text-black focus:outline-none focus:ring-2 focus:ring-buttonBackground'
              placeholder='Artist'
              type='text'
            />
          </div>
          <div>
            <input
              className='bg-white w-full rounded-[20px] py-[16px] pl-[50px] pr-[20px] text-black focus:outline-none focus:ring-2 focus:ring-buttonBackground'
              placeholder='Description'
              type='text'
            />
          </div>
          <div>
            <input
              className='bg-white w-full rounded-[20px] py-[16px] pl-[50px] pr-[20px] text-black focus:outline-none focus:ring-2 focus:ring-buttonBackground'
              placeholder='Details'
              type='text'
            />
          </div>
          <div>
            <input
              className='bg-white w-full rounded-[20px] py-[16px] pl-[50px] pr-[20px] text-black focus:outline-none focus:ring-2 focus:ring-buttonBackground'
              placeholder='Tags'
              type='text'
            />
          </div>
        </div>

        <div className='image-preview-container h-[200px]'>
          <label htmlFor='file-upload'>Upload Image Cover</label>
          <input
            type='file'
            id='file-upload'
            accept='image/*'
            multiple
            onChange={(event) => previewImage(event)}
          />
          <button></button>
          <div className='preview flex flex-row gap-[20px]'>
            {images.length === 0
              ? null
              : images.map((img) => (
                  <div key={img} className='relative h-[100px] object-contain'>
                    <img
                      id='preview-selected-image'
                      alt='preview'
                      src={img}
                      style={{ height: '150px' }}
                    />
                    <button
                      className='absolute top-[5px] right-[5px] rounded-[100px] px-[5px] bg-buttonBackground'
                      onClick={() => handleRemoveImage(String(img))}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>
        </div>

        <button className='px-[20px] rounded-[20px] bg-buttonBackground py-[2px] my-[10px]'>
          submit
        </button>
      </div>
    </div>
  );
}
