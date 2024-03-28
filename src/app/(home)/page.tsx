import FadeInWrapper from "@/components/Animation/FadeIn";
import Link from "next/link";

function SubtitleText() {
  return (
    <p className="text-xs md:text-lg">
      Greetings! I am a versatile{" "}
      <span className="font-bold text-brand-primary">Software Engineer</span>{" "}
      and{" "}
      <span className="font-bold text-brand-primary">
        Theater Practitioner (Actor, Director, Playwright)
      </span>{" "}
      who flourishes at the crossroads of{" "}
      <span className="font-bold text-brand-primary">Technology</span> and{" "}
      <span className="font-bold text-brand-primary">Art</span>. With a
      steadfast belief in the synergy between these domains, I specialize in
      crafting code that is not only{" "}
      <span className="font-bold text-brand-primary">Functional</span> but also{" "}
      <span className="font-bold text-brand-primary">
        Aesthetically Pleasing
      </span>
      . I&apos;ve blended technology with the stage, resulting in Interactive
      and Immersive performances.{" "}
    </p>
  );
}

export default function HomePage() {
  const menus = [
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Works",
      path: "/professional-experiences",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "Achievements",
      path: "/achievements",
    },
    {
      label: "MyArts",
      path: "/arts",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Hire Me?",
      path: "/contact",
    },
  ];

  return (
    <div className="h-full w-full px-8 py-36 md:px-16 md:py-24 xl:px-32 xl:py-48 flex flex-col justify-between">
      <div className="text-center flex flex-col gap-4">
        <FadeInWrapper>
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold">
            Port<span className="text-brand-primary">folio.</span>
          </h1>
        </FadeInWrapper>
        <FadeInWrapper className="flex flex-col gap-4" delay={0.5}>
          <SubtitleText />
          <span className="font-bold text-brand-primary underline">
            <Link href="/">Check this out</Link>
          </span>
        </FadeInWrapper>
      </div>
      <div className="hidden md:flex flex-row justify-center gap-4">
        {menus.map((item, index) => {
          return (
            <Link
              href={item.path}
              key={item.path}
              className="hover:text-brand-primary transition duration-300 ease-in-out"
            >
              <FadeInWrapper delay={0.2 * index + 1}>
                {item.label}
              </FadeInWrapper>
            </Link>
          );
        })}
      </div>
      <div className="flex md:hidden flex-row justify-center gap-4">
        <Link
          href="/"
          className="hover:text-brand-primary transition duration-300 ease-in-out"
        >
          <FadeInWrapper delay={1}>Menu</FadeInWrapper>
        </Link>
      </div>
    </div>
  );
}
