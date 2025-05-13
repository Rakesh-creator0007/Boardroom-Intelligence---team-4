import React from 'react';
import { Clock, Users, Video } from 'lucide-react';

interface Meeting {
  id: number;
  title: string;
  time: string;
  duration: string;
  participants: number;
  type: 'strategy' | 'review' | 'planning';
}

export const UpcomingMeetings: React.FC = () => {
  const meetings: Meeting[] = [
    { 
      id: 1, 
      title: 'Q2 Strategy Planning', 
      time: 'Today, 10:00 AM', 
      duration: '60m', 
      participants: 8, 
      type: 'strategy' 
    },
    { 
      id: 2, 
      title: 'Product Review', 
      time: 'Today, 2:30 PM', 
      duration: '45m', 
      participants: 6, 
      type: 'review' 
    },
    { 
      id: 3, 
      title: 'Budget Approval', 
      time: 'Tomorrow, 11:00 AM', 
      duration: '30m', 
      participants: 4, 
      type: 'planning' 
    },
    { 
      id: 4, 
      title: 'Marketing Campaign Launch', 
      time: 'Tomorrow, 3:00 PM', 
      duration: '60m', 
      participants: 10, 
      type: 'strategy' 
    },
  ];

  const getBadgeColor = (type: Meeting['type']) => {
    switch (type) {
      case 'strategy':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'review':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'planning':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-4">
      {meetings.map(meeting => (
        <div 
          key={meeting.id} 
          className="p-4 border border-[hsl(var(--border))] rounded-lg transition-all duration-200 hover:shadow-sm cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{meeting.title}</h3>
              <div className="flex items-center mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                <Clock size={14} className="mr-1" />
                <span>{meeting.time}</span>
                <span className="mx-2">•</span>
                <span>{meeting.duration}</span>
              </div>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${getBadgeColor(meeting.type)}`}>
              {meeting.type.charAt(0).toUpperCase() + meeting.type.slice(1)}
            </span>
          </div>
          <div className="flex items-center mt-3 text-sm">
            <div className="flex items-center mr-4">
              <Users size={14} className="mr-1 text-[hsl(var(--muted-foreground))]" />
              <span>{meeting.participants} participants</span>
            </div>
            <button className="ml-auto text-[hsl(var(--primary))] flex items-center">
              <Video size={14} className="mr-1" />
              <span>Join</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};