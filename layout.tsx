
import './globals.css'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Sophia Foundation',
  description: 'Funding research, awareness, and support for DIPG.',
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body className="font-display">
        <NavBar/>
        <main className="container py-10">{children}</main>
        <footer className="border-t py-10 mt-10 text-sm text-slate-600">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Sophia Foundation • All rights reserved</p>
            <p>In loving memory of Sophia — thank you for helping families fight DIPG.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
