import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPinterest, FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="pt-8 border-t-2 border-[#ccc] bg-blue-50 px-16 pb-8">
        <div>
          <img
            src="../../../public/assets/imgs/workwave-high-resolution-logo-black-transparent 1.png"
            alt=""
          />
        </div>
        <div className="mt-10 flex justify-between flex-wrap gap-10">
          <div>
            <h3 className="sub-font-3 font-extrabold text-lg text-[#3B3B3B] mb-5">
              Categories
            </h3>
            <div className="flex flex-col gap-3">
              <Link className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Graphics & Design
              </Link>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Digital Marketing
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Writing & Translation
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Video & Animation
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Music & Audio
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                WorkWave Logo Maker
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Programming & Tech
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Data
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Business
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Lifestyle
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Photography
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                End-to-End Projects
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Sitemap
              </NavLink>
            </div>
          </div>
          <div>
            <h3 className="sub-font-3 font-extrabold text-lg text-[#3B3B3B] mb-5">
              About
            </h3>
            <div className="flex flex-col gap-3">
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Careers
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Press & News
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Partnerships
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Privacy Policy
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Terms of Service
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Intellectual Property Claims
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Investor Relations
              </NavLink>
            </div>
          </div>
          <div>
            <h3 className="sub-font-3 font-extrabold text-lg text-[#3B3B3B] mb-5">
              Support and Education
            </h3>
            <div className="flex flex-col gap-3">
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Help & Support
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Trust & Safety
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Selling on WorkWave
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Buying on WorkWave
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                WorkWave Guides
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Learn
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Online Courses
              </NavLink>
            </div>
          </div>
          <div>
            <h3 className="sub-font-3 font-extrabold text-lg text-[#3B3B3B] mb-5">
              Community
            </h3>
            <div className="flex flex-col gap-3">
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Customer Success Stories
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Community Hub
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Forum
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Events
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Blog
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Creators
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Affiliates
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Poadcast
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Invite a Friend
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Become a Seller
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Community Standards
              </NavLink>
            </div>
          </div>
          <div>
            <h3 className="sub-font-3 font-extrabold text-lg text-[#3B3B3B] mb-5">
              Business and Solutions
            </h3>
            <div className="flex flex-col gap-3">
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                About Business Solutions
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                WorkWave Pro
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                WorkWave Certified
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Become an Agency
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                WorkWave Enterprise
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                ClearVoice
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Content Marketing
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Working Not Working
              </NavLink>
              <NavLink className="text-[#595959] text-lg hover:text-blue-500  transition-all duration-300">
                Contact Sales
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 flex justify-between items-center px-4 md:px-16 py-4">
        <div>
          <p className="sub-font-3 text-white text-xs md:text-base flex items-center gap-2">
            {" "}
            <span className="md:text-2xl">&copy;</span> WorkWave 2024
          </p>
        </div>
        <div>
          <img
            className="w-24 md:w-36"
            src="../../../public/assets/imgs/workwave-high-resolution-logo-white-transparent 2.png"
            alt=""
          />
        </div>
        <div className="flex gap-2 text-[#DBEAFE] md:text-2xl ">
          <FaPinterest />
          <FaFacebook />
          <FaXTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </>
  );
};

export default Footer;
