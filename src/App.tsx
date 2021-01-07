import React from 'react';
import './App.css';
import UserProvider from './features/auth/providers';
import MainLayout from './layout/main';
import { Routes } from './routes';

function App() {
  return (
    <UserProvider>
      <MainLayout>
        <Routes />
      </MainLayout>
    </UserProvider>
  );
}

export default App;
