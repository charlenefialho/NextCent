import Image from 'next/image'

import { Button } from '@/app/components/Button'

export interface IUnlock {
  imageUrl: string
  title: string
  description: string
}

export function Unlock({ imageUrl, title, description }: IUnlock) {
  return (
    <section className="w-full max-w-[2560px] py-8 px-4 md:px-10 lg:px-20 xl:px-36 mt-10 bg-neutral-silver 2xl:justify-center 2xl:flex">
      <div className="flex flex-col lg:flex-row items-center justify-center 2xl:w-4/6">
        <Image
          className="w-full lg:w-auto h-auto max-w-[300px] mx-auto lg:mx-0 mb-6 lg:mb-0"
          src={imageUrl}
          width={391}
          height={407}
          alt="Ilustração"
        />
        <div className="flex flex-col justify-center">
          <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl text-neutral-d-grey mb-4">
            {title}
          </h2>
          <p className="text-neutral-grey text-sm md:text-base lg:text-lg mb-6">
            {description}
          </p>
          <div className="mt-4 flex justify-center min-[1024px]:justify-start">
            <Button className="px-6 py-4">Register</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
