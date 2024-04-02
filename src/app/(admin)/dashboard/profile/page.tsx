import { Carousel } from "@/components";
import ProfileForm from "./components/ProfileForm";
import GalleryForm from "./components/GalleryForm";

function ProfilePage() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div className="border-b py-2">
          <h1 className="text-4xl">Identitas</h1>
        </div>
        <ProfileForm />
      </div>
      <div className="flex flex-col gap-2">
        <div className="border-b py-2">
          <h1 className="text-4xl">Gallery</h1>
        </div>
        <Carousel
          autoSlide={3000}
          className="w-full h-full min-h-[180px] 2xl:min-h-[200px] overflow-hidden border"
        >
          <div className="w-full h-full ">HAHA</div>
          <div className="w-full h-full ">HAHA</div>
          <div className="w-full h-full ">HAHA</div>
        </Carousel>
        <GalleryForm />
      </div>
    </div>
  );
}

export default ProfilePage;
