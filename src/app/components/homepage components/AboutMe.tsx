import Image from "next/image";
import Button from "../reusable components/Button";

function AboutMe() {
  return (
    <div className="flex h-screen flex-col py-16 gap-6 md:gap-16 md:flex-row md:justify-evenly md:items-center">
      <div className="flex justify-center px-9 md:pl-9 md:px-0">
        <Image
          alt="hana_at_work"
          src="/images/hana_about_me (1).png"
          width={500}
          height={500}
          className=""
        />
      </div>
      <div className="flex flex-col gap-4 pl-8 py-4">
        <small className="text-xs bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          About me
        </small>
        <h2 className="text-2xl w-full md:w-3/5 font-semibold">
          The medical field is ever changing and doctors are at the forefront of
          it.
        </h2>
        <p className="w-full pr-5 md:w-4/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum enim
          expedita autem quaerat, totam voluptatibus.
        </p>
        <div>
          <div className="inline-block mr-6 text-center">
            <span className="text-2xl font-bold">1000+</span>
            <br />
            <span className="text-sm font-light">patients helped</span>
          </div>
          <div className="inline-block text-center">
            <span className="text-2xl font-bold">12+</span>
            <br />
            <span className="text-sm font-light">years experience</span>
          </div>
        </div>
        <Button className="" url="">
          Book me
        </Button>
      </div>
    </div>
  );
}

export default AboutMe;
