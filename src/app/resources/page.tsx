export default function Resources() {
  return (
    <div className="w-full rounded-md flex flex-col md:items-center md:justify-start bg-black/[0.96] antialiased bg-grid-small-white/[0.02] pt-[10vh] relative overflow-hidden p-8">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Resources <br />
      </h1>
      <div className="h-screen w-full lg:w-1/2 flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold m-2 mt-4">ML Roadmap</h2>
        <iframe src="/roadmaps/ML-Roadmap-24.pdf" className="w-full h-full rounded-lg"/>
      </div>
      <br />
      <br />
      <div className="h-screen w-full lg:w-1/2 flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold m-2 mt-4">Neuro Roadmap</h2>
        <iframe src="/roadmaps/Neuro Roadmap 24.pdf" className="w-full h-full rounded-lg"/>
      </div>
    </div>
  );
}
