import React from 'react';

function Crosshair() {
  return (
    <div  style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '8px',
      height: '8px',
      backgroundColor: '#323232',
      borderRadius: '50%',
      border: '2px soid black',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
    }} />
  );
}
export default Crosshair;
