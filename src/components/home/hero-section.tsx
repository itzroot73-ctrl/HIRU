export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-56px)] w-full overflow-hidden">
      <video
        src="https://videos.pexels.com/video-files/853829/853829-hd_1920_1080_24fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
        data-ai-hint="photographer beach"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
          HIRU
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-foreground/80">
          Capturing life's moments, one frame at a time. Professional photography for every occasion. We specialize in creating beautiful, high-quality images that tell your story. Explore our portfolio and let's create something memorable together.
        </p>
      </div>
    </section>
  );
}
