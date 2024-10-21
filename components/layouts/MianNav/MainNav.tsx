'use client';
import React from 'react'
import { NavItem } from '@/types';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import MobileNav from '../MobileNav/MobileNav';


interface MainNavProps {
  items: NavItem[];
  children?: ReactNode;
}

const MainNav = ({ items }: MainNavProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="flex items-center md:gap-10">
      <Link href={'/'} className="hidden md:flex items-center space-x-2">
        <span className="font-bold ">Post Writer</span>
      </Link>
      <nav className="md:flex gap-6 hidden sm:inline-block">
        {items?.map((item, index) => (
          <Link key={index} href={item.href} className="text-lg sm:text-sm font-medium hover:text-foregrond/80">
            {item.title}
          </Link>
        ))}
      </nav>
      <button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <span>メニュー</span>
      </button>
      {showMobileMenu && <MobileNav items={items} />}
    </div>
  )
}

export default MainNav