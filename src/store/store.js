import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
// ... importy innych reducerów

// Funkcja do zapisywania stanu w localStorage
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('contacts', serializedState);
  } catch (e) {
    console.error('Could not save state', e);
  }
}

// Załaduj stan z localStorage
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('contacts');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error('Could not load state', e);
    return undefined;
  }
}

// Ustaw stan początkowy na podstawie danych z localStorage
const preloadedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // ... inni reduktorzy
  },
  preloadedState: {
    contacts: preloadedState || [], // Ustawianie stanu początkowego dla contacts
  },
});

// Subskrybuj zmiany stanu i zapisuj w localStorage
store.subscribe(() => {
  saveToLocalStorage(store.getState().contacts);
});

export default store;
