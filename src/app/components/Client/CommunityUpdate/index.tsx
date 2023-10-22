import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import img from '@/app/assets/image/image1.png'
import img2 from '@/app/assets/image/image2.png'
import img3 from '@/app/assets/image/image3.png'

interface ICardProps {
  imageUrl: StaticImageData
  title: string
}

const Card = ({ imageUrl, title }: ICardProps) => {
  return (
    <section className="relative ">
      <div className="relative h-[300px]">
        <Image
          src={imageUrl}
          className="w-full h-4/5 object-contain "
          alt="icone grupo de pessoas"
        />
      </div>
      <div className="absolute top-4/5 bottom-0 left-5  right-5 p-4 bg-neutral-silver rounded-lg shadow-shadow-8">
        <h4 className="text-center h-[84px] text-neutral-grey text-base md:text-lg lg:text-lg">
          {title}
        </h4>
        <h4 className="w-full flex justify-center sm:text-start text-base md:text-lg lg:text-xl text-primary">
          <Link href="#">Readmore</Link>
        </h4>
      </div>
    </section>
  )
}
export function CommunityUpdate() {
  return (
    <section className="w-full max-w-[2560px] flex flex-col items-center pt-10 2xl:justify-center 2xl:flex">
      <div className="flex flex-col text-center w-4/5">
        <h2 className="text-3xl md:text-4xl text-neutral-d-grey font-semibold mb-2">
          Caring is the new marketing
        </h2>
        <p className="font-base text-neutral-grey text-justify px-4 md:text-center md:px-20 lg:px-44 xl:px-64">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See whos joining the community, read about
          how our community is increasing their membership income and lots more.
        </p>
      </div>

      <section className="w-full max-w-[2560px] gap-6 px-3  flex items-center justify-evenly mt-4 flex-wrap">
        <Card
          imageUrl={img}
          title="Creating Streamlined Safeguarding Processes with OneRen"
        />
        <Card
          imageUrl={img2}
          title="What are your safeguarding responsibilities and how can you manage them?"
        />
        <Card
          imageUrl={img3}
          title="Revamping the Membership Model with Triathlon Australia"
        />
      </section>
    </section>
  )
}
