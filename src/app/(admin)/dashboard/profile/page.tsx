import { Carousel } from "@/components";
import { SessionUserInfo, getSession } from "@/lib/auth/getSession";
import { getUserProfile } from "@/lib/users/getUserProfile";
import ProfileForm from "./components/ProfileForm";
import GalleryForm from "./components/GalleryForm";

async function ProfilePage() {
  let defaultFormState = {
    id: "",
    name: "",
    birthDate: "",
    profession: "",
    passion: "",
    vision: "",
  };

  const session = (await getSession()) as { user: SessionUserInfo };

  if (session?.user) {
    const { user } = session;

    const { data } = await getUserProfile(user.id);

    defaultFormState = {
      id: user.id,
      name: data?.name ?? "",
      birthDate: data?.birthDate ?? "",
      profession: data?.profession ?? "",
      passion: data?.passion ?? "",
      vision: data?.vision ?? "",
    };
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div className="border-b py-2">
          <h1 className="text-4xl">Identitas</h1>
        </div>
        <ProfileForm defaultState={defaultFormState} />
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
