// app/dashboard/profile/page.tsx
import Link from 'next/link';

export default function DashboardProfileListPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">โปรไฟล์ของฉัน</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/Dashboard/Profile/user777" className="text-blue-600 hover:underline">
            View John Doe's Profile
          </Link>
        </li>
        <li>
          <Link href="/Dashboard/Profile/user666" className="text-blue-600 hover:underline">
            View Jane Smith's Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
