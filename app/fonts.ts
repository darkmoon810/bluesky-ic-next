import { DM_Serif_Text, Inter } from 'next/font/google'

export const dmSerifText = DM_Serif_Text({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-serif',
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})