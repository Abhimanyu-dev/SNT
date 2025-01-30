import { Card } from "@/components/ui/card";
import { getPosts } from "@/utils/md";
import path from "path";

export default function Events() {
  const dir = path.join(process.cwd(), "src", "app", "events", "posts");
  const events = getPosts(dir);
  return (
    <div className="w-full rounded-md flex flex-col md:items-center md:justify-start bg-black/[0.96] antialiased bg-grid-small-white/[0.02] pt-20 relative overflow-hidden">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Events <br />
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-evenly m-5">
        {events.map((event, index) => (
          <Card
            key={index}
            link={`/events/${event?.link}`}
            title={event?.formattedTitle}
            abstract={event?.abstract}
            date={event?.formattedDate}
          />
        ))}
      </div>
    </div>
  );
}
