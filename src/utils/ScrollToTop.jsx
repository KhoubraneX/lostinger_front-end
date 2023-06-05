import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';


const ScrollToTop = () => {
  window.scrollTo(0, 0);
      return <Outlet />;
};

export default ScrollToTop;