import { useGsap, gsap } from "../hooks/useGsap";

export default function AboutSection() {
  const sectionRef = useGsap(() => {
    gsap.from(".about-title", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
      },
      rotation: -35,
      opacity: 0,
      x: -60,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".about-disc", {
      scrollTrigger: {
        trigger: ".about-disc",
        start: "top 80%",
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 85%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out",
    });

    gsap.from(".about-torn", {
      scrollTrigger: {
        trigger: ".about-torn",
        start: "top 90%",
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-[#D2EDF6] overflow-visible z-10"
    >
      {/* About Me — Argine title */}
      <div className="about-title absolute top-100 left-8 sm:top-12 sm:left-40 z-20 -rotate-[20deg]">
        <span className="font-argine font-extrabold text-[7rem] sm:text-[10rem] leading-none text-black">
          About<br />Me
        </span>
      </div>

      {/* CD Case */}
      <div className="about-disc relative w-[125vw] max-w-[1000px]">
        <img
          src="/images/disc.svg"
          alt="About Me CD"
          className="w-full relative z-10"
        />

        {/* Text overlay di dalam disc */}
        <div className="about-text absolute bottom-[15%] left-[5%] w-[40%] z-20 -rotate-[4.2deg]">
          <p className="font-mono text-[0.6rem] sm:text-[1rem] leading-relaxed text-white text-justify">
            Hi, I'm Darari Mazaya Aisy. I'm an Information Technology student at Brawijaya University passionate about bridging the gap between analytical rigor and user-centric design. From developing data-driven B2B platforms to tech-based solutions that drive both business growth and positive social impact.
          </p>
        </div>
      </div>

      {/* Torn paper transition */}
      <div className="about-torn absolute -bottom-12 left-0 right-0 w-full z-30">
        <img
          src="/images/torn.svg"
          alt=""
          className="w-full"
        />
      </div>
    </section>
  );
}
