// app/dashboard/layout.tsx
import Link from 'next/link';
import {
  Squares2X2Icon,
  Cog6ToothIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-sm p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Dashboard</h2>
        <ul className="space-y-4 text-sm">
          <li>
            <Link
              href="/Dashboard"
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition font-medium"
            >
              <Squares2X2Icon className="h-5 w-5" />
              <span>Overview</span>
            </Link>
          </li>
          <li>
            <Link
              href="/Dashboard/Settings"
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition font-medium"
            >
              <Cog6ToothIcon className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link
              href="/Dashboard/Profile"
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition font-medium"
            >
              <UserCircleIcon className="h-5 w-5" />
              <span>My Profile</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
