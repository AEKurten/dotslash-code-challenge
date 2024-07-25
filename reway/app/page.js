import Bannerstrip from "@/components/Bannerstrip";
import Breadcrumbs from "@/components/Breadcrumbs";
import Emaillist from "@/components/Emaillist";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Search from "@/components/Search";
import Similarproducts from "@/components/Similarproducts";
import { advertBanner, summerSaleBanner } from "@/public/export";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Bannerstrip />
      <main className="flex flex-col items-center">
        <div className="grid grid-cols-10 px-11 gap-12 ">
          <div className="col-span-3 flex flex-col items-center">
            <Search />
            <Image
              src={advertBanner}
              height={616}
              width={307}
              className="my-8 object-cover w-3/4"
            />
            <Emaillist />
          </div>
          <div className="col-span-6 ">
            <div className=" flex justify-between bg-[url('/images/TopBanner.png')] bg-no-repeat bg-cover  items-center px-20 h-[89px]">
              <div>
                <h3 className="uppercase text-rewayWhite font-suez text-[30px] font-semibold">
                  Summer sale!
                </h3>
                <p className="uppercase text-rewayWhite font-suez text-[20px] font-semibold">
                  Up to 50% off!
                </p>
              </div>
              <button className="text-rewayWhite border-2 h-fit px-8 py-2 rounded-[3px] font-suez mr-[30%]  font-semibold">
                Shop now
              </button>
            </div>
            <Breadcrumbs />
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
