import React from 'react';
import { ScaleLoader } from 'react-spinners';
import './Loader.scss';

const Loader = () => {
  return (
        <div className='loader'>
            <ScaleLoader
                color="#3434ee"
                height={50}
                width={5}
            />
        </div>
  )
}

export default Loader