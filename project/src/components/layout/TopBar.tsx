import React from 'react';
import { Bell, Search, Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface TopBarProps {
  toggleSidebar: () => void;
  expanded: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ toggleSidebar, expanded }) => {
  const { theme, toggleTheme } = useTheme();
  const profileImage = 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <header className="h-16 bg-white dark:bg-[hsl(var(--background))] border-b border-[hsl(var(--border))] px-4 flex items-center justify-between">
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar}
          className="md:hidden mr-2 p-2 rounded-md hover:bg-[hsl(var(--secondary))] transition-colors"
          aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <Menu size={20} />
        </button>
        
        <div className="relative w-64">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={18} className="text-[hsl(var(--muted-foreground))]" />
          </div>
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-10 pr-4 py-2 rounded-md bg-[hsl(var(--secondary))] border-0 focus:ring-2 focus:ring-[hsl(var(--primary))] focus:outline-none"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleTheme} 
          className="p-2 rounded-md hover:bg-[hsl(var(--secondary))] transition-colors"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button className="p-2 rounded-md hover:bg-[hsl(var(--secondary))] transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-[hsl(var(--destructive))] rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-medium">Alex Johnson</div>
            <div className="text-xs text-[hsl(var(--muted-foreground))]">CEO</div>
          </div>
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-8 h-8 rounded-full object-cover" 
          />
        </div>
      </div>
    </header>
  );
};