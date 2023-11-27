import React from 'react';
import about from './ECom-Images/about.jpg';
import NavBar from './Store/NavBar';

const AboutView: React.FC = () => {
  return (
    <>
    <div>
<NavBar/>
    </div>

    <div
      className='min-h-screen flex flex-col items-start justify-end pb-16'
      style={{
        backgroundImage: `url(${about})`,
        color: 'white',
      }}
    >
      <h1 className='underline underline-offset-8'>Headquarters Office Address</h1>
      <hr />
      <address>
        410 Terry Avenue North Seattle, <br />
        WA 98109 United States.
      </address>
    </div>

    </>
  );
};

export default AboutView;
