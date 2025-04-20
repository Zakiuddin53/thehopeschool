import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between w-full lg:px-24 md:px-12 px-4 py-2 z-50 text-black gap-7 bg-white bg-opacity-10 shadow-lg backdrop-blur-sm border-opacity-30 fixed">
      <Image
        className="w-10 h-auto"
        src="/images/school_logo.png"
        alt="the hope school Logo"
        width={100}
        height={100}
      />

      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-[#9771f0ab]">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
