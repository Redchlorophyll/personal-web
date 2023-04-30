import React from 'react';
import info from '@/config/info';
import { Linkedin, Github, Instagram, Facebook } from 'shared-icon';

export default function ReachMeOut() {
  return (
    <section aria-labelledby="title">
      <div id="title" className="w-full flex justify-center text-center">
        <div className="-translate-x-2">
          Reach Me Out Here!
          <span className="absolute translate-x-2 bg-[url('/illustration/fire.png')] bg-contain w-[20px] h-[20px]" />
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
