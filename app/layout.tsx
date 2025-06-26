// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import { HomeIcon, Squares2X2Icon, InformationCircleIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Personal Dashboard App',
  description: 'Built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        {/* Header */}
        <header className="bg-blue-600 text-white shadow">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-wide">MyApp</h1>
            <ul className="flex items-center space-x-6 text-sm">
              <li className="flex items-center space-x-2 hover:text-blue-200 transition">
                <HomeIcon className="h-5 w-5" />
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-200 transition">
                <Squares2X2Icon className="h-5 w-5" />
                <Link href="/Dashboard" className="hover:underline">Dashboard</Link>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-200 transition">
                <InformationCircleIcon className="h-5 w-5" />
                <Link href="/About" className="hover:underline">About</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-blue-700 text-white text-center py-4 text-sm mt-12 shadow-inner">
          <p>© 2025 My App. Developed by 652021049 Natthawut Woonkhong.</p>
        </footer>
      </body>
    </html>
  );
}
