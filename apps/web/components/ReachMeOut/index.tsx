import React from 'react';
import info from '@/config/info';
import Image from 'next/image';
import { Linkedin, Github, Instagram, Facebook } from 'shared-icon';

export default function ReachMeOut() {
  return (
    <section aria-labelledby="title">
      <div id="title" className="w-full flex justify-center text-center">
        <div className="-translate-x-2">Reach Me Out Here!</div>
        <div>
          <Image
            src={'/ilustrations/fire.png'}
            width={20}
            height={20}
            alt={'fire icons'}
          />
        </div>
      </div>

      <div className="flex gap-2">
        <a href={info.linkedin} className="w-16 flex justify-center">
          <Linkedin className="scale-[0.5] absolute" />
        </a>
        <a href={info.github} className="w-16 flex justify-center">
          <Github className="scale-[0.5] absolute" />
        </a>
        <a href={info.instagram} className="w-16 flex justify-center">
          <Instagram className="scale-[0.5] absolute" />
        </a>
        <a href={info.facebook} className="w-16 flex justify-center">
          <Facebook className="scale-[0.5] absolute" />
        </a>
      </div>
    </section>
  );
}
