import React from 'react';
import './style.css';
import NavMain from './components/NavMain.jsx';
import HomePage from './components/HomePage.jsx';
import Features from './components/Features.jsx';
import CTA from './components/CTA.jsx';
import SignIn from './components/SignIn.jsx';
import JoinUs from './components/JoinUs.jsx';
import AppNav from './components/AppMain/AppNav/AppNav.jsx';
import AppPost from './components/AppMain/AppPost/AppPost.jsx';
import LeftSide from './components/AppMain/LeftSide/LeftSide.jsx';
import RightSide from './components/AppMain/RightSide/RightSide.jsx';
import SignUp from './components/AppMain/SignUp/SignUp.jsx';
import Profile from './components/AppMain/Profile/Profile.jsx';

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
      {/* <div id="mainLayout">
        <div id="mainLeft">
          <LeftSide />
        </div>
        <div id="mainMiddle">
          <AppPost
            title="Technology & Science"
            description="Braving the new world of...Description goes here that is unique. Description goes here that is unique"
          />

          <AppPost
            img="https://images.unsplash.com/photo-1662894312921-67eabc246633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            title="Level Up Fashion"
            description="Description goes here that is unique. Description goes here that is unique. Description goes here that is unique"
          />

          <AppPost
            img="https://images.unsplash.com/photo-1569594984821-12d20c5a97b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            title="Technology & Science"
            description="Braving the new world of...Description goes here that is unique. Description goes here that is unique"
          />
        </div>
        <div id="mainRight">
          <RightSide />
        </div>
      </div> */}
      {/* <SignUp /> */}
      <Profile />
    </div>
  );
}
