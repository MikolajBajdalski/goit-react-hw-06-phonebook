import { createSlice, nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ name, number }) => {
        // Utworzenie unikalnego ID dla kontaktu
        const id = nanoid();
        return { payload: { id, name, number } };
      },
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    // ... inne akcje
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
