// app/dashboard/settings/page.tsx

export default function DashboardSettingsPage() {
  return (
    <div className="p-8 bg-white rounded-xl shadow-md max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Settings</h1>

      {/* Section: Preferences */}
      <section className="space-y-6">
        {/* Toggle: Dark Mode */}
        <div className="flex items-center justify-between">
          <span className="text-gray-800 font-medium">Enable Dark Mode</span>
          <input type="checkbox" className="toggle toggle-primary" />
        </div>

        {/* Language Selector */}
        <div>
          <label htmlFor="language" className="block text-gray-800 font-medium mb-2">
            Preferred Language
          </label>
          <select
            id="language"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>English</option>
            <option>ไทย</option>
            <option>日本語</option>
          </select>
        </div>

        {/* Input: Email */}
        <div>
          <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
            Notification Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Save Button */}
        <div className="text-right">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Save Settings
          </button>
        </div>
      </section>
    </div>
  );
}
