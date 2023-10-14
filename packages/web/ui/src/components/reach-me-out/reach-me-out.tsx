import React from 'react';
import Image from 'next/image';
import { Linkedin, Github, Instagram, Facebook } from 'shared-icon';

export interface ReachMeOutProps {
  socialMedia: {
    name: string;
    note: string;
    github: string;
    email: string;
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

export function ReachMeOut({ socialMedia }: ReachMeOutProps) {
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
        <a href={socialMedia.linkedin} className="w-16 flex justify-center">
          <Linkedin className="scale-[0.5] absolute" />
        </a>
        <a href={socialMedia.github} className="w-16 flex justify-center">
          <Github className="scale-[0.5] absolute" />
        </a>
        <a href={socialMedia.instagram} className="w-16 flex justify-center">
          <Instagram className="scale-[0.5] absolute" />
        </a>
        <a href={socialMedia.facebook} className="w-16 flex justify-center">
          <Facebook className="scale-[0.5] absolute" />
        </a>
      </div>
    </section>
  );
}
