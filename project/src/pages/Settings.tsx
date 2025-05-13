import React from 'react';
import { Save } from 'lucide-react';

export const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>
        <button className="flex items-center bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
          <Save size={18} className="mr-1" />
          <span>Save Changes</span>
        </button>
      </div>
      
      <div className="bg-white dark:bg-[hsl(var(--card))] rounded-lg shadow p-6">
        <p className="text-center text-[hsl(var(--muted-foreground))] py-12">
          Settings page content will be displayed here.
        </p>
      </div>
    </div>
  );
};