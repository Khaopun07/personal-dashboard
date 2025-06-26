// app/layout.tsx
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/Dashboard">Dashboard</Link></li>
              <li><Link href="/About">About</Link></li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2025 My App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
