import React from 'react';
import './style.css';
import NavMain from './components/NavMain.jsx';
import HomePage from './components/HomePage.jsx';
import Features from './components/Features.jsx';
import CTA from './components/CTA.jsx';
import SignIn from './components/SignIn.jsx';
import JoinUs from './components/JoinUs.jsx';
import AppNav from './components/AppMain/AppNav/AppNav.jsx';

export default function App() {
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
        },
      },
    },
  };
  return (
    <div>
      {/* <NavMain /> */}
      {/* <HomePage />
      <JoinUs />
      <Features />
      <CTA /> */}
      {/* <SignIn /> */}
      <AppNav />
    </div>
  );
}
