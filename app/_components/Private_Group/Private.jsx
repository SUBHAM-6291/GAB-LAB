import React from 'react';
import PrivateGroup from './Private_Group/Private_Group';
import PrivateClasses from './Private_Classes/Private_Classes';
import TellUsMoreHere from './Tell_us_More_Here/Tell_us_More_Here';
import Banner from './Banner/Banner';

const Private = () => {
  return (
    <>
    <Banner/>
      <PrivateGroup />
      <PrivateClasses />
      <TellUsMoreHere />
    </>
  );
};

export default Private;
