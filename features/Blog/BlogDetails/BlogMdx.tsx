'use client';
import React from 'react'
import { useMDXComponent } from 'next-contentlayer2/hooks';
import Image from 'next/image';
import Callout from '@/components/elements/Callout';


const components = {
  Image,
  Callout,
};


const BlogMdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);
  return (
    <div className="prose max-w-full">
      <Component components={components} />
    </div>
  );
}

export default BlogMdx