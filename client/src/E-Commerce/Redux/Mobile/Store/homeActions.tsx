
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('home/fetchData', async () => {
  try {
    const response = await fetch('http://localhost:3001/Load_EComm');
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    const data = await response.json();
    debugger
    return data.image[0];
  } catch (error:any) {
    throw new Error('Error fetching data: ' + error.message);
  }
});
