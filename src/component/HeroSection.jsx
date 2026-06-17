import { useGsap, gsap } from "../hooks/useGsap";

export default function HeroSection() {
  const sectionRef = useGsap((ctx) => {
    const tl = gsap.timeline();

    tl.from(".hero-cover", {
      opacity: 0,
      scale: 0.8,
      y: 40,
      duration: 1,
      ease: "power3.out",
    })
    .from(".hero-disc", {
      opacity: 0,
      x: 200,
      duration: 1.2,
      ease: "back.out(1.4)",
    }, "-=0.5");

    gsap.to(".hero-disc", {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#D2EDF6] overflow-hidden"
    >
      <div className="relative">
        {/* CD Cover */}
        <img
          src="/images/Cover.svg"
          alt="CD Cover"
          className="hero-cover w-[320px] sm:w-[400px] md:w-[520px] relative z-10"
        />

        {/* CD Disc — terpisah biar bisa animasi */}
        <img
          src="/images/DVD.svg"
          alt="CD Disc"
          className="hero-disc absolute -top-[10%] -right-[45%] w-[280px] sm:w-[360px] md:w-[620px] z-0"
        />
      </div>
    </section>
  );
}
