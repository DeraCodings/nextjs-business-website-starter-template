import Button from "../reusable components/Button";

function QuoteSection() {
  return (
    <section className="bg-blue-600 text-white h-[20rem] flex flex-col gap-8 justify-center items-center">
      <h2 className="text-wrap text-3xl font-bold w-4/5 md:w-1/2">
        Your health is your greatest wealth—nurture it, cherish it, and never
        take it for granted
      </h2>
      <Button url="" variant="secondary">
        Book me now
      </Button>
    </section>
  );
}

export default QuoteSection;
