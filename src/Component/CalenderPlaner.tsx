import { ChevronLeft, ChevronRight, Video, FileText } from 'lucide-react';
import type { CalendarEvent } from '../types';

interface CalendarPanelProps {
  events: CalendarEvent[];
}

export default function CalendarPanel({ events }: CalendarPanelProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">15 Dec, Monday</h3>
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-blue-300 rounded-full transition-colors">
              <ChevronLeft className="w-5 h-5 text-button-primary" />
            </button>
            <button className="p-1 hover:bg-blue-300 rounded-full transition-colors">
              <ChevronRight className="w-5 h-5 text-button-primary" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="pb-4 border-b border-gray-100 last:border-0">
              <p className="text-sm font-semibold text-gray-900 mb-2">{event.time}</p>
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${event.icon === 'video' ? 'bg-blue-100' : 'bg-green-100'}`}>
                  {event.icon === 'video' ? (
                    <Video className={`w-4 h-4 ${event.icon === 'video' ? 'text-blue-600' : 'text-green-600'}`} />
                  ) : (
                    <FileText className="w-4 h-4 text-green-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">{event.title}</h4>
                  <p className="text-xs text-gray-500">{event.description}</p>
                </div>
              </div>
            </div>
          ))}

          <a href='#' className="w-full flex justify-end underline mt-4 text-sm text-button-primary font-medium hover:cursor-pointer">See More</a>

        </div>
      </div>
    </div>
  );
}
