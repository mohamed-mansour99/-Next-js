import './globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className=' text-white p-5 mb-5 bg-orange-700 text-center'>header</header>
        {children}
        <footer className='bg-[#000] text-yellow-300 p-5 mt-9'>footer</footer>
        </body>
    </html>
  )
}
