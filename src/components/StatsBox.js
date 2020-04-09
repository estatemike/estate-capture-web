import React from 'react';

const StatsBox = ({ primaryText, secondaryText }) => (
  <>
    <p className="text-4xl lg:text-6xl font-semibold text-primary">{primaryText}</p>
    <p className="ml-4 mr-4 font-semibold mb-6">{secondaryText}</p>
  </>
);

export default StatsBox;
