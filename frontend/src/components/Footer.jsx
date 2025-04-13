import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white px-4 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start text-center md:text-left gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter Subscription</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full text-black w-64 mb-3 bg-white"
          />
          <br />
          <button className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-gray-300">
            Subscribe
          </button>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4">We are social</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center mt-8 text-sm opacity-80">
        Copyrights & Terms of use
      </div>
    </footer>
  );
};

export default Footer;