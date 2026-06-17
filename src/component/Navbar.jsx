import { useGsap, gsap } from "../hooks/useGsap";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navRef = useGsap(() => {
    gsap.from(".nav-item", {
      y: -20,
      opacity: 0,
      stagger: 0.08,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.3,
    });
  });

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center gap-8 sm:gap-12 py-4 px-6 backdrop-blur-md bg-white/30"
    >
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="nav-item font-mono text-sm sm:text-base text-black/70 hover:text-black transition-colors duration-200"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
