import Image from "next/image";
import React from "react";
import SubscribeForm from "../components/reusable components/SubscribeForm";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import BlogCard from "../components/reusable components/BlogCard";
import Link from "next/link";

function BlogPage() {
  return (
    <section className="flex flex-col items-center gap-7 my-4 py-8">
      <h1 className="text-3xl mt-5 font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Blog Room</h1>
      <p className="text-center my-2 px-5">
        Articles and news from around the medical sphere to help make informed
        health decisions.
      </p>
      <section className="flex flex-col md:flex-row rounded-md my-6 w-4/5 bg-blue-600 text-white">
        <div className="relative flex flex-col py-3 gap-4 md:gap-1 px-5">
          <small className="text-sm">Article</small>
          <Link href="/blog/#">
            <h2 className="text-2xl font-bold hover:opacity-85 transition-opacity hover:text-black">
              Why Vitamin D is healthy for your skin
            </h2>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            distinctio in placeat doloribus sit quaerat.
          </p>
          <p className="md:absolute bottom-2">December 1, 2024</p>
        </div>
        <div className="w-full md:w-4/6">
          <Image
            alt="first_aid"
            src="/images/first_aid_cover_image.png"
            height={500}
            width={500}
            className="w-full rounded-b-md md:rounded-r-md"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-5 py-8 items-center">
        <div className="w-4/5 md:border-r border-r-black">
          <h3 className="text-xl my-5 font-bold">
            Subscribe to get daily health articles and news
          </h3>
          <SubscribeForm />
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-xl font-bold">Follow me</h3>
          <p className="w-4/5">
            I share daily updates for your health that you don&apos;t want to
            miss.
          </p>
          <div className="flex gap-3">
            <Link href="#" className="hover:opacity-50"><FaFacebook size={30} color="#1d4ed8" /></Link>
            <Link href="#" className="hover:opacity-50"><FaTwitter size={30} color="#1d4ed8" /></Link>
            <Link href="#" className="hover:opacity-50"><FaLinkedin size={30} color="#1d4ed8" /></Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8 w-full px-8 my-8">
        <BlogCard
          alt="exercise"
          src="/images/exercise_cover_image.png"
          title="The Role of Exercise in Preventative Healthcare"
          type="Article"
          summary="Explore how regular exercise improves physical health, mental well-being, and prevents chronic conditions."
          date="November 13, 2024"
        />
        <BlogCard
          alt="cardio_diagnosis"
          src="/images/cardio_diagnosis_cover_image.png"
          title="Understanding Cardio Health: Diagnosis and Management Tips"
          type="Article"
          summary="Learn key strategies for diagnosing, managing, and improving heart health for a better quality of life."
          date="October 24, 2024"
        />
        <BlogCard
          alt="high_intensity_interval_training"
          src="/images/hiit_cover_image.png"
          title="HIIT Workouts: Boost Your Fitness with High-Intensity Training"
          type="Article"
          summary="Discover how HIIT enhances cardiovascular health, burns fat, and fits into a busy lifestyle."
          date="October 13, 2024"
        />
        <BlogCard
          alt="health"
          src="/images/health_cover_image.png"
          title="10 Daily Habits for a Healthier, Happier Life"
          type="Article"
          summary="Practical tips to maintain physical, mental, and emotional health through small daily changes."
          date="October 01, 2024"
        />
        <BlogCard
          alt="self_medication"
          src="/images/self_medication_cover_image.png"
          title="The Hidden Dangers of Self-Medication and Safer Alternatives"
          type="Article"
          summary="Understand risks of self-medication and learn safer approaches to address common health concerns effectively."
          date="September 23, 2024"
        />
        <BlogCard
          alt="first_aid"
          src="/images/first_aid_cover_image.png"
          title="First Aid Basics: Be Prepared to Save Lives in Emergencies"
          type="Article"
          summary="Essential first aid knowledge to handle accidents, injuries, and emergencies with confidence and skill."
          date="September 13, 2024"
        />
      </section>
    </section>
  );
}

export default BlogPage;
