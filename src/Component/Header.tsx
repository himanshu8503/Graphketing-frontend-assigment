import {
  Search,
  Bell,
  Settings,
  UserCircle,
  UserPlus,
  UserCheck,
  Play,
  Square,
} from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-40">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1 min-w-max">
              <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
              <p className="text-sm text-gray-500 mt-1 hidden sm:block">
                Hi, Himanshu. What are your plans for today?
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 lg:gap-4 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial min-w-48">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="hidden xl:flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg whitespace-nowrap">
                <Clock className="w-4 h-4 text-button-primary" />
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-black">
                        Time Tracker
                    </span>
                    <span className="text-xs font-bold text-button-primary">08:40:10</span>
                </div>
              </div>

              <button className="hidden lg:flex items-center gap-2 bg-button-primary text-white hover:cursor-pointer px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
                <Play className="w-4 h-4" />
                Start
              </button>

              <button className="hidden lg:flex items-center gap-2 bg-gray-900 text-white px-4 py-2 hover:cursor-pointer rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                <Square className="w-4 h-4" />
                Stop
              </button>

              <button className="hidden md:flex items-center gap-2 bg-button-secondary text-gray-700 px-3 py-2 rounded-lg text-xs lg:text-sm font-medium hover:bg-gray-200 transition-colors whitespace-nowrap">
                <UserPlus className="w-4 h-4" />
                <span className="hidden lg:inline">Invite Team Member</span>
              </button>

              <button className="flex items-center gap-2 bg-button-primary text-white px-3 py-2 rounded-lg text-xs lg:text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
                <UserCheck className="w-4 h-4" />
                <span className="hidden lg:inline">Register New Client</span>
              </button>

              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors hidden sm:block">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>

              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <UserCircle className="w-5 h-5 text-button-primary" />
              </button>
            </div>
        </div>
    </div>
  );
}

function Clock({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
