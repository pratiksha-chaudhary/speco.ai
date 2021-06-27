import React from 'react';
import Introduction from '../../components/Introduction';
import SubmitButton from '../../components/SubmitButton';
import './index.scss';

function Home() {
  return (
    <>
      <Introduction />
      <SubmitButton text="Start Now" nextRoute="/register" />
      <p className="survey-time">Takes 1 min only!</p>
    </>
  );
}
export default Home;
