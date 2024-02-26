import { FaCopyright, FaHeart } from "react-icons/fa6";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By 
        <FaHeart className="fa-heart" />
        <a
          href="https://www.linkedin.com/in/nitin-kumar-89b613233"
          target="_blank"
          title="Nitin Kumar's Linkedin Profile"
        >
         Nitin Kumar
        </a>
        <FaCopyright className="fa-copy" />
          {year}
          <strong>
            just<span> food</span>
          </strong>
      </div>
    );
  };
  
  export default Footer;