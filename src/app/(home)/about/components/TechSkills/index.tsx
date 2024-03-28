import { Label } from "@/components";
import FadeInWrapper from "@/components/Animation/FadeIn";

function TechSkills() {
  const skills = {
    frontend: [
      "Html & Css",
      "Javascript",
      "ReactJs",
      "NextJs",
      "GatsbyJs",
      "Tailwindcss",
      "Redux",
      "Rtk-query",
      "Storybook",
      "React Native",
      "HTMLCanvas",
    ],
    backend: ["Nodejs", "ExpressJs", "Mongodb", "Postgresql"],
    others: [
      "Typescript",
      "Nginx",
      "JEST",
      "Cypress",
      "Figma",
      "Technical Writing",
    ],
  };

  return (
    <div className="flex-1 flex flex-col gap-4">
      <h2 className="pt-4 text-4xl">Tech Skills</h2>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg">Frontend</h2>
        <div className="flex flex-row gap-2 flex-wrap">
          {skills.frontend.map((item, index) => {
            return (
              <FadeInWrapper key={item} delay={index * 0.2}>
                <Label size="s">{item}</Label>
              </FadeInWrapper>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg">Backend</h2>
        <div className="flex flex-row gap-2 flex-wrap">
          {skills.backend.map((item, index) => {
            return (
              <FadeInWrapper
                key={item}
                delay={(skills.frontend.length + index) * 0.2}
              >
                <Label size="s">{item}</Label>
              </FadeInWrapper>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg">Others</h2>
        <div className="flex flex-row gap-2 flex-wrap">
          {skills.others.map((item, index) => {
            return (
              <FadeInWrapper
                key={item}
                delay={
                  (skills.frontend.length + skills.backend.length + index) * 0.2
                }
              >
                <Label size="s">{item}</Label>
              </FadeInWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TechSkills;
