import './globals.css'
import { Tajawal } from 'next/font/google'

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'مجموعة الخالدي',
  description: 'شركة رائدة في مجال الإنتاج الإعلامي والتسويق الرقمي',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${tajawal.className} bg-gray-50`}>{children}</body>
    </html>
  )
}
