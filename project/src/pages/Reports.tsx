import React from 'react';
import { Download, Filter } from 'lucide-react';

export const Reports: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex space-x-2">
          <button className="flex items-center bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            <Filter size={18} className="mr-1" />
            <span>Filter</span>
          </button>
          <button className="flex items-center bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            <Download size={18} className="mr-1" />
            <span>Export</span>
          </button>
        </div>
      </div>
      
      <div className="bg-white dark:bg-[hsl(var(--card))] rounded-lg shadow p-6">
        <p className="text-center text-[hsl(var(--muted-foreground))] py-12">
          Reports page content will be displayed here.
        </p>
      </div>
    </div>
  );
};