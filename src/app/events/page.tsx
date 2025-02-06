import { Card } from "@/components/ui/card";
import { getPosts } from "@/utils/md";
import path from "path";

export default function Events() {
  const dir = path.join(process.cwd(), "src", "app", "events", "posts");
  const events = getPosts(dir);
  return (
    <div className="w-full rounded-md flex flex-col md:items-center md:justify-start bg-black/[0.96] antialiased bg-grid-small-white/[0.1] pt-20 relative overflow-hidden">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-2">
        Events <br />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mx-auto m-5">
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
