import Image from "next/image";
import Button from "../reusable components/Button";

function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col md:flex-row gap-4 justify-center md:gap-0 items-center">
      <section className="flex flex-col gap-4 pl-16 justify-center my-4">
        <h1 className="font-semibold">
          <span className="text-xl">I&apos;m Dr. Hana Nakamura</span>
          <br />
          <span className="text-4xl">
            Expert{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Medicine
            </span>
          </span>
        </h1>
        <p className="text-wrap w-4/5">
          Offering personalized healthcare solutions tailored to your unique
          needs, so you can focus on what matters most.
        </p>
        <Button url="#">Book appointment</Button>
        {/* <Button url="#"></Button> */}
      </section>
      <section className="">
        <Image
          alt="hana_nakamura"
          src="/images/hana_with_blob.png"
          width={500}
          height={200}
          className="w-full h-full"
        />
      </section>
    </section>
  );
}

export default HeroSection;
