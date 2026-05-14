import { useState, useEffect } from 'react';
import Page1Despertar from './pages/Page1Despertar';
import Page2Revelacao from './pages/Page2Revelacao';
import Page3Apresentacao from './pages/Page3Apresentacao';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[#0A1828] text-[#F8F9FA] overflow-x-hidden">
      {currentPage === 1 && <Page1Despertar onNext={() => setCurrentPage(2)} />}
      {currentPage === 2 && <Page2Revelacao onNext={() => setCurrentPage(3)} />}
      {currentPage === 3 && <Page3Apresentacao />}
    </div>
  );
}

export default App;
