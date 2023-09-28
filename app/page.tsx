import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between relative overflow-x-hidden">
      <Image
        src="/bg1.png"
        alt="logo"
        width={1440}
        height={472}
        className="left-0 top-[-20px] absolute -z-10"
      />
      <Image
        src="/bg2.png"
        alt="logo"
        width={1101}
        height={1880}
        className="left-[-110px] top-[380px] absolute -z-10"
      />
      <Image
        src="/bg3.png"
        alt="logo"
        width={1101}
        height={1880}
        className="right-0 top-[1500px] absolute -z-10"
      />
      <Image
        src="/bg4.png"
        alt="logo"
        width={1101}
        height={1880}
        className="left-[-110px] top-[3280px] absolute -z-10"
      />
      <Image
        src="/bg5.png"
        alt="logo"
        width={1101}
        height={1880}
        className="left-0 bottom-0 absolute -z-10 w-full"
      />
      <div className="flex justify-between px-[20px] md:px-[53px] py-[20px] md:py-[50px]">
        <div className="flex">
          <div className="mr-4 flex items-center">
            <Image
              src="/logo.svg"
              alt="logo"
              width={34}
              height={34}
              className="w-[24px] md:w-[34px] h-[24px] md:h-[34px] "
            />
            <span className="text-white text-opacity-70 text-sm md:text-[19px] font-medium font-rubic leading-normal tracking-wide pl-3">
              CLICK
            </span>
            <span className="text-white text-sm md:text-[19px] font-medium font-rubic leading-normal tracking-wide">
              VOTE
            </span>
          </div>
          <div className="hidden md:inline-flex w-[137.47px] h-[38px] px-[15.43px] py-[7px] bg-white bg-opacity-20 rounded-[54.12px] backdrop-blur-[23.85px] justify-center items-center gap-[8.42px]">
            <div className="justify-center items-center gap-[8.42px] flex">
              <Image src="/love.svg" alt="logo" width={13} height={12} />

              <div className="text-center text-white text-[15px] font-medium font-inter leading-normal">
                Like
              </div>
              <div className="w-px h-4 bg-white bg-opacity-30" />
            </div>
            <div className="text-center text-white text-[15px] font-medium font-inter leading-normal">
              400
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[477.40px] h-[38px] justify-start items-center gap-10 hidden lg:inline-flex">
            <div className="text-center text-white text-[15px] font-medium font-inter leading-tight">
              Blog
            </div>
            <div className="text-center text-white text-[15px] font-medium font-inter leading-tight">
              Pricing{" "}
            </div>
            <div className="text-center text-white text-[15px] font-medium font-inter leading-tight">
              Documentation
            </div>
            <div className="px-3 py-[7px] bg-white bg-opacity-10 rounded-[7px] backdrop-blur-[34px] justify-center items-center gap-2.5 flex">
              <div className="w-[19.40px] h-[19px] relative">
                <Image
                  src="/github-mark.svg"
                  alt="logo"
                  width={19}
                  height={19}
                />
              </div>
              <div className="text-center text-white text-[15px] font-medium font-inter leading-normal">
                Star us
              </div>
              <div className="w-px h-4 bg-white bg-opacity-30" />
              <div className="text-center text-white text-[15px] font-medium font-inter leading-normal">
                21.9K
              </div>
            </div>
          </div>
          <div className="block lg:hidden">
            <Image src="/menu.png" width={24} height={16} alt="menu" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center relative w-full items-center">
        <Image
          src="/sig.png"
          alt="logo"
          width={335}
          height={335}
          className="mx-auto w-[140px] md:w-[300px] pt-7 pb-3"
        />
        <div className="text-center px-4 pb-2 max-w-[900px] text-[32px] md:text-7xl font-semibold leading-[39.04px] md:leading-[86.20px] text-transparent bg-clip-text bg-gradient-to-t from-white to-[#AF47FF]">
          Like, Upvote And Review Any Context
        </div>
        <div className="text-center text-white text-[17px] md:text-[19px] font-normal font-inter leading-normal md:leading-[30.40px] py-4 px-4">
          Seamlessly Integrate Like, Upvote, and Review Components into Your App
        </div>
        <div className="mx-auto md:mt-12 mb-24">
          <button className="text-center text-white text-base md:text-lg font-medium font-inter leading-[28.80px] px-12 py-[14px] md:py-4 bg-gradient-to-bl from-[#AF46FF] to-purple-600 rounded-[7px] backdrop-blur-[34px] justify-center items-center gap-2.5 inline-flex">
            Get Started
          </button>
        </div>
        <div className="w-[279.17px] h-[282.09px] relative mx-auto">
          <img
            className="w-[206.83px] h-[209px] md:w-[279.17px] md:h-[282.09px] left-0 top-0 absolute"
            src="/union.png"
          />
          <img
            className="w-[102.38px] h-[93.78px] md:w-[138.19px] md:h-[126.58px] left-[70.83px] top-[99.37px] absolute"
            src="/pink-heart.png"
          />
        </div>
        <div className="text-center px-6 py-6 text-[32px] md:text-[44px] font-semibold leading-[39.04px] md:leading-[57.20px] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#AF47FF]">
          Easily Embed Your Components Anywhere
        </div>
        <div className="flex justify-center md:pt-8 px-6 w-full">
          <button className="w-1/3 md:w-[134px] h-[60px] px-[10px] md:px-[22px] py-5 bg-gradient-to-b from-[#af46ff38] to-black rounded-[7px] border-2 border-[#AF46FF] backdrop-blur-[34px] justify-center items-center gap-3 inline-flex">
            <img className="w-4 h-4" src="/pink-heart.svg" />
            <div className="text-center text-white text-sm md:text-base font-medium  leading-relaxed">
              Like
            </div>
          </button>
          <button className="w-1/3 md:w-[134px] h-[60px] px-[10px] md:px-[22px] py-5 mx-3 bg-gradient-to-t from-[#ffffff00] to-[#ffffff25] rounded-[7px] border border-white border-opacity-50 backdrop-blur-[34px] justify-center items-center gap-3 inline-flex">
            <div className="w-4 h-4 relative">
              <img
                className="w-[16px] h-[16px] left-[1.73px] top-[0.56px] absolute"
                src="/up.svg"
              />
            </div>
            <div className="text-center text-white text-sm md:text-base font-medium leading-relaxed">
              Upvote
            </div>
          </button>
          <button className="w-1/3 md:w-[134px] h-[60px] px-[10px] md:px-[22px] py-5 bg-gradient-to-t from-[#ffffff00] to-[#ffffff25] rounded-[7px] border border-white border-opacity-50 backdrop-blur-[34px] justify-center items-center gap-3 inline-flex">
            <div className="w-4 h-4 relative">
              <img
                className="w-[16px] h-[16px] left-[1.73px] top-[0.56px] absolute"
                src="/star.svg"
              />
            </div>
            <div className="text-center text-white text-sm md:text-base font-medium leading-relaxed">
              Review
            </div>
          </button>
        </div>
        <div className="mx-auto my-14 mx-6">
          <Image src="/code.png" width={1000} height={597} alt="code" />
        </div>
        <div className="text-center md:mt-28 mb-7 text-[32px] md:text-[44px] font-semibold  leading-[57.20px] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#AF47FF]">
          Features
        </div>
        <div className="flex mx-auto flex-wrap justify-center">
          <div className="w-[350px] h-[390px] relative bg-[#ffffff09] rounded-2xl border border-[#1f1f1f] my-3 mx-2">
            <div className="w-[347.78px] h-[177.78px] left-[1.11px] top-[12.22px] absolute justify-center items-center inline-flex">
              <img src="/parallax.png" />
            </div>
            <div className="w-[280px] left-[33.33px] top-[202.22px] absolute text-white text-[21.11px] font-semibold leading-7">
              Monitor and test what your members like
            </div>
            <div className="w-[257.78px] left-[33.33px] top-[267.78px] absolute text-neutral-400 text-base font-normal leading-snug">
              Look at the time-series of your likes. Understand where to put
              your efforts.
            </div>
            <div className="w-[315.56px] h-[167.78px] left-[16.67px] top-[28.89px] absolute">
              <img
                className="w-[315.56px] h-[167.78px] left-0 top-0 absolute"
                src="/line.png"
              />
              <div className="w-[581.67px] h-[315.90px] left-0 top-[-61.11px] absolute"></div>
            </div>
            <div className="w-5 h-5 left-[195.55px] top-[83.33px] absolute bg-purple-500 rounded-full border-4 border-purple-500 blur-[24.44px]" />
            <div className="w-[11.11px] h-[11.11px] left-[200px] top-[87.78px] absolute bg-white rounded-full border-4 border-purple-500" />
          </div>
          <div className="w-[350px] h-[390px] relative bg-[#ffffff09] rounded-2xl border border-[#1f1f1f] my-3 mx-2">
            <div className="w-[280px] left-[33.33px] top-[202.22px] absolute text-white text-[21.11px] font-semibold leading-7">
              Handle unlimited amount of likes
            </div>
            <div className="w-[257.78px] left-[33.33px] top-[267.78px] absolute text-neutral-400 text-base font-normal leading-snug">
              Clickvote can handle and scale your system to match your traffic
            </div>
            <div className="w-[315.56px] h-[167.78px] left-[16.67px] top-[28.89px] absolute">
              <img
                className="w-[315.56px] h-[167.78px] left-0 top-0 absolute"
                src="/feature2.png"
              />
            </div>
          </div>
          <div className="w-[350px] h-[390px] relative bg-[#ffffff09] rounded-2xl border border-[#1f1f1f] my-3 mx-2">
            <div className="w-[347.78px] h-[177.78px] left-[1.11px] top-[12.22px] absolute justify-center items-center inline-flex">
              <img src="/parallax.png" />
            </div>
            <div className="w-[280px] left-[33.33px] top-[202.22px] absolute text-white text-[21.11px] font-semibold leading-7">
              Integrate our system to yours
            </div>
            <div className="w-[257.78px] left-[33.33px] top-[267.78px] absolute text-neutral-400 text-base font-normal leading-snug">
              Once we receive your likes, we send the Information to your System
              as you want it: API calls or listening to Kafka topics.
            </div>
            <div className="w-[315.56px] h-[167.78px] left-[16.67px] top-[28.89px] absolute">
              <img
                className="w-[315.56px] h-[167.78px] left-0 top-0 absolute"
                src="/feature3.png"
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-16 md:mt-36 mb-8 px-5 text-[32px] md:text-[44px] font-semibold  leading-[39.04px] md:leading-[57.20px] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#AF47FF]">
          Built by the community
        </div>
        <div className="mx-auto max-w-[872px] h-24 text-center text-neutral-400 text-[17px] md:text-[19px] leading-[25px] md:leading-[32px] font-normal px-3">
          Open-source is in the heart of Novu. We keep all the source code and
          work publicly available. Join our community driven project with over
          3,000+ developers from around the world who contribute code and help
          building the modern notification infrastructure.
        </div>
        <img
          src="/community.png"
          className="w-[999px] h-[420px] md:h-[656px] mx-auto my-8 object-contain"
          alt=""
        />
        <div className="text-center pb-16 md:pt-16 text-[32px] md:text-[44px] font-semibold  leading-[39.04px] md:leading-[57.20px] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#AF47FF]">
          Embed Your Components Now
        </div>
        <div className="flex mx-5 md:mx-auto flex-wrap px-5 justify-center">
          <div className="w-[350px] md:w-[483px] mx-4 my-3 h-[301px] px-[68px] py-[71px] bg-[#ffffff09] rounded-xl flex-col justify-start items-center gap-[34px] inline-flex">
            <div className="flex-col justify-start items-center gap-[7px] flex">
              <div className="text-center text-white text-2xl font-semibold leading-[31.20px]">
                Self-Hosted
              </div>
              <div className="text-center text-neutral-400 text-[19px] font-normal leading-relaxed">
                Run locally with docker-compose
              </div>
            </div>
            <div className="w-[196px] px-[22px] py-4 bg-gradient-to-t from-[#ffffff00] to-[#ffffff25] rounded-[7px] border border-white border-opacity-40 backdrop-blur-[34px] justify-center items-center gap-3 inline-flex">
              <div className="text-center text-white text-lg font-medium leading-[28.80px]">
                Read Docs
              </div>
            </div>
          </div>
          <div className="w-[350px] md:w-[483px] mx-4 my-3 h-[301px] px-[68px] py-[71px] bg-gradient-to-b from-[#AF46FF] to-[#570DA7] rounded-xl flex-col justify-start items-center gap-[34px] inline-flex">
            <div className="flex-col justify-start items-center gap-[7px] flex">
              <div className="w-[252px] text-center text-white text-2xl font-semibold leading-[31.20px]">
                Cloud
              </div>
              <div className="w-[299px] text-center text-white text-[19px] font-normal leading-relaxed">
                Use our free managed service
              </div>
            </div>
            <div className="px-8 md:px-12 py-4 bg-gradient-to-bl from-purple-500 to-purple-600 rounded-[7px] border border-white backdrop-blur-[34px] justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-lg font-medium leading-[28.80px]">
                Get Started
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-28 mb-8">
          <img className="w-[200px] md:w-[279.17px]" src="/subscribe.png" />
        </div>
        <div className="text-center px-9 text-[32px] md:text-[44px] font-semibold  leading-[39.04px] md:leading-[57.20px] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#AF47FF]">
          Subscribe to our blog updates
        </div>
        <div className="mx-auto max-w-[872px] px-6 py-8 text-center text-neutral-400 text-[17px] md:text-[19px] font-normal leading-loose md:mb-16">
          Clickvote’s latest articles, right in your inbox. Keep in touch with
          our news and updates.
        </div>
        <div className="max-w-[522px] mx-auto flex flex-col md:flex-row">
          <input
            className="text-white text-opacity-30 mb-4 md:mb-0 text-base font-medium leading-relaxed w-[330px] px-[22px] py-4 bg-white bg-opacity-5 rounded-[7px] border border-purple-500 backdrop-blur-[34px] justify-start items-center gap-3 inline-flex"
            placeholder="Your email"
          />

          <button className="px-12 py-4 md:ml-5 bg-white rounded-[7px] border backdrop-blur-[34px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-zinc-950 text-base font-medium leading-relaxed">
              Subscribe
            </div>
          </button>
        </div>
        <div className="max-w-[1000px] flex flex-col md:flex-row w-full px-5">
          <div className="flex flex-col w-full md:w-2/3">
            <div className="mr-4 flex items-center my-10">
              <Image
                src="/logo.svg"
                alt="logo"
                width={34}
                height={34}
                className="w-[24px] md:w-[34px] h-[24px] md:h-[34px] "
              />
              <span className="text-white text-opacity-70 text-sm md:text-[19px] font-medium font-rubic leading-normal tracking-wide pl-3">
                CLICK
              </span>
              <span className="text-white text-sm md:text-[19px] font-medium font-rubic leading-normal tracking-wide">
                VOTE
              </span>
            </div>
            <div className="justify-start items-start gap-12 inline-flex flex-col md:flex-row">
              <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-center text-white text-sm font-medium leading-snug">
                  Blog
                </div>
                <div className="text-center text-white text-sm font-medium leading-snug">
                  Contributors
                </div>
                <div className="text-center text-white text-sm font-medium leading-snug">
                  Pricing
                </div>
                <div className="text-center text-white text-sm font-medium leading-snug">
                  Careers
                </div>
                <div className="text-center text-white text-sm font-medium leading-snug">
                  2022 Events
                </div>
                <div className="text-center text-white text-sm font-medium leading-snug">
                  OSS Friends
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-center text-white text-sm font-medium leading-snug">
                  Documentation
                </div>
                <div className="text-center text-white text-sm font-medium leading-snug">
                  Roadmap
                </div>
                <div className="text-center text-white text-sm font-medium leading-snug">
                  Providers
                </div>
                <div className="text-center text-white text-sm font-medium leading-snug">
                  Handbook
                </div>
                <div className="text-center text-white text-sm font-medium leading-snug">
                  Contact Us
                </div>
                <div className="text-center text-white text-sm font-medium leading-snug">
                  Press Kit
                </div>
                <div className="text-center text-white text-sm font-medium leading-snug">
                  Polishing Season
                </div>
                <div className="text-white text-sm font-medium leading-snug">
                  Notification Directory
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-center text-white text-sm font-medium leading-snug">
                  Terms of Use
                </div>
                <div className="text-center text-white text-sm font-medium leading-snug">
                  Privacy Policy
                </div>
                <div className="text-center text-white text-sm font-medium leading-snug">
                  DPA
                </div>
                <div className="text-center text-white text-sm font-medium leading-snug">
                  Status Page
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/3">
            <div className="w-[165.40px] h-[38px] my-10 px-3 py-[7px] bg-white bg-opacity-10 rounded-[7px] backdrop-blur-[34px] justify-center items-center gap-2.5 inline-flex">
              <Image src="/github-mark.svg" alt="logo" width={19} height={19} />
              <div className="text-center text-white text-[15px] font-medium leading-normal">
                Star us
              </div>
              <div className="w-px h-4 bg-white bg-opacity-30" />
              <div className="text-center text-white text-[15px] font-medium leading-normal">
                21.9K
              </div>
            </div>
            <div className="w-[216px] h-6 opacity-50 justify-start items-center gap-[25px] inline-flex">
              <img
                src="/github-mark.svg"
                className="w-6 h-6 relative"
                alt="mark"
              />
              <img src="/in.svg" className="w-6 h-6 relative" alt="in" />
              <img
                src="/youtube.svg"
                className="w-6 h-6 relative"
                alt="youtube"
              />
              <img
                src="/discord.svg"
                className="w-6 h-6 relative"
                alt="discord"
              />
              <img src="/x.svg" className="w-6 h-6 relative" alt="x" />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between my-16 px-5">
          <div className=" text-center text-white text-opacity-70 text-sm font-medium leading-[18.90px]">
            Ⓒ 2023 Clickvote
          </div>
          <div className="text-center text-white text-opacity-60 text-[15px] font-medium flex">
            <span className="pr-2">Designed by</span>
            <span className="pr-2">SuperFine</span>
          </div>
        </div>
      </div>
    </main>
  );
}
