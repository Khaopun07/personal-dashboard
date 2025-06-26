// app/dashboard/profile/page.tsx
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/outline';

export default function DashboardProfileListPage() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">โปรไฟล์ของฉัน</h1>
      <ul className="space-y-4">
        <li>
          <Link
            href="/Dashboard/Profile/user777"
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition"
          >
            <UserIcon className="h-6 w-6 text-blue-500" />
            <span className="text-gray-800 font-medium">View John Doe's Profile</span>
          </Link>
        </li>
        <li>
          <Link
            href="/Dashboard/Profile/user666"
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition"
          >
            <UserIcon className="h-6 w-6 text-blue-500" />
            <span className="text-gray-800 font-medium">View Jane Smith's Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
