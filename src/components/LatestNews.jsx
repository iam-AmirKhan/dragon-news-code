import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200 gap-5 p-3'>
          <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
          <Marquee>

          <p className='font-bold'> Deleniti quisquam rerum quam fuga omnis recusandae consequatur? Fugiat cupiditate odit pariatur reprehenderit similique, architecto, animi, aliquam minus vel hic nostrum velit?</p>
          </Marquee>
        </div>
    );
};

export default LatestNews;