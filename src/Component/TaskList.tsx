import type { Task } from '../types';

const statusColors = [
    'bg-blue-100 text-blue-700',
    'bg-orange-100 text-orange-700',
    'bg-green-100 text-green-700',
    'bg-purple-100 text-purple-700'
]

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="bg-white rounded-xl p-6  border border-gray-200">
      <div className="flex items-center w-full border-gray-500 justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Your Tasks</h3>
      </div>

      <div className="space-y-4">
        {tasks.map((task,index) => {

            const color = `${statusColors[index % 4]}`

            return (
                <div
                    key={task.id}
                    className="flex items-start gap-4 p-4 rounded-lg border border-white hover:cursor-pointer hover:border-gray-300 transition-colors"
                  >
                    <div className={`w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0 ${color}`}>
                      <span className={`text-sm font-semibold ${color}`}>{task.avatar}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">{task.title}</h4>
                      <p className="text-xs text-gray-500 mb-2">{task.description}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>Assigned to: <span className="font-medium text-gray-700">{task.assignedTo}</span></span>
                        <span>•</span>
                        <span>Due: <span className="font-medium text-gray-700">{task.dueDate}</span></span>
                      </div>
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${statusColors[index % 4]}`}>
                      {task.status}
                    </span>
                </div>
            )
        })}
      </div>

      <a href='#' className="w-full flex justify-end underline mt-4 text-sm text-button-primary font-medium hover:cursor-pointer">View All Cases</a>

    </div>
  );
}
