import { ProfessionTitle } from "@/components";
import FadeInWrapper from "@/components/Animation/FadeIn";
import Link from "next/link";

function SubtitleText() {
  return (
    <p>
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
      <span className="font-bold text-brand-primary underline">
        <Link href="/">Check this out</Link>
      </span>
      .
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
    <main className="p-12 flex justify-center items-center w-dvw h-dvh">
      <div className="relative flex flex-col justify-center items-center w-full h-full border-[1px] border-white-primary">
        <div className="h-full w-full px-32 py-48 flex flex-col justify-between">
          <div className="text-center flex flex-col gap-4">
            <FadeInWrapper>
              <h1 className="text-9xl font-bold">
                Port<span className="text-brand-primary">folio.</span>
              </h1>
            </FadeInWrapper>
            <FadeInWrapper delay={0.5}>
              <SubtitleText />
            </FadeInWrapper>
          </div>
          <div className="flex flex-row justify-center gap-4">
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
        </div>
        <div className="absolute top-0 right-10 text-end transform -translate-y-5">
          <ProfessionTitle />
        </div>
        <div className="absolute bottom-0 left-10 text-end transform translate-y-4 px-4 bg-black-primary">
          <FadeInWrapper>
            <h2 className="text-3xl font-bold text-brand-primary">2024</h2>
          </FadeInWrapper>
        </div>
      </div>
    </main>
  );
}
