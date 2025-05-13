import React from 'react';
import { KeyMetricsCard } from '../components/analytics/KeyMetricsCard';
import { MeetingOverviewChart } from '../components/charts/MeetingOverviewChart';
import { TeamPerformanceChart } from '../components/charts/TeamPerformanceChart';
import { UpcomingMeetings } from '../components/analytics/UpcomingMeetings';
import { ActionItems } from '../components/analytics/ActionItems';
import { Calendar, Clock, Users, BarChart2, TrendingUp, AlertTriangle } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const metrics = [
    { id: 1, title: 'Total Meetings', value: '24', change: '+12%', icon: Calendar, trend: 'up', color: 'var(--chart-1)' },
    { id: 2, title: 'Avg. Duration', value: '52m', change: '-8%', icon: Clock, trend: 'down', color: 'var(--chart-2)' },
    { id: 3, title: 'Participation', value: '87%', change: '+5%', icon: Users, trend: 'up', color: 'var(--chart-3)' },
    { id: 4, title: 'Action Items', value: '38', change: '+24%', icon: BarChart2, trend: 'up', color: 'var(--chart-4)' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-6">Executive Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map(metric => (
            <KeyMetricsCard key={metric.id} {...metric} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-[hsl(var(--card))] rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Meeting Overview</h2>
              <select className="text-sm border-0 rounded-md bg-[hsl(var(--secondary))] py-1 px-2 focus:ring-2 focus:ring-[hsl(var(--primary))] focus:outline-none">
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last Quarter</option>
              </select>
            </div>
            <MeetingOverviewChart />
          </div>
          
          <div className="bg-white dark:bg-[hsl(var(--card))] rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Team Performance</h2>
              <select className="text-sm border-0 rounded-md bg-[hsl(var(--secondary))] py-1 px-2 focus:ring-2 focus:ring-[hsl(var(--primary))] focus:outline-none">
                <option>By Department</option>
                <option>By Manager</option>
                <option>By Project</option>
              </select>
            </div>
            <TeamPerformanceChart />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-[hsl(var(--card))] rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Upcoming Meetings</h2>
              <button className="text-[hsl(var(--primary))] hover:underline text-sm font-medium">
                View All
              </button>
            </div>
            <UpcomingMeetings />
          </div>
          
          <div className="bg-white dark:bg-[hsl(var(--card))] rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Action Items</h2>
              <button className="text-[hsl(var(--primary))] hover:underline text-sm font-medium">
                View All
              </button>
            </div>
            <ActionItems />
          </div>
        </div>
      </div>
    </div>
  );
};