"use client";
import dynamic from "next/dynamic";
import Bannerstrip from "/components/BannerStrip";
import Breadcrumbs from "/components/Breadcrumbs";
import Emaillist from "/components/Emaillist";
import Product from "/components/Product";
import Search from "/components/Search";
import Similarproducts from "/components/Similarproducts";
import { advertBanner } from "@/public/export";
import Image from "next/image";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const MobileSearch = dynamic(() => import("@/components/MobileSearch"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Bannerstrip />
      <main className="flex flex-col items-center">
        <div className="grid grid-cols-10 px-11 gap-12 max-md:px-0 max-md:gap-0">
          <div className="col-span-3 flex flex-col items-center max-md:hidden">
            <Search />
            <Image
              src={advertBanner}
              height={616}
              width={307}
              className="my-8 object-cover w-3/4"
            />
            <Emaillist />
          </div>
          <div className="col-span-6 max-md:col-span-10 max-md:px-8 max-lg:col-span-7">
            <div className=" flex justify-between bg-[url('/images/TopBanner.png')] bg-no-repeat bg-cover items-center px-20 h-[89px] max-md:px-8 max-md:py-4 max-md:h-fit max-lg:px-10">
              <div>
                <h3 className="uppercase text-rewayWhite font-suez text-[30px] font-semibold max-md:text-lg">
                  Summer sale!
                </h3>
                <p className="uppercase text-rewayWhite font-suez text-[20px] font-semibold max-md:text-sm">
                  Up to 50% off!
                </p>
              </div>
              <button className="text-rewayWhite border-2 h-fit px-8 py-2 rounded-[3px] font-suez mr-[30%]  font-semibold max-md:mr-0 max-md:text-sm max-lg:mr-6">
                Shop now
              </button>
            </div>
            <Breadcrumbs />
            <MobileSearch />
            <Product />
            <Similarproducts />
          </div>
        </div>
        {/* insert footer here */}
      </main>
      <Footer />
    </>
  );
}
