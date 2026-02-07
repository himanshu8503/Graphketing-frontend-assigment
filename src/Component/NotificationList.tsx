import { MoreHorizontal, Calendar } from 'lucide-react';
import type { Notification } from '../types';
import { statusColors } from '../data';

interface NotificationListProps {
  notifications: Notification[];
}

export default function NotificationList({ notifications }: NotificationListProps) {
  return (
    <div className="bg-white rounded-xl  border border-gray-200">
      <div className='bg-white w-full rounded-t-xl px-6 py-4 border-b border-gray-200'>
        <h3 className="text-lg font-bold text-gray-900">Case Notifications</h3>
      </div>

      <div className="space-y-2">
        {notifications.map((notification,index) => (
          <div
            key={notification.id}
            className="flex items-start gap-3 p-4 rounded-lg border border-white hover:border-gray-300 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h4 className={`text-sm font-semibold ${statusColors[index%4].split(" ")[1]}`}>{notification.title}</h4>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mb-1">{notification.description}</p>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                <span>Sat: {notification.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
