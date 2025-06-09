import logo from '../images/logo_white.png';

function NavigationBlack() {
  return (
    <header className="bg-black shadow-md w-full">
      <div className="w-full px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-4 text-black">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>
        {/* <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
          Join
        </button> */}
      </div>
    </header>
  );
}

export default NavigationBlack;
