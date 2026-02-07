import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import type { Message } from "../types";
import { statusColors } from "../data";

interface MessageProps {
  messages: Message[];
}

const Messages = ({ messages }: MessageProps) => {
  return (
    <div>
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">
            Message | Payment Update
          </h3>
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
              <ChevronLeft className="w-5 h-5 text-button-primary" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
              <ChevronRight className="w-5 h-5 text-button-primary" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
              <MoreHorizontal className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={message.id} className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${statusColors[index%4].split(" ")[0]}`}>
                  <span className={`text-xs font-semibold ${statusColors[index%4].split(" ")[1]}`}>
                    {message.avatar}
                  </span>
                </div>
                <span className={`text-sm font-semibold ${statusColors[index%4].split(" ")[1]}`}>
                  Message from {message.from}
                </span>
              </div>
              <p
                className={`text-sm text-gray-700  leading-relaxed p-4 rounded-xl ${statusColors[index % 4].split(" ")[0]}`}
              >
                {message.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
