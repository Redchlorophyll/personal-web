import React from 'react';
import Image from 'next/image';
import ilu404 from '@/assets/img/ilustrations/ilu_404.png';
import { Button } from "ui";

export default function EmptyPage() {
  const onBackBtnClicked = () => {
    alert('mock back btn');
  };

  return (
    <div className='flex justify-center'>
      <div className='md:flex md:gap-12'>
        <div className='w-full flex justify-center md:!w-[250px]'>
          <div className='w-[200px] md:w-full'>
            <Image
              src={ilu404}
              alt="empty page illustration - lost astronout"
              quality="30"
            />
          </div>
        </div>
        <div className='mt-auto ml-0 mb-auto w-full max-w-md md:max-w-lg text-center md:text-left pl-[15px] pr-[15px]'>
          <h1
            className='text-[36px] md:text-[40px] font-bold'
          >
            OOPS! <br className='visible sm:hidden'/>Page Not Found
          </h1>
          <h2 className='font-bold text-3xl md:text-4xl text-black-500 md:pt-3.5 pb-3.5'>404 Error Not Found</h2>
          <p className='text-[15px] md:text-[16px] pb-4'>
            Our astronout can’t find planet you looking for.
            we need to come back to previous planet
            before to late!
          </p>
          <Button onClick={onBackBtnClicked}>Back</Button>
        </div>
      </div>
    </div>
  )
}
