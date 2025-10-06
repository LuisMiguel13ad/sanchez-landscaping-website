import React from "react";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-40 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#top" className="inline-flex items-center gap-3">
          <img src="/logo.png" alt="Sanchez Landscaping logo" className="h-10 w-auto" />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-foreground font-serif">
              Sanchez Landscaping
            </h1>
            <p className="text-sm text-muted-foreground font-serif">
              & Hardscaping
            </p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;


