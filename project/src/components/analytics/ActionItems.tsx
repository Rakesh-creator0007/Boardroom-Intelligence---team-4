import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';

interface ActionItem {
  id: number;
  task: string;
  assignee: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
}

export const ActionItems: React.FC = () => {
  const [actionItems, setActionItems] = React.useState<ActionItem[]>([
    { 
      id: 1, 
      task: 'Prepare Q2 financial report', 
      assignee: 'Alex Johnson', 
      dueDate: 'Jun 15', 
      priority: 'high',
      completed: false
    },
    { 
      id: 2, 
      task: 'Review product roadmap', 
      assignee: 'Sarah Chen', 
      dueDate: 'Jun 18', 
      priority: 'medium',
      completed: false
    },
    { 
      id: 3, 
      task: 'Update board presentation', 
      assignee: 'Michael Brown', 
      dueDate: 'Jun 20', 
      priority: 'high',
      completed: false
    },
    { 
      id: 4, 
      task: 'Follow up with investors', 
      assignee: 'Alex Johnson', 
      dueDate: 'Jun 22', 
      priority: 'medium',
      completed: false
    },
    { 
      id: 5, 
      task: 'Schedule team offsite', 
      assignee: 'Sarah Chen', 
      dueDate: 'Jun 25', 
      priority: 'low',
      completed: true
    },
  ]);

  const toggleComplete = (id: number) => {
    setActionItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const getPriorityColor = (priority: ActionItem['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const filteredItems = actionItems.filter(item => !item.completed).slice(0, 4);

  return (
    <div className="space-y-4">
      {filteredItems.map(item => (
        <div 
          key={item.id}
          className={`p-3 border border-[hsl(var(--border))] rounded-lg flex items-start gap-3 transition-all duration-200 ${
            item.completed ? 'opacity-50' : ''
          }`}
        >
          <button 
            onClick={() => toggleComplete(item.id)}
            className="mt-0.5 flex-shrink-0"
          >
            <CheckCircle 
              size={18} 
              className={`${
                item.completed 
                  ? 'text-[hsl(var(--success))] fill-[hsl(var(--success))]' 
                  : 'text-[hsl(var(--muted-foreground))]'
              }`}
            />
          </button>
          <div className="flex-1 min-w-0">
            <p className={`font-medium truncate ${item.completed ? 'line-through' : ''}`}>
              {item.task}
            </p>
            <div className="flex items-center mt-1 text-xs text-[hsl(var(--muted-foreground))]">
              <span>{item.assignee}</span>
              <span className="mx-1">•</span>
              <Clock size={12} className="mr-1" />
              <span>{item.dueDate}</span>
            </div>
          </div>
          <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(item.priority)}`}>
            {item.priority}
          </span>
        </div>
      ))}
    </div>
  );
};