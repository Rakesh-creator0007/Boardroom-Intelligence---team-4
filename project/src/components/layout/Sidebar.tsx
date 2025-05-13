import React from 'react';
import { 
  LayoutDashboard, 
  Video, 
  BarChart, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  LogOut
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface SidebarProps {
  expanded: boolean;
  onToggle: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  expanded, 
  onToggle, 
  currentPage, 
  onNavigate 
}) => {
  const { theme } = useTheme();
  
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'meetings', label: 'Meetings', icon: Video },
    { id: 'reports', label: 'Reports', icon: BarChart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside 
      className={`sidebar fixed left-0 top-0 h-full z-40 transition-all duration-300 ease-in-out
                 ${expanded ? 'w-64' : 'w-20'} 
                 bg-[hsl(var(--sidebar-background))] text-[hsl(var(--sidebar-foreground))]`}
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between p-4 h-16 border-b border-[hsl(var(--sidebar-border))]">
          {expanded && (
            <h1 className="text-xl font-bold">BoardRoom</h1>
          )}
          <button
            onClick={onToggle}
            className={`rounded-full p-1.5 hover:bg-[hsl(var(--sidebar-accent))] transition-colors ${!expanded && 'mx-auto'}`}
            aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-3 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`flex items-center w-full p-3 rounded-md transition-colors
                              ${currentPage === item.id 
                                ? 'bg-[hsl(var(--sidebar-accent))]' 
                                : 'hover:bg-[hsl(var(--sidebar-primary))]'
                              }`}
                  >
                    <Icon size={20} />
                    {expanded && <span className="ml-3 nav-text">{item.label}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-[hsl(var(--sidebar-border))]">
          <button
            className={`flex items-center w-full p-3 rounded-md
                      hover:bg-[hsl(var(--sidebar-primary))] transition-colors`}
          >
            <LogOut size={20} />
            {expanded && <span className="ml-3 nav-text">Log out</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};