import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { UserInfo, UsersState } from '../types/usersTypes'
import { fetchUsersApi } from '../api/userApi'

export const fetchUsers = createAsyncThunk<UserInfo[]>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const users = await fetchUsersApi()
      return users
    } catch (error) {

      const message = error instanceof Error ? error.message : String(error)
      return rejectWithValue(message)
    }
  }
)

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UserInfo[]>) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default usersSlice.reducer
