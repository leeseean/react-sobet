import React from 'react';
import { Spin } from 'antd';

const GlobalLoading = () => {
  return (
    <div className="absolute-center">
      <Spin/>
    </div>
  );
};

export default GlobalLoading;