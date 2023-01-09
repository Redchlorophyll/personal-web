import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import facebook from '@/assets/img/social-medias/Facebook.svg';
import Github from '@/assets/img/social-medias/Github.svg';
import Instagram from '@/assets/img/social-medias/Instagram.svg';
import Linkedin from '@/assets/img/social-medias/Linkedin.svg';
import info from '@/config/info';

export default function ReachMeOut() {
  return (
    <section aria-labelledby='title'>
      <div id="title" className='w-full flex justify-center text-center mb-5'>
        <div className='-translate-x-2'>
          Reach Me Out Here!
          <span className="absolute translate-x-2 bg-[url('../img/emojis/fire.png')] bg-contain w-[20px] h-[20px]" />
        </div>
      </div>

      <div className='flex gap-3'>
        <a href={info.linkedin}>
          <Image width={40} height={45} src={Linkedin} alt="linkedin's icon link" />
        </a>
        <a href={info.github}>
          <Image width={40} height={45} src={Github} alt="github's icon link" />
        </a>
        <a href={info.instagram}>
          <Image width={40} height={45} src={Instagram} alt="instagram's icon link" />
        </a>
        <a href={info.facebook}>
          <Image width={40} height={45} src={facebook} alt="facebook's icon link" />
        </a>
      </div>
    </section>
  )
}
