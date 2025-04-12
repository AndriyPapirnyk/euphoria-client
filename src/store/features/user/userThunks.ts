// src/store/features/user/userThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '../../../types'


const apiUrl = process.env.NEXT_PUBLIC_API_URL

const fetchUserFromAPI = async (userEmail: string): Promise<User> => {
  const response = await fetch(`${apiUrl}/user/${userEmail}`)
  if (!response.ok) throw new Error('Failed to fetch user')
  return await response.json()
}

export const fetchUserByEmail = createAsyncThunk<User, string>(
  'user/fetchByEmail',
  async (userEmail, thunkAPI) => {
    try {
      return await fetchUserFromAPI(userEmail)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
