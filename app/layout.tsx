import './globals.css'

export const metadata = {
  title: 'Samuel Yeneneh | AI • Data • FinTech',
  description: 'Personal portfolio of Samuel Yeneneh — AI, data, fintech and technology projects.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
