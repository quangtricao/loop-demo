import { createSlice } from '@reduxjs/toolkit';

import { ERROR, IDLE, LOADING, SUCCESS } from '../../types/status';
import { AccountState } from '../../types/account';

import { getGoogleProfile } from '../../services/accountService';

const initialState: AccountState = {
  account: null,
  status: IDLE,
  error: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    clearAccount(state) {
      state.account = null;
      state.status = IDLE;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGoogleProfile.pending, (state) => {
      state.status = LOADING;
    });
    builder.addCase(getGoogleProfile.fulfilled, (state, action) => {
      state.status = SUCCESS;
      state.account = action.payload;
    });
    builder.addCase(getGoogleProfile.rejected, (state, action) => {
      if (action.payload) {
        state.status = ERROR;
        state.error = action.payload;
      }
    });
  },
});

export const { clearAccount } = accountSlice.actions;
export default accountSlice.reducer;
