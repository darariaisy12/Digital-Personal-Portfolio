import { useState, useCallback } from "react";
import { useGsap, gsap } from "../hooks/useGsap";

const folderData = {
  project: {
    label: "My Project",
    items: [
      { name: "Dashboard UI", desc: "Admin panel dark mode", tags: ["React", "Tailwind"], bg: "#E6F1FB", icon: "/images/project-icon-1.png" },
      { name: "E-commerce", desc: "Toko online full stack", tags: ["Next.js", "Supabase"], bg: "#EAF3DE", icon: "/images/project-icon-2.png" },
      { name: "Landing page", desc: "Company profile animasi", tags: ["HTML", "GSAP"], bg: "#FAEEDA", icon: "/images/project-icon-3.png" },
      { name: "Chat app", desc: "Realtime messaging", tags: ["Socket.io", "Vue"], bg: "#EEEDFE", icon: "/images/project-icon-4.png" },
      { name: "Porto web", desc: "Portfolio pribadi", tags: ["React", "CSS"], bg: "#FBEAF0", icon: "/images/project-icon-5.png" },
      { name: "Weather app", desc: "Cuaca real-time", tags: ["API", "JS"], bg: "#E1F5EE", icon: "/images/project-icon-6.png" },
    ],
  },
  achievement: {
    label: "My Achievement",
    items: [
      { name: "Hackathon #1", desc: "Juara 1 regional 2024", tags: ["Winner"], bg: "#FAEEDA", icon: "/images/achievement-icon-1.png" },
      { name: "UI Challenge", desc: "Top 10 Dribbble", tags: ["Design"], bg: "#FBEAF0", icon: "/images/achievement-icon-2.png" },
      { name: "Open Source", desc: "100+ GitHub stars", tags: ["OSS"], bg: "#EAF3DE", icon: "/images/achievement-icon-3.png" },
      { name: "Sertifikat", desc: "Meta React Dev", tags: ["Coursera"], bg: "#EEEDFE", icon: "/images/achievement-icon-4.png" },
    ],
  },
};

function FolderIcon({ type, isAnimating }) {
  return (
    <img
      src={type === "achievement" ? "/images/file-2.svg" : "/images/file-1.svg"}
      alt={type}
      className={`w-full h-full object-contain ${isAnimating ? "animate-filePopup" : ""}`}
    />
  );
}

function ProjectCard({ item, index }) {
  return (
    <div
      className="border border-gray-100 rounded-xl overflow-hidden cursor-pointer hover:scale-105 hover:border-gray-300 transition-all duration-150 animate-cardIn bg-white"
      style={{ animationDelay: `${100 + index * 65}ms`, animationFillMode: "both" }}
    >
      <div className="h-14 flex items-center justify-center text-2xl" style={{ background: item.bg }}>
        <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
      </div>
      <div className="p-2">
        <p className="text-xs font-medium text-gray-800 mb-0.5">{item.name}</p>
        <p className="text-[10px] text-gray-400 mb-1.5 leading-snug">{item.desc}</p>
        <div className="flex flex-wrap gap-1">
          {item.tags.map((t) => (
            <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Modal({ type, onClose }) {
  const folder = folderData[type];
  return (
    <div
      className="absolute inset-0 bg-black/45 flex items-center justify-center z-10 rounded-2xl"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl border border-gray-100 w-[90%] max-w-md p-5 animate-modalPop">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-gray-800">{folder.label}</p>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none transition-colors"
            aria-label="Tutup"
          >
            ✕
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {folder.items.map((item, i) => (
            <ProjectCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectSection() {
  const [activeFolder, setActiveFolder] = useState(null);
  const [animatingFile, setAnimatingFile] = useState(null);

  const handleFileClick = useCallback((type) => {
    setAnimatingFile(type);
    setTimeout(() => {
      setActiveFolder(type);
      setAnimatingFile(null);
    }, 500);
  }, []);

  const sectionRef = useGsap(() => {
    gsap.from(".project-title", {
      scrollTrigger: {
        trigger: ".project-title",
        start: "top 85%",
      },
      opacity: 0,
      scale: 0.7,
      y: -30,
      duration: 0.8,
      ease: "back.out(1.5)",
    });

    gsap.from(".project-folder", {
      scrollTrigger: {
        trigger: ".project-folder",
        start: "top 85%",
      },
      opacity: 0,
      scale: 0.5,
      y: 50,
      stagger: 0.15,
      duration: 0.7,
      ease: "back.out(1.7)",
    });
  });

  return (
    <section id="project" className="relative min-h-screen overflow-hidden">
      <img
        src="/images/bg-project.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-[1] min-h-[480px] p-6 select-none">
        {/* Title */}
        <div className="absolute top-6 left-15 sm:top-10 sm:left-15 z-30 -rotate-[6deg]">
          <span className="font-argine font-bold text-[3rem] sm:text-[9rem] leading-[0.9] text-black">
            My<br />Project
          </span>
        </div>

        {/* Stamp frame with scalloped perforated edges */}
        <div className="stamp-frame absolute inset-x-0  z-10 mx-auto w-[95%] sm:w-[85%] min-h-[280px] sm:min-h-[600px] bg-white/40 p-10 sm:p-16 top-[50%]">
          <div className="flex gap-50 flex-wrap items-center justify-center">
            {["project", "achievement"].map((type) => (
              <button
                key={type}
                onClick={() => handleFileClick(type)}
                className="flex flex-col items-center gap-2 bg-transparent border-none cursor-pointer p-2 rounded-lg hover:bg-white/30 active:scale-95 transition-all duration-150"
              >
                <div className="w-[20rem] h-[20rem]">
                  <FolderIcon type={type} isAnimating={animatingFile === type} />
                </div>
                <span className="text-4xl font-medium text-gray-700 font-mono tracking-wide">
                  {folderData[type].label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Modal */}
        {activeFolder && <Modal type={activeFolder} onClose={() => setActiveFolder(null)} />}
      </div>
    </section>
  );
}
