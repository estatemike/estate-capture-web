import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto px-8">
      <div className="flex items-center text-2xl">
        <AnchorLink className="w-40 mr-3" href="#home">
          <img src="/pictures/logo_horizontal.png" alt="logo" />
        </AnchorLink>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#benefits">
          Benefits
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#camera">
          Camera
        </AnchorLink>
        <AnchorLink className="px-4" href="#contacts">
          Contacts
        </AnchorLink>
      </div>
      <div className="flex mt-4 sm:mt-0" />
    </div>
  </header>
);

export default Header;
