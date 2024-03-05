import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="text-medium font-semibold bg-white p-5 flex justify-center items-center">
      
      <div className="hidden md:flex space-x-4">
        <Link to="/aboutus" className="text-black hover:text-gray-300">
          About Us
        </Link>
        <Link to="/artikel" className="text-black hover:text-gray-300">
          Artikel
        </Link>
        <div className="rounded-full overflow-hidden bg-slate-300 px-2 py-2">
          <h1 className="text-center">TANYA</h1>
          <p className="text-center">DOK</p>
        </div>
        <Link to="/mitra" className="text-black hover:text-gray-300">
          Mitra
        </Link>
        <Link to="/perusahaan" className="text-black hover:text-gray-300">
          Perusahaan
        </Link>
      </div>
      {/* <Button variant="bg-violet-500 text-white">Login</Button> */}
    </div>
  );
};

export default Navbar;
