import { Lightbulb, Atom, Box } from "lucide-react"

export function AboutUs() {
    return (
    <div className="flex flex-col items-center justify-start h-[90vh]">
      <p className="text-2xl border-b sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        A Little About Us
      </p>
      <div className="flex flex-col h-[40%] w-[80%] text-center items-center justify-center md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4"> 
      The Science and Technology Council of IIT Kanpur is a community of science and technology enthusiasts who love to explore the unthinkable. The council encourages innovation and learning and caters to the need of all in the campus community through 20 clubs, hobby groups and teams. Arranging an array of workshops, lectures and competitions, the council is the best place to work and show of your skills. So join us in this journey to explore the unknown.
      </div>
      <div className="flex h-[40%] w-[80%] text-center items-center justify-evenly md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4"> 
        <div className="flex flex-col items-center justify-center text-xl">
            <Lightbulb size={45}/>
            7 Clubs
        </div>
        <div className="flex flex-col items-center justify-center text-xl">
            <Atom size={45}/>
            5 Societies
        </div>
        <div className="flex flex-col items-center justify-center text-xl">
            <Box size={45}/>
            7 Teams
        </div>
      </div>
    </div>
    )
}