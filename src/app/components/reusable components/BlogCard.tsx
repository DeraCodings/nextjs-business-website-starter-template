import Image from "next/image";
import Link from "next/link";

type BlogCardProp = {
  alt: string;
  src: string;
  title: string;
  type: string;
  date: string;
  summary: string;
};

function BlogCard({ alt, src, title, type, date, summary }: BlogCardProp) {
  return (
    <section className="w-full md:w-1/4 border-b border-black">
      <div className="">
        <Image
          alt={alt}
          src={src}
          height={500}
          width={500}
          className="w-full object-cover h-1/2 rounded-md"
        />
        <div className="py-4 pl-3 flex flex-col justify-center gap-5">
          <div className="flex gap-5 justify-start">
            <small className="inline-block text-xs bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              {type}
            </small>
            <small className="inline-block text-xs bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              {date}
            </small>
          </div>
          <Link href="/blog/#">
            <h2 className="text-2xl font-bold hover:opacity-85 transition-opacity hover:text-blue-600">
              {title}
            </h2>
          </Link>
          <p className="text-wrap">{summary}</p>
        </div>
      </div>
    </section>
  );
}

export default BlogCard;
