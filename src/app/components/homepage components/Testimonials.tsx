import SliderComponent from "../reusable components/SliderComponent";

function Testimonials() {
  return (
    <div className="overflow-x-hidden h-full md:h-screen flex flex-col justify-center px-10 py-20">
      <div className="text-center">
        <small className="text-xs bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Testimonials
        </small>
        <h2 className="text-2xl font-bold">My patients say</h2>
      </div>
      <SliderComponent>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </SliderComponent>
    </div>
  );
}

export default Testimonials;

const TestimonialCard: React.FC = () => {
  return (
    <div className="py-11 px-5 rounded-lg w-1/2 mr-5">
      <h4 className="font-bold mb-5">Sam Fischer</h4>
      <p className="w-4/5 text-sm mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
        exercitationem commodi labore impedit vel. Vero.
      </p>
      <p className="text-sm">⭐⭐⭐⭐⭐</p>
    </div>
  );
};
