// app/dashboard/page.tsx

export default function DashboardOverviewPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-md mt-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Dashboard Overview</h1>
      <p className="text-gray-700 text-lg">
        This is the main dashboard page. Use the sidebar to navigate through your profile,
        settings, and more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Profile</h2>
          <p className="text-gray-600">View and manage your personal information.</p>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Settings</h2>
          <p className="text-gray-600">Update your preferences and account settings.</p>
        </div>
      </div>
    </div>
  );
}
