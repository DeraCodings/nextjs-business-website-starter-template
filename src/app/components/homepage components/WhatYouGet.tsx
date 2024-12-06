import Image from "next/image";

function WhatYouGet() {
  return (
    <section className="flex flex-col md:flex-row gap-8 px-16 py-8 bg-blue-600 text-white">
      <section className="flex flex-col gap-5">
        <Image alt="viber" src="/images/viber.png" height={50} width={50} />
        <h3 className="text-xl font-semibold">24/7 Emergency</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
          excepturi voluptatem neque architecto illum. Tempore?
        </p>
      </section>
      <section className="flex flex-col gap-5">
        <Image
          alt="ambulance"
          src="/images/ambulance.png"
          height={50}
          width={50}
        />
        <h3 className="text-xl font-semibold">Emergency Case</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
          excepturi voluptatem neque architecto illum. Tempore?
        </p>
      </section>
      <section className="flex flex-col gap-5">
        <Image alt="doctor" src="/images/doctor.png" height={50} width={50} />
        <h3 className="text-xl font-semibold">Qualified Doctor</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          esse temporibus nostrum, recusandae accusamus vitae?
        </p>
      </section>
    </section>
  );
}

export default WhatYouGet;
