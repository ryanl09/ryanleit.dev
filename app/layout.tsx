import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
  title: 'Ryan Leitenberger - Full Stack Developer',
  description: 'Software engineer passionate about building beautiful and functional web applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="xs:px-5 sm:px-10 md:px-20 py-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
