import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../../types'
import { fetchUserByEmail } from './userThunks'

type UserState = {
  data: User | null
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.data = action.payload
    },
    clearUser(state) {
      state.data = null
    },
  },extraReducers: (builder) => {
    builder
      .addCase(fetchUserByEmail.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUserByEmail.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchUserByEmail.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer

