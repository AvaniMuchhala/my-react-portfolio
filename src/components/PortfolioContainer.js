import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
  // By default, load About page (set as initial value)
  const [currentPage, setCurrentPage] = useState('About');

  // Return functional component to render appropriate page
  const renderContent = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  // Render the header, main content of page, and footer
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main style={{paddingBottom: '5rem'}}>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}
