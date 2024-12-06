
import ServicesCard from "../reusable components/ServicesCard";

function Services() {
  return (
    <section className="">
      <section className="text-center my-5">
        <small className="text-xs bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          My Services
        </small>
        <h2 className="text-2xl font-bold">What can I help you with?</h2>
      </section>
      <section className="flex flex-wrap flex-col gap-5 justify-center items-center md:flex-row">
        <ServicesCard
          alt="chronic-illness"
          src="/images/chronic-illness.png"
          name="Chronic Disease Management"
          description="Expert care for managing diabetes, hypertension, and other conditions."
          button={false}
        />
        <ServicesCard
          alt="vaccine"
          src="/images/vaccine.png"
          name="Vaccinations and Immunizations"
          description="Stay protected with seasonal and travel vaccines for all ages."
          button={false}
        />
        <ServicesCard
          alt="sick"
          src="/images/sick.png"
          name="Acute Illness Treatment"
          description="Prompt diagnosis and care for colds, flu, and minor infections"
          button={false}
        />
        <ServicesCard
          alt="bandage"
          src="/images/bandage.png"
          name="Minor Procedures and Wound Care"
          description="On-site care for cuts, burns, or small medical procedures."
          button={false}
        />
        <ServicesCard
          alt="pediatrics"
          src="/images/pediatrics.png"
          name="Pediatric Care"
          description="Comprehensive care for children, including growth tracking and vaccinations."
          button={false}
        />
        <ServicesCard
          alt="ankle"
          src="/images/ankle.png"
          name="Sports Injury Care"
          description="Diagnosis and recovery support for minor sports injuries and strains."
          button={false}
        />
        <ServicesCard
          alt="online"
          src="/images/online.png"
          name="Telemedicine Services"
          description="Virtual consultations for non-emergency health concerns from your home."
          button={false}
        />
      </section>
    </section>
  );
}

export default Services;
