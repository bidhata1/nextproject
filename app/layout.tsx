import Link from 'next/link';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link> | <Link href="/about">About</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
