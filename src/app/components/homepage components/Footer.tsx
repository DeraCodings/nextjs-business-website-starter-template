import Link from "next/link";
import Button from "../reusable components/Button";

function Footer() {
  return (
    <footer className="flex flex-col gap-5 text-white bg-black pt-24 pb-8">
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-center items-center md:justify-around md:items-start">
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h2 className=" text-md font-semibold">Company Link</h2>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="#">LinkedIn</Link>
            </li>
            <li>
              <Link href="#">FaceBook</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h2 className=" text-md font-semibold">Contact Us</h2>
          <ul className="flex flex-col gap-3 items-center md:items-start">
            <li>
              <Link href="#">info@example.com</Link>
            </li>
            <Button url="#" variant="primary">
              Contact Us
            </Button>
          </ul>
        </div>
        <div>
          <p className="w-[35ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            mollitia saepe inventore, alias deleniti possimus.
          </p>
        </div>
      </div>
      <hr className="border border-white mx-8" />
      <div className="text-center">
        <p>All Rights Reserved &copy;2024</p>
      </div>
    </footer>
  );
}

export default Footer;
