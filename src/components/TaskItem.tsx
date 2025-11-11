import type { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

export default function TaskItem({ task, onToggleComplete, onDelete, onEdit }: TaskItemProps) {
  const priorityColors = {
    Low: 'bg-emerald-100 text-emerald-800',
    Medium: 'bg-amber-100 text-amber-800',
    High: 'bg-rose-100 text-rose-800',
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${task.title}"?`)) {
      onDelete(task.id);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border-l-4 p-4 transition-all ${
        task.status === 'Completed'
          ? 'border-slate-400 opacity-60'
          : 'border-indigo-500'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <input
            type="checkbox"
            checked={task.status === 'Completed'}
            onChange={() => onToggleComplete(task.id)}
            className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
          />
          <div className="flex-1">
            <h3
              className={`text-base font-semibold ${
                task.status === 'Completed'
                  ? 'line-through text-slate-500'
                  : 'text-slate-800'
              }`}
            >
              {task.title}
            </h3>
            {task.description && (
              <p
                className={`text-sm mt-2 leading-relaxed ${
                  task.status === 'Completed' ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {task.description}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mt-3">
              <span
                className={`px-2.5 py-1 text-xs font-bold rounded-full ${
                  priorityColors[task.priority]
                }`}
              >
                {task.priority.toUpperCase()}
              </span>
              <span className="px-2.5 py-1 text-xs bg-slate-100 text-slate-700 rounded-full font-medium">
                {formatDate(task.dueDate)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 ml-4">
          <button
            onClick={() => onEdit(task)}
            className="px-3 py-1.5 text-xs bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 font-bold uppercase tracking-wider transition-colors"
            title="Edit task"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-3 py-1.5 text-xs bg-rose-50 text-rose-700 rounded-lg hover:bg-rose-100 font-bold uppercase tracking-wider transition-colors"
            title="Delete task"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
