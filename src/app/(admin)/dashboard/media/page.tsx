import { NextImage } from "@/components";
import { getAllMedia } from "@/lib/media";
import UploadMediaButton from "./components/UploadMediaButton";
import RemoveButton from "./components/RemoveButton";

async function MediaPage() {
  const images = await getAllMedia();

  return (
    <div className="relative flex flex-col gap-4">
      <div className="sticky top-0 z-10 flex flex-row justify-between border-b pb-4 bg-black-primary">
        <h1 className="text-4xl">Media</h1>
        <UploadMediaButton />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.data &&
          images.data.map((item) => {
            return (
              <div className="group relative min-w-64 min-h-64" key={item.id}>
                <NextImage
                  alt="dummy"
                  className="w-full h-full"
                  path={item.url}
                  sizes="256px"
                />
                <RemoveButton id={item.id} url={item.url} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MediaPage;
