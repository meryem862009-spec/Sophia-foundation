
'use client'
import Link from 'next/link'
import { Heart, Home, HandHeart, LineChart, Info, MessageSquare } from 'lucide-react'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

export default function NavBar(){
  const pathname = usePathname()
  const link = (href: string, label: string, Icon: any) => (
    <Link className={cn('navlink flex items-center gap-2', {'text-gold': pathname===href})} href={href}>
      <Icon size={18}/> {label}
    </Link>
  )
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-semibold text-xl">Sophia Foundation</Link>
        <nav className="flex items-center gap-6">
          {link('/', 'Home', Home)}
          {link('/about', 'About DIPG', Info)}
          {link('/families', 'For Families (AI)', MessageSquare)}
          {link('/donate', 'Donate', HandHeart)}
          {link('/impact', 'Impact', LineChart)}
        </nav>
        <div className="hidden sm:block">
          <Link href="/donate" className="btn btn-primary"><Heart className="mr-2" size={18}/> Donate</Link>
        </div>
      </div>
    </header>
  )
}
