import { ArrowDown, ArrowUp, Briefcase, ClipboardList, DollarSign, Users } from 'lucide-react';
import type { CardProps } from '../types';



const iconMap = {
  cases: { icon: Briefcase, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
  tasks: { icon: ClipboardList, bgColor: 'bg-orange-100', iconColor: 'text-orange-600' },
  revenue: { icon: DollarSign, bgColor: 'bg-green-100', iconColor: 'text-green-600' },
  clients: { icon: Users, bgColor: 'bg-purple-100', iconColor: 'text-purple-600' },
};

export default function Card({ title, value, change, changeLabel, iconType, isPositive }: CardProps) {
  const { icon: Icon, bgColor, iconColor } = iconMap[iconType];

  return (
    <div className="bg-secondary md: w-xs rounded-xl p-6 mx-auto border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex justify-start items-start gap-4 mb-4">
        <div className={`${bgColor} p-3 rounded-lg`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className=' flex flex-col justify-center'>
            <p className="text-sm text-gray-500 mb-1">{title}</p>
            <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-1">
          {isPositive ? (
            <ArrowUp className="w-4 h-4 text-green-500" />
          ) : (
            <ArrowDown className="w-4 h-4 text-red-500" />
          )}
          <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change}%
          </span>
          <span className="text-sm text-gray-500">{changeLabel}</span>
        </div>
      </div>
    </div>
  );
}
