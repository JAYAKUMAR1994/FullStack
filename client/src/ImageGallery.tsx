
import React, { useState, useEffect } from 'react';
import './Card.css';
import './TickAnimation.css';


interface Image {
  _id: string;
  imagePath: string;
  mobile: string;
  rate: string;
   display: string;
  camera: string;
  battery: string;
  processor: string;
  accessories: string;

}

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [mobile, setMobile] = useState<string>('');
  const [mobilerate, setMobilerate] = useState<string>();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [ram, setRam] = useState<string>('');
  const [rom, setRom] = useState<string>('');
  const [display, setDisplay] = useState<string>('');
  const [camera, setCamera] = useState<string>('');
  const [battery, setBattery] = useState<string>('');
  const [processor, setProcessor] = useState<string>('');
  const [accessories, setaccessories] = useState<string>('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleMobileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMobile(event.target.value);
  };
  const handleMobileRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMobilerate(event.target.value);
  };

  const handleMobileRamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRam(event.target.value);
  };
  const handleMobileRomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRom(event.target.value);
  };
  const handleMobileDisplayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplay(event.target.value);
  };
  const handleMobileCameraChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCamera(event.target.value);
  };
  const handleMobileBatteryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBattery(event.target.value);
  };
  const handleMobileProcessorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProcessor(event.target.value);
  };
  const handleMobileAccessoriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setaccessories(event.target.value);
  };


  // create 
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedImage && mobile) {
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('mobile', mobile);
      formData.append('rate', `${mobilerate}`);
      formData.append('ram', ram);
      formData.append('rom', rom);
      formData.append('display', display);
      formData.append('camera', camera);
      formData.append('battery', battery);
      formData.append('processor', processor);
      formData.append('accessories', accessories);


      try {
        const response = await fetch('http://localhost:3001/upload', {
          method: 'POST',
          body: formData,
        });
debugger
        if (response.ok) {
         
          // console.log(data);//success message write
          fetchData(); // Fetch updated data after successful image upload
        } else {
          console.error('Error uploading image:', response.statusText);
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      console.error('Please select an image and enter mobile number.');
    }
  };

  //delete

  const handleDelete = async (id: any) => {
    try {
      await fetch(`http://localhost:3001/image/${id}`, {
        method: 'DELETE',
      });
  
      // Update the images state after successful deletion
      setImages(images.filter((image) => image._id !== id));
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };
  
  
  

  //load
  
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/Load_Images');
      if (response.ok) {
        debugger
        const data = await response.json();
        setImages(data.image);
        console.log(images)
      } else {
        console.error('Error fetching images:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div className='grid grid-rows-1 grid-cols-2  gap-5 p-5   w-full bg-[#fffce1] '>
      <div className=' '>
      <h1 className='text-2xl font-sans text-orange-300'>Mobile</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-1 p-2 border border-red-400  bg-[#FBECB2]'>
      <label htmlFor="image">Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        <label htmlFor="mobile">Name</label>
        <input type="text" placeholder='Mobile Name' value={mobile} onChange={handleMobileChange} required className='text-black text-xl p-1 ml-2'/>
        <label htmlFor="rate">Rate</label>
        <input type="number" placeholder='Mobile Rate' value={mobilerate} onChange={handleMobileRateChange} required className='text-black text-xl p-1 ml-2'/>
        <label htmlFor="ram">RAM</label>
        <input type="text" placeholder='Mobile RAM' value={ram} onChange={handleMobileRamChange} required className='text-black text-xl p-1 ml-2'/>
        <label htmlFor="rom">ROM</label>
        <input type="text" placeholder='Mobile ROM' value={rom} onChange={handleMobileRomChange} required className='text-black text-xl p-1 ml-2'/>
        <label htmlFor="display">Display</label>
        <input type="text" placeholder='Mobile display' value={display} onChange={handleMobileDisplayChange} required className='text-black text-xl p-1 ml-2'/>
        <label htmlFor="camera">Camera</label>
        <input type="text" placeholder='Mobile Camera' value={camera} onChange={handleMobileCameraChange} required className='text-black text-xl p-1 ml-2'/>
        <label htmlFor="battery">Battery</label>
        <input type="text" placeholder='Mobile Battery' value={battery} onChange={handleMobileBatteryChange} required className='text-black text-xl p-1 ml-2'/>
        <label htmlFor="processor">Processor</label>
        <input type="text" placeholder='Mobile Processor' value={processor} onChange={handleMobileProcessorChange} required className='text-black text-xl p-1 ml-2'/>
        <label htmlFor="accessories">Accessories</label>
        <input type="text" placeholder='Mobile Accessories' value={accessories} onChange={handleMobileAccessoriesChange} required className='text-black text-xl p-1 ml-2'/>
       <div>
        <button type="submit" className='border border-dashed bg-blue-600 text-white mt-5 mb-5 p-5'>Submit</button>
        </div>
      </form>

      </div>

<div className=''>
      {images?.length > 0 ? (
        <ul className="image-list grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-2  place-items-start  justify-start p-0">
          {images.map((image:any) => (
              <div key={image._id}  className="card-container">
              <div className="circle"></div>
              <div className="card">
                <div className="card-front  border border-dashed bg-[#FBECB2] rounded-full flex flex-col gap-2 text-black">
                
                  <img  src={image.imageUrl} alt="error"  className='w-[100px] h-[100px]  '/>
                  <div>{image.mobile}</div>
                <div className="currency-inr">{image.rate}</div>
                
                </div>
                <div className="card-back bg-[#FBECB2] text-black flex flex-col gap-2 text-xs p-1">
                  <h6 className='underline underline-offset-4 text-base'>Highlights</h6>
                <div >{image.ram}</div>
                <div >{image.rom}</div>
                <div >{image.display}</div>
                <div >{image.camera}</div>
                <div >{image.battery}</div>
                <div >{image.processor}</div>
                <div >{image.accessories}</div>
                <button onClick={() => handleDelete(image._id)} className='border border-solid-red bg-red-500 text-white px-2 mb-1'>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p>No images available.</p>
      )}
      </div>
  



    </div>
  );
};

export default ImageGallery;



//height="200px" width="300px"