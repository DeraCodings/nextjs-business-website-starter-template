import Image from "next/image";
import Button from "../components/reusable components/Button";
import Testimonials from "../components/homepage components/Testimonials";
import AwardCard from "../components/reusable components/AwardCard";

function AboutMePage() {
  return (
    <section className="min-h-screen max-h-full pt-12 py-8">
      <h1 className="text-2xl text-center font-bold my-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Your Health, My Priority – Personalized Care Tailored for You</h1>
      <section className="flex flex-col-reverse md:items-center px-7 py-6 my-12 md:flex-row-reverse7  h-full">
        <section className="w-full mt-5 md:mt-2 md:w-1/2 px-5">
          <p className="font-semibold leading-7 tracking-wider">
            Welcome! I&apos;m Dr. Hana Nakamura, a dedicated personal doctor
            with a passion for helping you achieve optimal health and
            well-being. My mission is to provide compassionate, individualized
            care so you can lead a healthier, happier life.
          </p>
        </section>
        <section className="flex items-center justify-center">
          <Image
            alt="hana_nakamura"
            src="/images/hana_for_about_me.png"
            width={600}
            height={600}
            className="w-4/5"
          />
        </section>
      </section>
      <section className="flex flex-col py-8 text-white bg-blue-600 items-center gap-8">
        <h2>Ready to take control of your health?</h2>
        <Button url="#" variant="secondary">Schedule your first consultation today</Button>
      </section>
      <section>
        <Testimonials />
      </section>
      <section className="flex flex-col-reverse md:items-center gap-8 px-7 py-6 my-12 md:flex-row-reverse">
        <section className="flex items-center justify-center">
          <Image
            src="/images/hana_at_work.png"
            alt="hana_nakamura_kitchen"
            width={600}
            height={600}
            className="w-4/5"
          />
        </section>
        <section className="w-full mt-5 md:mt-2 md:w-1/2 px-5">
          <h2 className="text-2xl font-bold text-center">My Story</h2>
          <p className="px-4">
            For years, I’ve been committed to helping patients overcome health
            challenges and achieve their goals. Whether managing chronic
            conditions, improving lifestyle habits, or addressing specific
            concerns, I provide guidance every step of the way. Together, we’ll
            create a personalized care plan designed just for you.
          </p>
        </section>
      </section>
      <section className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold">My work speaks for itself</h2>
        <section className="flex flex-col items-center my-14 md:flex-row gap-5">
          <AwardCard award="Top Doctor Award" association="Beverly Hills Medical Association" date="2022" image="/images/award.png" />
          <AwardCard award="Excellence in Patient Care Award" association="American Medical Association (AMA)" date="2024" image="/images/trophy.png" />
          <AwardCard award="Outstanding Primary Care Physician Award" association="St. Raphael Hospital" date="2023" image="/images/award-symbol.png" />
        </section>
      </section>
      <section className="flex flex-col md:items-center gap-8 px-7 py-6 my-12 md:flex-row">
        <section className="flex items-center justify-center ">
          <Image alt="hana_nakamura" src="/images/hana_third_person_desc.png" height={700} width={500} />
        </section>
        <section className="w-full mt-5 md:mt-2 md:w-1/2 px-5">
          <p className="px-4">
            Dr. Hana Nakamura has been a trusted healthcare provider for over 12
            years. Known for her compassionate approach, Dr. Nakamura
            specializes in vaccinations, immunizations, and chronic disease
            management. Her dedication to improving patient outcomes has made
            her a leader in disease management.
          </p>
        </section>
      </section>
      <section className="flex flex-col items-center gap-8 my-8">
        <h2>Take the first step toward a healthier you</h2>
        <Button url="">Contact me now</Button>
      </section>
      <section>
        
      </section>
    </section>
  );
}

export default AboutMePage;
