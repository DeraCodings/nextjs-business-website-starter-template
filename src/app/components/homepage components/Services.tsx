import Image from "next/image";

function Services() {
  return (
    <div>
      <div className="text-center my-5">
        <small className="text-xs bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          My Services
        </small>
        <h2 className="text-2xl font-bold">What can I help you with?</h2>
      </div>
      <div className="flex flex-wrap flex-col gap-5 justify-center items-center md:flex-row">
        <div className="flex flex-col gap-5 py-11 px-8 shadow-md w-4/5 md:w-1/4">
          <Image
            alt="chronic-illness"
            src="/images/chronic-illness.png"
            width={50}
            height={50}
          />
          <h3 className="text-base font-bold">Chronic Disease Management</h3>
          <p>
            Expert care for managing diabetes, hypertension, and other
            conditions.
          </p>
        </div>
        <div className="flex flex-col gap-5 py-11 px-8 shadow-md w-4/5 md:w-1/4">
          <Image
            alt="vaccine"
            src="/images/vaccine.png"
            width={50}
            height={50}
          />
          <h3 className="text-base font-bold">
            Vaccinations and Immunizations
          </h3>
          <p>Stay protected with seasonal and travel vaccines for all ages.</p>
        </div>
        <div className="flex flex-col gap-5 py-11 px-8 shadow-md w-4/5 md:w-1/4">
          <Image alt="sick" src="/images/sick.png" width={50} height={50} />
          <h3 className="text-base font-bold">Acute Illness Treatment</h3>
          <p>Prompt diagnosis and care for colds, flu, and minor infections</p>
        </div>
        <div className="flex flex-col gap-5 py-11 px-8 shadow-md w-4/5 md:w-1/4">
          <Image
            alt="bondage"
            src="/images/bandage.png"
            width={50}
            height={50}
          />
          <h3 className="text-base font-bold">
            Minor Procedures and Wound Care
          </h3>
          <p>On-site care for cuts, burns, or small medical procedures.</p>
        </div>
        <div className="flex flex-col gap-5 py-11 px-8 shadow-md w-4/5 md:w-1/4">
          <Image
            alt="pediatrics"
            src="/images/pediatrics.png"
            width={50}
            height={50}
          />
          <h3 className="text-base font-bold"> Pediatric Care</h3>
          <p>
            Comprehensive care for children, including growth tracking and
            vaccinations.
          </p>
        </div>
        <div className="flex flex-col gap-5 py-11 px-8 shadow-md w-4/5 md:w-1/4">
          <Image alt="ankle" src="/images/ankle.png" width={50} height={50} />
          <h3 className="text-base font-bold">Sports Injury Care</h3>
          <p>
            Diagnosis and recovery support for minor sports injuries and
            strains.
          </p>
        </div>
        <div className="flex flex-col gap-5 py-11 px-8 shadow-md w-4/5 md:w-1/4">
          <Image alt="online" src="/images/online.png" width={50} height={50} />
          <h3 className="text-base font-bold">Telemedicine Services</h3>
          <p>
            Virtual consultations for non-emergency health concerns from your
            home.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
