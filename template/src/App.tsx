import React from 'react';
import './App.css';
import UserProvider from './features/auth/providers';
import { Routes } from './routes';

function App() {

  return (
    <UserProvider>
      <Routes /> 
    </UserProvider>
  );
}

export default App;
