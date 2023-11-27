import React, { useState, ChangeEvent, FormEvent } from 'react';
import NavBar from './Redux/Mobile/Store/NavBar';
import { ClassNames } from '@emotion/react';

const Admin = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [mobile, setMobile] = useState<string>('');
  const [mobilerate, setMobilerate] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const categories = ['Cycle', 'Tv', 'Laptop','Mobile']; 

  const handleMobileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMobile(event.target.value);
  };

  const handleMobileRateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMobilerate(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  // Define the missing functions for other inputs

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedImage && mobile) {
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('mobile', mobile);
      formData.append('rate', `${mobilerate}`);
      formData.append('category', category);
      // Append other form data

      try {
        const response = await fetch('http://localhost:3001/store_image', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          // Handle success
        } else {
          console.error('Error uploading image:', response.statusText);
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      console.error('Please select an image and enter mobile name.');
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    < div className='h-screen bg-[#fffce1] '>
    <div>
<NavBar/>
    </div>
    
    <div className='grid grid-rows-1 grid-cols-1  gap-5 p-5 h-3/4 w-full  justify-center place-items-center'>
      

      <form onSubmit={handleSubmit} className='flex flex-col gap-1 p-2 border border-red-400  bg-[#FBECB2]'>
        <label htmlFor='image'>Image</label>
        <input type='file' accept='image/*' onChange={handleImageChange} required />
        <label htmlFor='mobile'>Name</label>
        <input type='text' placeholder='Mobile Name' value={mobile} onChange={handleMobileChange} required className='text-black text-xl p-1 ml-2' />
        <label htmlFor="rate">Rate</label>
        <input type="number" placeholder='Mobile Rate' value={mobilerate} onChange={handleMobileRateChange} required className='text-black text-xl p-1 ml-2'/>
        <label htmlFor="products">Products</label>
        <select value={category} onChange={handleCategoryChange} required className='text-black text-xl p-1 ml-2'>
          <option value=''>Select a Category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <div>
          <button type='submit' className='border border-dashed bg-blue-600 text-white mt-5 mb-5 p-5'>
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Admin;
