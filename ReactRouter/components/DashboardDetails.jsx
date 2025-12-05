import React from 'react'
import { Outlet ,Link } from 'react-router'

const DashboardDetails = () => {
  return (
 <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Dashboard</h2>
        <nav className="space-y-2">
          <Link
            to="."
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
          >
            Overview
          </Link>
          <Link
            to="settings"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardDetails