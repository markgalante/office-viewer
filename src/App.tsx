import React from 'react';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import {Overlay, useOverlay} from './hooks';

import './App.css';
import {BrowserSwitch} from './AppRouter';

const queryClient = new QueryClient();

function App() {
  const {mustShowOverlay} = useOverlay();
  return (
    <div id='app-container'>
      {mustShowOverlay ? <Overlay /> : null}
      <QueryClientProvider client={queryClient}>
        <BrowserSwitch />
      </QueryClientProvider>
    </div>
  );
}

export default App;
