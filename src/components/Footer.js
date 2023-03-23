import React from 'react';

function Footer() {
  return (
    <footer className="mt-5 p-3 bg-light text-center">
      <p>&copy; MARINKA {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
