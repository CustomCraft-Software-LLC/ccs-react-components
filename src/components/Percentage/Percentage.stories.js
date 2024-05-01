import React from 'react';
import Percentage from './Percentage.jsx';

export default {
  title: 'Components/Percentage', 
  component: Percentage,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <Percentage sign={true} percent={30.2}/>
  );
}
