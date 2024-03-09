import React from 'react';

const ProgressBar = ({ bgcolor, progress, height = '5px' }) => {
  const Parentdiv = {
    height: height,
    width: '90%',
    backgroundColor: 'whitesmoke',
    borderRadius: 20,
    marginTop: 10,
    // marginLeft: 50,
    // marginBottom: 20,
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right',
  };

  return (
    <div style={Parentdiv}>
      <div className="childDiv" style={Childdiv}></div>
    </div>
  );
};

export default ProgressBar;
