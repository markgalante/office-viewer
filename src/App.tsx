import React from 'react';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

import './App.css';
import {AddOffice} from './scenes/AddEditOffice';

const queryClient = new QueryClient();

function App() {
  return (
    <div id='app-container'>
      <QueryClientProvider client={queryClient}>
        <AddOffice />
      </QueryClientProvider>
    </div>
  );
}

export default App;
