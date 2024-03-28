import { Carousel } from "@/components";

function PhotoGallery() {
  return (
    <div className="flex-[1]">
      <Carousel
        autoSlide={3000}
        className="w-full h-full min-h-[180px] 2xl:min-h-[200px] overflow-hidden border"
      >
        <div className="w-full h-full ">HAHA</div>
        <div className="w-full h-full ">HAHA</div>
        <div className="w-full h-full ">HAHA</div>
      </Carousel>
    </div>
  );
}

export default PhotoGallery;
