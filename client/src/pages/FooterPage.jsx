import { Footer } from "flowbite-react";
import { BsLinkedin, BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { RiShareCircleLine } from "react-icons/ri";
import logoimage from "../../public/logoimage.png";
export default function FooterPage() {
  return (
    <Footer container className="footer bg-black w-full">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-8">
            <span className="flex items-center gap-2 text-white text-3xl">
              <Footer.Brand href="/" src={logoimage} alt="" />
              Hobit Homes
            </span>
            <div className="flex items-center gap-2 border-2 border-gray-800 rounded-lg p-0 mt-12">
              <input
                type="text"
                placeholder="Enter your Email"
                className="outline-none p-4 border-none  bg-black text-white w-full"
              />
              <RiShareCircleLine className="text-gray-500 text-3xl mr-4  hover:text-violet-500" />
            </div>
          </div>
          <div className="grid grid-cols-5 pr-12 mt-8 gap-4 ">
            <div>
              <Footer.Title title="" />
              <Footer.LinkGroup col className="text-white text-lg">
                <Footer.Link href="/">Home</Footer.Link>
                <Footer.Link href="/property">Properties</Footer.Link>
                <Footer.Link href="/hostel">Hostel</Footer.Link>
                {/* <Footer.Link href="#">Testimonial</Footer.Link>
                <Footer.Link href="#">FAQ&apos;s</Footer.Link> */}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="" />
              <Footer.LinkGroup col className="text-white text-lg">
                <Footer.Link href="/about">About Us</Footer.Link>
                <Footer.Link href="/contact">Contact Us</Footer.Link>
                <Footer.Link href="/">How it Works</Footer.Link>
                {/*<Footer.Link href="/">Our Team</Footer.Link>
                <Footer.Link href="/">Our Client</Footer.Link> */}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="" />
              <Footer.LinkGroup col className="text-white text-lg">
                <Footer.Link href="/services">Services</Footer.Link>
                <Footer.Link href="/services">Privacy Policy</Footer.Link>
                <Footer.Link href="/services">Term & Conditons</Footer.Link>
                {/* <Footer.Link href="#">Strategic Marketing</Footer.Link>
                <Footer.Link href="#">Negotiation Wizadry</Footer.Link>
                <Footer.Link href="#">Closing Success</Footer.Link>
                <Footer.Link href="#">Property Managment</Footer.Link> */}
              </Footer.LinkGroup>
            </div>
            {/* <div>
              <Footer.Title title="Properties" />
              <Footer.LinkGroup col className="text-white text-lg">
                <Footer.Link href="#">Portfolio</Footer.Link>
                <Footer.Link href="#">Categories</Footer.Link>
              </Footer.LinkGroup>
            </div> */}
            {/* <div>
              <Footer.Title title="Contact Us" />
              <Footer.LinkGroup col className="text-white text-lg">
                <Footer.Link href="#">Contact Form</Footer.Link>
                <Footer.Link href="#">Our Offices</Footer.Link>
              </Footer.LinkGroup>
            </div> */}
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full px-12 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Estatein.All Right Reversed."
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="hover:text-blue-500"
            />
            <Footer.Icon
              href="#"
              icon={BsLinkedin}
              className="hover:text-cyan-400"
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className="hover:text-sky-400"
            />
            <Footer.Icon
              href="#"
              icon={BsYoutube}
              className="hover:text-red-500"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
