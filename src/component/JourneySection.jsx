import { useGsap, gsap } from "../hooks/useGsap";

export default function JourneySection() {
  const sectionRef = useGsap(() => {
    gsap.from(".journey-title", {
      scrollTrigger: {
        trigger: ".journey-title",
        start: "top 80%",
      },
      x: -60,
      rotation: -35,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".journey-photo", {
      scrollTrigger: {
        trigger: ".journey-photo",
        start: "top 85%",
      },
      opacity: 0,
      x: (i) => (i % 2 === 0 ? -80 : 80),
      rotation: (i) => (i % 2 === 0 ? -10 : 10),
      stagger: 0.3,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(".journey-caption", {
      scrollTrigger: {
        trigger: ".journey-caption",
        start: "top 85%",
      },
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.from(".journey-sticker", {
      scrollTrigger: {
        trigger: ".journey-sticker",
        start: "top 90%",
      },
      y: -120,
      rotation: () => gsap.utils.random(-30, 30),
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "bounce.out",
    });

    gsap.from(".journey-envelope", {
      scrollTrigger: {
        trigger: ".journey-envelope",
        start: "top 85%",
      },
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.5)",
    });
  });

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative w-full aspect-[1400/2221] overflow-hidden bg-[#F5F1E8]"
      style={{
        backgroundImage: "url('/images/Journey-bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Title */}
      <div className="journey-title absolute top-6 left-6 sm:top-10 sm:left-10 z-30 -rotate-[6deg]">
        <span className="font-argine font-bold text-[3rem] sm:text-[12rem] leading-[0.9] text-black">
          My<br />Journey
        </span>
      </div>

      {/* Foto 1 — Chief of Marketing */}
      <div className="journey-photo absolute top-[21%] left-[2%] sm:left-[-3%] z-10 -rotate-[5deg]">
        <img
          src="/images/journey1.svg"
          alt="Chief of Marketing at Business Unit Porvi's Line"
          className="w-[220px] sm:w-[600px]"
        />
      </div>
      <p className="journey-caption absolute top-[39%] left-[8%] sm:left-[4%] font-bold font-mono text-[0.5rem] sm:text-[2rem] text-[#584B4B] z-10 -rotate-[13deg]">
        Chief of Marketing<br /> at Business Unit <br />Porvi's Line
      </p>

      {/* Foto 2 — tim tanpa caption (atas) */}
      <img
        src="/images/journey2.svg"
        alt="Team Photo"
        className="journey-photo absolute top-[16%] right-[4%] sm:right-[30%] w-[200px] sm:w-[500px] rotate-[-4deg] z-10"
      />

      {/* Foto 3 — tim seragam biru (tengah) */}
      <img
        src="/images/journey3.svg"
        alt="Team Photo"
        className="journey-photo absolute top-[28%] left-[28%] sm:left-[28%] w-[220px] sm:w-[500px] z-20 rotate-[-15deg]"
      />

      {/* Decorative — sticky note */}
      <img
        src="/images/amplop.svg"
        alt=""
        className="journey-envelope absolute top-[42%] right-[2%] sm:right-[-2%] w-[260px] sm:w-[700px] z-20 rotate-[4deg] pointer-events-none"
      />

      {/* Foto 4 — frame merah */}
      <img
        src="/images/journey4.svg"
        alt="Team Photo"
        className="journey-photo absolute top-[52%] left-[4%] sm:left-[3%] w-[260px] sm:w-[700px] z-10 -rotate-[4deg]"
      />

      {/* Foto 5 — Project Planner Open Recruitment */}
      <img
        src="/images/journey5.svg"
        alt="Project Planner Open Recruitment MW 2025"
        className="journey-photo absolute top-[68%] right-[4%] sm:right-[12%] w-[260px] sm:w-[750px] z-10"
      />
      <p className="journey-caption absolute bottom-[8%] right-[8%] sm:right-[34%] font-bold font-mono text-[0.5rem] sm:text-[2rem] text-[#584B4B] z-10">
        Project Planner Open<br /> Recuruitment MW 2025
      </p>

      {/* Decorative stickers */}
      <img
        src="/images/apel.png"
        alt=""
        className="journey-sticker absolute top-[25%] right-[23%] w-[60px] sm:w-[200px] z-20 pointer-events-none"
      />
      <img
        src="/images/anjing.png"
        alt=""
        className="journey-sticker absolute top-[45%] left-[42%] w-[60px] sm:w-[200px] z-20 pointer-events-none"
      />
      <img
        src="/images/bebek.png"
        alt=""
        className="journey-sticker absolute top-[78%] left-[20%] w-[80px] sm:w-[200px] z-20 pointer-events-none"
      />
    </section>
  );
}
