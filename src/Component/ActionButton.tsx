import { Calendar, Briefcase, FileText, Wrench, Ticket, StickyNote } from 'lucide-react';

interface ActionButtonProps {
  label: string;
  iconType: 'calendar' | 'cases' | 'docs' | 'tools' | 'tickets' | 'notes';
}

const iconMap = {
  calendar: { icon: Calendar, bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
  cases: { icon: Briefcase, bgColor: 'bg-orange-50', iconColor: 'text-orange-600' },
  docs: { icon: FileText, bgColor: 'bg-green-50', iconColor: 'text-green-600' },
  tools: { icon: Wrench, bgColor: 'bg-purple-50', iconColor: 'text-purple-600' },
  tickets: { icon: Ticket, bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
  notes: { icon: StickyNote, bgColor: 'bg-orange-50', iconColor: 'text-orange-600' },
};

export default function ActionButton({ label, iconType }: ActionButtonProps) {
  const { icon: Icon, bgColor, iconColor } = iconMap[iconType];

  return (
    <div>
        <button className=" bg-secondary rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 md:flex items-center gap-4 w-full">
          <div className={`${bgColor} p-3 rounded-lg`}>
            <Icon className={`w-5 h-5 ${iconColor}`} />
          </div>
          <span className="md:text-sm text-xs font-medium text-gray-900">{label}</span>
        </button>

    </div>

  );
}
