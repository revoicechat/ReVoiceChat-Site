'use client';
import { useEffect } from 'react';

import fluidCursor from './settings';

const FluidCursor = ({children}:any) => {
  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <div className="relative">
      <div className='fixed top-0 left-0'>
        <canvas id='fluid' className='w-screen h-screen'/>
      </div>
      {children as React.ReactNode}
    </div>
  );
};
export default FluidCursor;
