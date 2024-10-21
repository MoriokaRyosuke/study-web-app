import React from 'react'
import { marketingConfig } from '@/config/marketing'
import Footer from '@/components/layouts/Footer/Footer'
import MainNav from '@/components/layouts/MianNav/MainNav'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'


const MarketingLayout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div>
      <header className="bg-background container z-40">
        <div className="h-20 py-6 flex items-center justify-between">
          <MainNav items={marketingConfig.mainNav}></MainNav>
          <nav>
            <Link href={'/login'} className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'px-4')}>
              ログイン
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MarketingLayout