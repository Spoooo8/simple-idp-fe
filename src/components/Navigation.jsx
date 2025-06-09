import logo from '../images/logo.png';

function Navigation({ scrollToHero, scrollToSectionA, scrollToFooter }) {
  return (
    <header className="bg-white shadow-md w-full">
      <div className="w-full px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-4 text-black">
          <span
            onClick={scrollToHero}
            className="cursor-pointer"
            style={{ color: 'black' }}
          >
            Home Page
          </span>
          <span
            onClick={scrollToSectionA}
            className="cursor-pointer"
            style={{ color: 'black' }}
          >
            Services
          </span>
          <span
            onClick={scrollToFooter}
            className="cursor-pointer"
            style={{ color: 'black' }}
          >
            Contact Us
          </span>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
          Join
        </button>
      </div>
    </header>
  );
}

export default Navigation;
