import React from "react"
import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#77127B', // Experian Purple
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: {
    template: '%s | VITAL - Serasa',
    default: 'VITAL | O acordo que respeita a sua vida',
  },
  description: 'Plataforma de renegociação inteligente integrada ao Serasa. Utilizamos o método VITAL (Maslow) para garantir sua sobrevivência antes da dívida.',
  applicationName: 'VITAL',
  authors: [{ name: 'Serasa Experian Team', url: 'https://www.serasa.com.br' }],
  keywords: [
    'renegociação',
    'serasa',
    'saúde financeira',
    'maslow',
    'dívidas',
    'vital',
    'acordo justo'
  ],
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/logo.svg', media: '(prefers-color-scheme: light)' },
      { url: '/logo-white.svg', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vital.serasa.com.br',
    title: 'VITAL | Recuperação Financeira Real',
    description: 'Não negocie sua sobrevivência. O VITAL calcula a parcela que cabe no seu bolso respeitando seus gastos essenciais.',
    siteName: 'VITAL Serasa',
    images: [
      {
        url: '/og-image-vital.jpg',
        width: 1200,
        height: 630,
        alt: 'Gráfico do Método VITAL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VITAL | O acordo que respeita a sua vida',
    creator: '@serasa',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={roboto.variable}>
      <body className="font-sans antialiased bg-[#F8F8F9] text-[#495765]">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
