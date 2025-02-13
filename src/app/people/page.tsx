import { FocusCards } from "@/components/ui/focus-cards";
import fs from "fs";
import yaml from "js-yaml";
import path from "path";

export default async function People() {
  const data = await getData();
  const cordies = data
    ?.filter((e: { post: string }) => e.post === "Coordinator")
    .sort((a, b) => a.firstname.localeCompare(b.firstname));
  const secies = data
    ?.filter((e: { post: string }) => e.post === "Secretary")
    .sort((a, b) => a.firstname.localeCompare(b.firstname));
  const excordies = data
    ?.filter((e: { post: string }) => e.post === "Ex-Coordinator")
    .sort((a, b) => a.firstname.localeCompare(b.firstname));
  const founder: Member[] = [
    {
      firstname: "Shashi",
      lastname: "Kant",
      post: "Founder",
      img: "shashi.jpg",
      about:
        "I'm a dual degree BT-MT student in Electrical Engineering. I'm passionate about conducting research in Artificial General Intelligence and Cognitive Sciences. I dream of reverse engineering the human intelligence to create more general and intelligent AI. Apart from academics, I love to do pencil sketching, kirigami, and watch animes.",
      github: "shashikg",
      mail: "shashikg@iitk.ac.in",
      fb: "",
    },
  ];
  return (
    <div className="w-full rounded-md flex flex-col md:items-center md:justify-start bg-black/[0.96] antialiased bg-grid-small-white/[0.1] pt-20 relative overflow-hidden">
      <h1 className="text-2xl md:text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Meet the Team <br />
      </h1>
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Our Coordinators <br />
      </h1>
      <FocusCards cards={cordies} />
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Our Secretaries <br />
      </h1>
      <FocusCards cards={secies} amount={0} />
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Our Ex-Leaders <br />
      </h1>
      <FocusCards cards={excordies} amount={0.05} />
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Our Esteemed Founder <br />
      </h1>
      <FocusCards cards={founder} amount={0.05} />
    </div>
  );
}

export interface Member {
  firstname: string;
  lastname: string;
  post: string;
  img: string;
  github: string;
  fb: string;
  mail: string;
  about: string;
}

async function getData(): Promise<Member[] | null> {
  try {
    const filePath = path.join(process.cwd(), "public", "members.yml");
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const data = yaml.load(fileContents) as Member[];
    return data;
  } catch (error) {
    return null;
  }
}
