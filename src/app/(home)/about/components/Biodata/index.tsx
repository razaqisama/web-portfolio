import Link from "next/link";

function Biodata() {
  return (
    <div className="py-4 flex flex-col border-t border-white-primary">
      <div className="flex flex-row gap-4">
        <p className="min-w-[100px]">Name</p>
        <p>:</p>
        <p>Josep Razaqi</p>
      </div>
      <div className="flex flex-row gap-4">
        <p className="min-w-[100px]">Age</p>
        <p>:</p>
        <p>24</p>
      </div>
      <div className="flex flex-row gap-4">
        <p className="min-w-[100px]">Professions</p>
        <p>:</p>
        <div className="flex flex-col">
          <p>Software Engineers</p>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <p className="min-w-[100px]">Passions</p>
        <p>:</p>
        <div className="flex flex-col">
          <p>Art & Theater</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-8">
        <p className="min-w-[100px]">Vision & Purpose</p>
        <p className="italic">
          To have the freedom to learn everything, everywhere, and everytime.
          And to be a person who contributes positively to life.
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <Link
          className="px-4 rounded-full border border-white-primary text-white-primary w-full py-1 flex flex-row items-center justify-center group transition duration-300 ease-in-out"
          href="/resume"
        >
          <div className="w-0 h-0 group-hover:w-3 group-hover:h-3 group-hover:mr-2 rounded-full bg-white-primary group-hover:bg-brand-primary transition-[background,width,height,margin-right] duration-300 ease-in-out" />
          Resume
        </Link>
        <Link
          className="px-4 rounded-full border border-white-primary text-white-primary w-full py-1 flex flex-row items-center justify-center group transition duration-300 ease-in-out"
          href="/contact"
        >
          <div className="w-0 h-0 group-hover:w-3 group-hover:h-3 group-hover:mr-2 rounded-full bg-white-primary group-hover:bg-brand-primary transition-[background,width,height,margin-right] duration-300 ease-in-out" />
          Connect
        </Link>
      </div>
    </div>
  );
}

export default Biodata;
