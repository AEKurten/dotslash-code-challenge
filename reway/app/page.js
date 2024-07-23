import BannerStrip from "@/components/BannerStrip";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main>
      <Navbar />
      <BannerStrip />
      <div className="grid grid-cols-8">
        <div className="col-span-2">
          <Search />
        </div>
        <div className="col-span-6"></div>
      </div>
    </main>
  );
}
