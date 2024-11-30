import Image from "next/image"

type AwardCardProps = {
    award: string;
    image: string;
    association: string;
    date: string;
}

function AwardCard({award, image, association, date}: AwardCardProps) {
  return (
    <div className="flex flex-col gap-5 items-center w-4/5 bg-blue-600 py-8 px-3 text-white">
        <Image src={image} alt="award" height={70} width={70} />
        <h3 className="text-center">{award}</h3>
        <p className="text-center">{`${association} ${date}`}</p>
    </div>
  )
}

export default AwardCard