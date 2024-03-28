import { ChevronLeftIcon } from "@/icons";
import Link from "next/link";
import Biodata from "./components/Biodata";
import PhotoGallery from "./components/PhotoGallery";
import TechSkills from "./components/TechSkills";
import RecentActivity from "./components/RecentActivity";

function AboutPage() {
  return (
    <div className="w-full h-full py-4 lg:py-8 xl:py-12">
      <div className="flex flex-col lg:flex-row gap-4 w-full h-full overflow-y-scroll px-4 lg:px-8 xl:px-12">
        <div className="flex-1 flex flex-col gap-4 min-w-[300px]">
          <div className="hidden lg:inline">
            <Link href="/" className="flex flex-row items-center gap-4">
              <ChevronLeftIcon />
              <span className="text-xl">Kembali</span>
            </Link>
          </div>
          <div className="text-6xl xl:text-7xl flex flex-row gap-4 lg:gap-0 lg:flex-col lg:justify-center">
            <h1 className="font-bold text-brand-primary">ABOUT </h1>
            <h1 className="font-light">ME</h1>
          </div>
          <Biodata />
        </div>
        <div className="flex-[4] flex flex-col lg:border-l border-white-primary gap-4 xl:gap-0 xl:flex-row lg:overflow-y-scroll">
          <div className="xl:flex-[4] gap-2 flex flex-col lg:px-2">
            <PhotoGallery />
            <TechSkills />
          </div>
          <div className="relative flex flex-col xl:flex-[3] lg:px-2 xl:px-0">
            <h1 className="sticky top-0 z-10 text-brand-primary bg-black-primary px-4 py-2 border text-2xl font-bold">
              Recent Activity
            </h1>
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
