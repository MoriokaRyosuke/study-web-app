import React from 'react'
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

const IndexPage = () => {
  return (
        <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12 text-center">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link href={siteConfig.links.x} className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm">
            Xフォロー
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Post Writer</h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">Next Jsを使って、ブログを書くアプリを作成します。</p>
        </div>
        <div className="space-x-4 mt-6">
          <Link href={'/login'} className={cn(buttonVariants({ size: 'lg' }))}>
            始める
          </Link>
          <Link href={siteConfig.links.github} className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))} target="_blank" rel="noreferrer">
            Github
          </Link>
        </div>
      </section>
      <section id="feature" className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6">
        <div className="text-center space-y-6 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">サービスの特徴</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">このプロジェクトはモンダンな技術スタックを使ってwebアプリケーションを作ります。</p>
        </div>
        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem]">
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512">
                <path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512">
                <path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512">
                <path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512">
                <path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512">
                <path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512">
                <path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto md:max-w-[58rem] text-center">
          <p className="text-muted-foreground sm:text-lg sm:leading-7">Post Writerはログインするとブログ投稿ができるようになります</p>
        </div>
      </section>
      <section id="contact" className="container py-8 md:py-12 lg:py-24">
        <div className="text-center max-w-[58rem mx-auto flex flex-col gap-4">
          <h2 className="font-extrabold text-3xl md:text-6xl">Contact Me</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">DMで連絡してください</p>
        </div>
      </section>
    </>
  )
}

export default IndexPage