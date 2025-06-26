// app/dashboard/layout.tsx
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 p-4 bg-gray-100 border-r border-gray-300">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/Dashboard" className="text-blue-600 hover:underline">
              Overview
            </Link>
          </li>
          <li>
            <Link href="/Dashboard/Settings" className="text-blue-600 hover:underline">
              Settings
            </Link>
          </li>
          <li>
            <Link href="/Dashboard/Profile" className="text-blue-600 hover:underline">
              My Profile
            </Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-6 bg-white shadow-inner">{children}</main>
    </div>
  );
}
