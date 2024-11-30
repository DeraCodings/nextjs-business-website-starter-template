import Image from "next/image";
import Button from "./Button";

type ServicesCardProps = {
  alt: string;
  src: string;
  name: string;
  description: string;
  button: boolean;
};

function ServicesCard({
  alt,
  src,
  name,
  description,
  button,
}: ServicesCardProps) {
  return (
    <div className="flex flex-col gap-5 py-11 px-8 shadow-md w-4/5 md:w-1/4">
      <Image alt={alt} src={src} width={50} height={50} />
      <h3 className="text-base font-bold">{name}</h3>
      <p>{description}</p>
      {button ? <Button url="/book-me" className="w-4/5">Book free consultation now</Button> : ""}
    </div>
  );
}

export default ServicesCard;
