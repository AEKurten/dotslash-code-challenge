import BannerStrip from "@/components/BannerStrip";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import { advertBanner, summerSaleBanner } from "@/public/export";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <BannerStrip />
      <div className="grid grid-cols-8 px-11 gap-10">
        <div className="col-span-2">
          <Search />
          <Image src={advertBanner} height={616} width={307} className="my-8" />
        </div>
        <div className="col-span-6 bg-[url('/images/TopBanner.png')] bg-no-repeat flex h-24 px-24 justify-between items-center">
          <div className=" flex flex-col">
            <h3 className="uppercase text-rewayWhite font-suez text-[30px] font-semibold">
              Summer sale!
            </h3>
            <p className="uppercase text-rewayWhite font-suez text-[20px] font-semibold">
              Up to 50% off!
            </p>
          </div>
          <button className="text-rewayWhite border-2 h-fit px-4 py-2 rounded-[3px] font-suez font-semibold">
            Shop now
          </button>
        </div>
      </div>
    </main>
  );
}
