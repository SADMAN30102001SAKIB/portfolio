import type { Metadata } from 'next'
import favicon from './favicon.ico';
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sadman Sakib - Full Stack Developer',
  description: 'Software Developer specializing in TypeScript, Next.js, React Native, Node.js, and modern web technologies. Building scalable applications with clean code and seamless user experience.',
  keywords: ['Sadman Sakib', 'Full Stack Developer', 'TypeScript', 'Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'Software Engineer'],
  authors: [{ name: 'Sadman Sakib' }],
  creator: 'Sadman Sakib',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sadmansakib.dev',
    title: 'Sadman Sakib - Full Stack Developer',
    description: 'Software Developer specializing in modern web technologies and scalable applications.',
    siteName: 'Sadman Sakib Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sadman Sakib - Full Stack Developer',
    description: 'Software Developer specializing in modern web technologies and scalable applications.',
  },
  icons: {
    icon: favicon,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  )
}
