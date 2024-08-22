import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Kofa</h1>
      </div>
    </header>
  );
};

export default Header;
