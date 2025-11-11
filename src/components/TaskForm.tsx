import { useState, useEffect } from 'react';
import type { Task, Priority } from '../types/Task';

interface TaskFormProps {
  onSubmit: (task: Omit<Task, 'id' | 'createdAt' | 'status'>) => void;
  editingTask?: Task | null;
  onCancel?: () => void;
}

export default function TaskForm({ onSubmit, editingTask, onCancel }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>('Medium');
  const [dueDate, setDueDate] = useState('');
  const [titleError, setTitleError] = useState('');

  // Get today's date in YYYY-MM-DD format for min date validation
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Populate form when editing
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
      setDueDate(editingTask.dueDate);
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate title
    if (!title.trim()) {
      setTitleError('Title is required');
      return;
    }

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      priority,
      dueDate,
    });

    // Clear form
    setTitle('');
    setDescription('');
    setPriority('Medium');
    setDueDate('');
    setTitleError('');
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setPriority('Medium');
    setDueDate('');
    setTitleError('');
    if (onCancel) onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border-l-4 border-indigo-500 p-5 mb-5">
      <h2 className="text-lg font-bold mb-4 text-slate-800 uppercase tracking-wide text-sm">
        {editingTask ? 'Edit Task' : 'Create New Task'}
      </h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setTitleError('');
          }}
          className={`w-full px-4 py-2.5 border-2 rounded-lg focus:outline-none focus:border-indigo-500 ${
            titleError ? 'border-red-400' : 'border-slate-300'
          }`}
          placeholder="e.g., Complete project documentation"
        />
        {titleError && <p className="text-red-500 text-sm mt-1">{titleError}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
          Description (Optional)
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500"
          rows={3}
          placeholder="Add more details..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <div>
          <label htmlFor="priority" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
            Priority
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            className="w-full px-4 py-2.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label htmlFor="dueDate" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
            Due Date
          </label>
          <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          min={getTodayDate()}
          className="w-full px-4 py-2.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg hover:bg-indigo-700 font-semibold text-sm uppercase tracking-wide transition-colors"
        >
          {editingTask ? 'Update' : 'Add Task'}
        </button>
        {editingTask && (
          <button
            type="button"
            onClick={handleCancel}
            className="bg-slate-200 text-slate-700 px-6 py-2.5 rounded-lg hover:bg-slate-300 font-semibold text-sm uppercase tracking-wide transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
