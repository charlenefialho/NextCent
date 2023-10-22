import Image from 'next/image'

import logoNextCent from '@/app/assets/svg/LogoWhite.svg'
import arrowRight from '@/app/assets/svg/arrowRight.svg'
import instagramIcon from '@/app/assets/svg/iconInstagram.svg'
import twitterIcon from '@/app/assets/svg/iconTwitter.svg'
import webIcon from '@/app/assets/svg/iconWeb.svg'
import youtubeIcon from '@/app/assets/svg/youtubeIcon.svg'
import { Button } from '@/app/components/Button'

import Link from 'next/link'

interface ILInkFooter {
  url: string
  children: React.ReactNode
}

export function Footer() {
  return (
    <section className="w-full bg-neutral-black max-w-[2560px] mt-10  2xl:items-center 2xl:flex 2xl:flex-col">
      <section className=" bg-neutral-silver flex flex-col py-8 w-full gap-y-4 md:gap-y-8 items-center">
        <h1 className="w-11/12 sm:w-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:w-10/12 text-center">
          Let Nextcent do the work so you dont have to!
        </h1>
        <div>
          <Button className="icon-container px-6 py-3 md:px-8 md:py-4  font-medium flex items-center justify-center gap-2">
            Get Demo
            <div className="flex items-center justify-center">
              <Image src={arrowRight} alt="" />
            </div>
          </Button>
        </div>
      </section>
      <section className="w-full bg-neutral-black grid grid-cols-1 sm:grid-cols-2  gap-10 md:gap-0 md:grid-cols-4   px-4 py-8 md:px-10 lg:px-20 xl:px-36">
        <div className="flex flex-col gap-10  md:w-1/2  xl:mr-20">
          <Image src={logoNextCent} alt="" width={200} height={50} />

          <section className="flex flex-col gap-2">
            <p className="text-neutral-silver">
              Copyright © 2023 Nexcent ltd.
            </p>
            <p className="text-neutral-silver">All rights reserved</p>

            <div className="flex gap-4 mt-4 md:mt-0  md:justify-start">
              <Image src={instagramIcon} alt="" width={30} height={30} />
              <Image src={webIcon} alt="" width={30} height={30} />
              <Image src={twitterIcon} alt="" width={30} height={30} />
              <Image src={youtubeIcon} alt="" width={30} height={30} />
            </div>
          </section>
        </div>

        <ColumnFooter title="Company">
          <LinkFooter url="">About us</LinkFooter>
          <LinkFooter url="">Blog</LinkFooter>
          <LinkFooter url="">Contact us</LinkFooter>
          <LinkFooter url="">Pricing</LinkFooter>
          <LinkFooter url="">Testimonials</LinkFooter>
        </ColumnFooter>

        <ColumnFooter title="Support">
          <LinkFooter url="">Help center</LinkFooter>
          <LinkFooter url="">Terms of service</LinkFooter>
          <LinkFooter url="">Legal</LinkFooter>
          <LinkFooter url="">Privacy policy</LinkFooter>
          <LinkFooter url="">Status</LinkFooter>
        </ColumnFooter>

        <ColumnFooter title="Stay up to date">
          <input
            type="email"
            name="email"
            id="email"
            className="w-full max-w-xs px-4 py-2 bg-neutral-silver rounded-lg opacity-20 placeholder:text-gray-700"
            placeholder="Your email address"
          />
        </ColumnFooter>
      </section>
    </section>
  )
}

interface IColumnFooter {
  title: string
  children: React.ReactNode
}

function ColumnFooter({ title, children }: IColumnFooter) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-neutral-white mb-6 font-semibold">{title}</h4>
      {children}
    </div>
  )
}

function LinkFooter({ url, children }: ILInkFooter) {
  return (
    <Link href={url} className="text-neutral-silver hover:font-bold">
      {children}
    </Link>
  )
}
