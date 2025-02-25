import BeTalentLogo from '@/assets/BeTalent_logo.svg?react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md" data-testid="navbar">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex h-16 items-center">
            <div className="flex-shrink-0">
              <BeTalentLogo aria-label="BeTalent Logo" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
