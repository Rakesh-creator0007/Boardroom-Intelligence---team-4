import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { Dashboard } from './pages/Dashboard';
import { Meetings } from './pages/Meetings';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'meetings':
        return <Meetings />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar 
          expanded={sidebarExpanded} 
          onToggle={toggleSidebar} 
          currentPage={currentPage}
          onNavigate={setCurrentPage}
        />
        <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${sidebarExpanded ? 'md:ml-64' : 'md:ml-20'}`}>
          <TopBar toggleSidebar={toggleSidebar} expanded={sidebarExpanded} />
          <main className="flex-1 overflow-y-auto bg-[#F9FAFB] p-6">
            {renderPage()}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;