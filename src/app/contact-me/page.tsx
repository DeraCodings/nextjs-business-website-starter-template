import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../components/contactForm";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

function ContactMePage() {
  return (
    <section className="min-h-screen max-h-full">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-3xl font-semibold text-center">
        Contact Me
      </h2>
      <p className="text-base my-5 text-center px-5">
        It shouldn&apos;t be hard to reach out to your doctor, should it?
      </p>
      <section className="flex flex-col items-center justify-center md:flex-row">
        <div>
          <ContactForm />
        </div>
        <div className="bg-white md:bg-gradient-to-r from-blue-500 to-purple-500 px-14 py-6 items-center h-full">
          <div className="flex flex-col md:flex-row justify-center gap-10 my-8 text-black md:text-white">
            <div className="flex flex-col items-center gap-2">
              <FaPhoneAlt size={30} className="text-black md:text-white" />
              <h3 className="text-2xl font-semibold md:text-base md:text-center text-wrap md:font-normal">Phone number</h3>
              <p className="text-xl font-semibold md:text-base md:text-center text-wrap md:font-normal">+1 900 456 678</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MdEmail size={30} className="text-black md:text-white" />
              <h3 className="text-2xl font-semibold md:text-base md:text-center text-wrap md:font-normal">Email</h3>
              <p className="text-xl font-semibold md:text-base md:text-center text-wrap md:font-normal">support@hananakamura.com</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-10 my-8 text-black md:text-white">
            <div className="flex flex-col items-center gap-2">
              <IoLogoWhatsapp size={30} className="text-black md:text-white" />
              <h3 className="text-2xl font-semibold md:text-base md:text-center text-wrap md:font-normal">WhatsApp</h3>
              <p className="text-xl font-semibold md:text-base md:text-center text-wrap md:font-normal">+1 879 003 419</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaMapMarkerAlt size={30} className="text-black md:text-white" />
              <h3 className="text-2xl font-semibold md:text-base md:text-center text-wrap md:font-normal">My Office</h3>
              <p className="text-xl font-semibold md:text-base md:text-center text-wrap md:font-normal">123 Oak Road Alabama, NY</p>
            </div>
          </div>
        </div>
      </section>
      <div>24</div>
    </section>
  );
}

export default ContactMePage;
