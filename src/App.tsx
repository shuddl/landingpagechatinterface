import React from 'react';
import Header from './components/Header';
import ScrollingBanner from './components/ScrollingBanner';
import Chat from './components/Chat';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Chat />
      <ScrollingBanner />
    </div>
  );
}

export default App;