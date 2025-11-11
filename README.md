# Task Manager

A modern, responsive task management application built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ **Task Creation** - Add tasks with title, description, priority, and due date
- 🎯 **Priority Levels** - Organize tasks by Low, Medium, or High priority
- ✏️ **Edit Tasks** - Update task details inline
- 🗑️ **Delete Tasks** - Remove tasks with confirmation
- ✓ **Toggle Status** - Mark tasks as completed or pending
- 🔍 **Search** - Find tasks by title (case-insensitive)
- 🎨 **Filter** - Filter by status (All/Pending/Completed) and priority
- 💾 **Persistence** - Tasks saved to localStorage
- 📱 **Responsive** - Mobile-friendly design

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **localStorage** for data persistence

## Getting Started

### Installation

```bash
cd exam
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── TaskForm.tsx      # Task creation/editing form
│   ├── TaskItem.tsx      # Individual task display
│   ├── TaskList.tsx      # List of all tasks
│   └── TaskFilter.tsx    # Search and filter controls
├── types/
│   └── Task.ts           # TypeScript type definitions
├── App.tsx               # Main application component
└── index.css             # Tailwind CSS imports
```

## Usage

1. **Add a Task**: Fill in the form at the top with task details and click "Add Task"
2. **Edit a Task**: Click the "Edit" button on any task to modify its details
3. **Complete a Task**: Check the checkbox to mark a task as completed
4. **Delete a Task**: Click the "Delete" button (confirmation required)
5. **Search Tasks**: Use the search box to find tasks by title
6. **Filter Tasks**: Use the status and priority dropdowns to filter your view

## License

MIT
