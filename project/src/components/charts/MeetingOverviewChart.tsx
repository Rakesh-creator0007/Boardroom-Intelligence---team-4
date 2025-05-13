import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export const MeetingOverviewChart: React.FC = () => {
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
        
        const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        const data = {
          labels,
          datasets: [
            {
              label: 'Total Meetings',
              data: [8, 12, 10, 14],
              borderColor: 'hsl(var(--chart-1))',
              backgroundColor: 'hsla(var(--chart-1), 0.2)',
              tension: 0.3,
              pointBackgroundColor: 'hsl(var(--chart-1))',
              pointBorderColor: '#fff',
              pointBorderWidth: 2,
              pointRadius: 4,
            },
            {
              label: 'Avg. Duration (mins)',
              data: [60, 52, 55, 48],
              borderColor: 'hsl(var(--chart-2))',
              backgroundColor: 'hsla(var(--chart-2), 0.2)',
              tension: 0.3,
              pointBackgroundColor: 'hsl(var(--chart-2))',
              pointBorderColor: '#fff',
              pointBorderWidth: 2,
              pointRadius: 4,
            }
          ]
        };

        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  usePointStyle: true,
                  boxWidth: 6,
                  boxHeight: 6,
                }
              },
              tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                titleColor: '#000',
                bodyColor: '#666',
                borderColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 1,
                boxPadding: 6,
                boxHeight: 6,
                usePointStyle: true,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                }
              },
              y: {
                grid: {
                  drawBorder: false,
                },
                ticks: {
                  stepSize: 5,
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