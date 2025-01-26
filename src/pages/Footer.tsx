import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <p>© {new Date().getFullYear()} All rights reserved.</p>
      <p>Synchrony</p>
    </footer>
  );
};

export default Footer;