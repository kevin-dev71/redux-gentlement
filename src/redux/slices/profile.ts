import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TUser = {
  name: string,
  lastName: string,
  id?: string
}

type TPayload = {
  users: TUser[]
};

const initialState: TPayload = {
  users: [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addUser: (state, { payload }: PayloadAction<TUser[]>) => {
      state.users = payload; // Redux Toolkit under the hoood will manage inmutability with `immer` package.
    },
    removeUser: (state, { payload }: PayloadAction<TUser>) => {
      state.users = state.users.filter(user => user.id !== payload.id); // Redux Toolkit under the hoood will manage inmutability with `immer` package.
    },
    editUser: (state, { payload }: PayloadAction<TUser>) => {
      state.users = state.users.map(user => {
        if (user.id === payload.id) {
          return {
            ...user,
            ...payload,
          };
        }
        return user;
      }); // Redux Toolkit under the hoood will manage inmutability with `immer` package.
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const { addUser, removeUser, editUser } = profileSlice.actions;
