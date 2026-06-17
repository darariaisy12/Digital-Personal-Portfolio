import { useState, useRef, useEffect } from "react";
import { useGsap, gsap } from "../hooks/useGsap";

export default function GallerySection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const diskRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!diskRef.current) return;

    if (isPlaying) {
      gsap.to(diskRef.current, {
        rotation: "+=360",
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    } else {
      gsap.killTweensOf(diskRef.current);
    }

    return () => {
      if (diskRef.current) gsap.killTweensOf(diskRef.current);
    };
  }, [isPlaying]);

  const sectionRef = useGsap(() => {
    gsap.from(".gallery-title", {
      scrollTrigger: {
        trigger: ".gallery-title",
        start: "top 80%",
      },
      x: -100,
      rotation: -15,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".gallery-polaroid", {
      scrollTrigger: {
        trigger: ".gallery-polaroid",
        start: "top 85%",
      },
      y: -80,
      rotation: () => gsap.utils.random(-10, 10),
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "bounce.out",
    });

    gsap.to(".gallery-note", {
      y: "+=15",
      duration: () => gsap.utils.random(2, 4),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.5,
        from: "random",
      },
    });

    gsap.from(".gallery-flower", {
      scrollTrigger: {
        trigger: ".gallery-flower",
        start: "top 90%",
      },
      scale: 0,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: "back.out(1.7)",
    });
  });

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative w-full min-h-[2000px] sm:min-h-[2400px] overflow-hidden bg-[#FBE2E8] z-0"
      style={{
        backgroundImage: "url('/images/bgpink.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "500px",
      }}
    >
      {/* Title */}
      <div className="gallery-title absolute top-6 left-6 sm:top-20 sm:left-20 z-30 -rotate-[8deg]">
        <span className="font-argine font-bold text-[3rem] sm:text-[9rem] leading-[0.9] text-black">
          My Art<br />Gallery
        </span>
      </div>

      {/* Audio element */}
      <audio ref={audioRef} src="/audio/prologue.mp3" loop />

      {/* Cassette - clickable */}
      <button
        onClick={togglePlay}
        className="absolute top-[16%] left-[6%] sm:left-[2%] z-30 w-[180px] sm:w-[400px] cursor-pointer hover:scale-105 transition-transform duration-300"
      >
        <img
          ref={diskRef}
          src="/images/disk.svg"
          alt="Play Prologue"
          className="w-full"
        />
      </button>

      {/* Musical note 1 */}
      <img
        src="/images/notes-1.svg"
        alt=""
        className="gallery-note absolute top-[17%] left-[20%] sm:left-[14%] w-[200px] sm:w-[900px] z-10 pointer-events-none"
      />

      {/* Musical note 2 */}
      <img
        src="/images/notes-2.svg"
        alt=""
        className="gallery-note absolute top-[38%] right-[6%] sm:right-[-3%] w-[160px] sm:w-[600px] z-10 pointer-events-none"
      />

      {/* Musical note 3 */}
      <img
        src="/images/notes-3.svg"
        alt=""
        className="gallery-note absolute top-[72%] right-[16%] sm:right-[45%] w-[220px] sm:w-[900px] z-10 pointer-events-none"
      />

      {/* Polaroid 1 */}
      <img
        src="/images/art1.svg"
        alt="Artwork 1"
        className="gallery-polaroid absolute top-[10%] right-[4%] sm:right-[-6%] w-[220px] sm:w-[700px] z-10 rotate-[2deg]"
      />

      {/* Polaroid 2 */}
      <img
        src="/images/art2.svg"
        alt="Artwork 2"
        className="gallery-polaroid absolute top-[31%] left-[2%] sm:left-[-5%] w-[200px] sm:w-[700px] z-3 -rotate-[6deg]"
      />

      {/* Polaroid 3 */}
      <img
        src="/images/art3.svg"
        alt="Artwork 3"
        className="gallery-polaroid absolute top-[54%] right-[5%] sm:right-[-6%] w-[230px] sm:w-[950px] z-10 rotate-[3deg]"
      />

      {/* Polaroid 4 */}
      <img
        src="/images/art4.svg"
        alt="Artwork 4"
        className="gallery-polaroid absolute bottom-[11%] left-[5%] sm:left-[-1%] w-[200px] sm:w-[500px] z-3 -rotate-[-6deg]"
      />

      {/* Decorative flowers */}
      <img
        src="/images/bunga-1.svg"
        alt=""
        className="gallery-flower absolute top-[44%] left-[-15%] w-[140px] sm:w-[800px] z-10 pointer-events-none"
      />
      <img
        src="/images/bunga-2.svg"
        alt=""
        className="gallery-flower absolute top-[33%] right-[-26%] w-[120px] sm:w-[800px] z-10 rotate-[-5deg] pointer-events-none"
      />

      {/* Ribbon */}
      <img
        src="/images/ribbon.png"
        alt=""
        className="absolute bottom-[14%] left-[36%] w-[60px] sm:w-[80px] z-20 pointer-events-none"
      />
    </section>
  );
}
