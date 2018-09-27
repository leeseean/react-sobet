import React from 'react';
import { Spin } from 'antd';

const GlobalLoading = () => {
  return (
    <div style={{ position: "relative", height: "600px" }}>
      <div className="absolute-center">
        <Spin />
      </div>
    </div>
  );
};

export default GlobalLoading;