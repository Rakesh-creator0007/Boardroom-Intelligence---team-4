import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export const TeamPerformanceChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        // Destroy previous chart instance if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        const data = {
          labels: ['Executive', 'Product', 'Engineering', 'Marketing', 'Sales'],
          datasets: [
            {
              label: 'Engagement Score',
              data: [85, 78, 92, 81, 73],
              backgroundColor: [
                'hsla(var(--chart-1), 0.8)',
                'hsla(var(--chart-2), 0.8)',
                'hsla(var(--chart-3), 0.8)',
                'hsla(var(--chart-4), 0.8)',
                'hsla(var(--chart-5), 0.8)',
              ],
              borderWidth: 0,
              borderRadius: 4,
            }
          ]
        };

        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                titleColor: '#000',
                bodyColor: '#666',
                borderColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 1,
                boxPadding: 6,
                boxHeight: 6,
                callbacks: {
                  label: function(context) {
                    return `Score: ${context.raw}%`;
                  }
                }
              }
            },
            scales: {
              x: {
                grid: {
                  display: false,
                }
              },
              y: {
                beginAtZero: true,
                max: 100,
                grid: {
                  drawBorder: false,
                },
                ticks: {
                  callback: function(value) {
                    return value + '%';
                  }
                }
              }
            }
          }
        });
      }
    }
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};