import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KeyMetricsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ElementType;
  color: string;
}

export const KeyMetricsCard: React.FC<KeyMetricsCardProps> = ({ 
  title, 
  value, 
  change, 
  trend, 
  icon: Icon,
  color
}) => {
  return (
    <div className="bg-white dark:bg-[hsl(var(--card))] rounded-lg shadow p-6 transition-all duration-200 hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div 
          className="p-2 rounded-full" 
          style={{ backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)` }}
        >
          <Icon size={22} style={{ color }} />
        </div>
      </div>
      <div className="flex items-center">
        {trend === 'up' ? (
          <TrendingUp size={14} className="text-[hsl(var(--success))] mr-1" />
        ) : (
          <TrendingDown size={14} className="text-[hsl(var(--danger))] mr-1" />
        )}
        <span 
          className={`text-xs font-medium ${
            trend === 'up' ? 'text-[hsl(var(--success))]' : 'text-[hsl(var(--danger))]'
          }`}
        >
          {change}
        </span>
        <span className="text-xs text-[hsl(var(--muted-foreground))] ml-1">vs last month</span>
      </div>
    </div>
  );
};