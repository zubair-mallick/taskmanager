import type { Priority } from '../types/Task';

interface TaskFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  statusFilter: 'All' | 'Pending' | 'Completed';
  onStatusFilterChange: (filter: 'All' | 'Pending' | 'Completed') => void;
  priorityFilter: 'All' | Priority;
  onPriorityFilterChange: (filter: 'All' | Priority) => void;
}

export default function TaskFilter({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  priorityFilter,
  onPriorityFilterChange,
}: TaskFilterProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border-l-4 border-indigo-500 p-5 mb-5">
      <h2 className="text-sm font-bold mb-4 text-slate-800 uppercase tracking-wide">Search & Filter</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div>
          <label htmlFor="search" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
            Search
          </label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by title..."
            className="w-full px-4 py-2.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Status Filter */}
        <div>
          <label htmlFor="status" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
            Status
          </label>
          <select
            id="status"
            value={statusFilter}
            onChange={(e) => onStatusFilterChange(e.target.value as 'All' | 'Pending' | 'Completed')}
            className="w-full px-4 py-2.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
          >
            <option value="All">All Tasks</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Priority Filter */}
        <div>
          <label htmlFor="priority-filter" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
            Priority
          </label>
          <select
            id="priority-filter"
            value={priorityFilter}
            onChange={(e) => onPriorityFilterChange(e.target.value as 'All' | Priority)}
            className="w-full px-4 py-2.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
          >
            <option value="All">All Priorities</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>
    </div>
  );
}
