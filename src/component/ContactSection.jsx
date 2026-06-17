import { useGsap, gsap } from "../hooks/useGsap";

const contacts = [
  {
    icon: "/images/icon-instagram.svg",
    label: "dmazayaaisy",
    href: "https://instagram.com/dmazayaaisy",
  },
  {
    icon: "/images/icon-linkedin.svg",
    label: "linkedin.com/in/darari-mazaya",
    href: "https://linkedin.com/in/darari-mazaya",
  },
  {
    icon: "/images/icon-github.svg",
    label: "github.com/darariaisy12",
    href: "https://github.com/darariaisy12",
  },
  {
    icon: "/images/icon-email.svg",
    label: "darariaisy@gmail.com",
    href: "mailto:darariaisy@gmail.com",
  },
  {
    icon: "/images/icon-phone.svg",
    label: "085781218279",
    href: "tel:085781218279",
  },
];

export default function ContactSection() {
  const sectionRef = useGsap(() => {
    gsap.from(".contact-stamp", {
      scrollTrigger: {
        trigger: ".contact-stamp",
        start: "top 85%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(".contact-link", {
      scrollTrigger: {
        trigger: ".contact-stamp",
        start: "top 85%",
      },
      opacity: 0,
      y: 15,
      stagger: 0.1,
      duration: 0.5,
      delay: 0.3,
      ease: "power2.out",
    });
  });

  return (
    <section ref={sectionRef} id="contact" className="relative min-h-screen overflow-hidden bg-[#1a6b8a]">
      {/* Background */}
      <img
        src="/images/bg-contact.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Decorative elements */}
      <img
        src="/images/deco-calendar.svg"
        alt=""
        className="absolute -top-10 left-40 sm:top-0 sm:left-30 w-150 sm:w-150 z-10"
      />
      <img
        src="/images/deco-coffee.png"
        alt=""
        className="absolute top-0 left-0 w-20 sm:w-40 z-10"
      />
      <img
        src="/images/deco-envelope.png"
        alt=""
        className="absolute top-20 left-4 sm:top-35 sm:left-7 w-45 sm:w-45 z-9"
      />
      <img
        src="/images/deco-phone.png"
        alt=""
        className="absolute left-[20%] sm:left-[30%] w-20 sm:w-18 z-40"
      />
      <img
        src="/images/deco-scissors.png"
        alt=""
        className="absolute bottom-0 left-0 sm:bottom-0 sm:left-0 w-20 sm:w-40 z-10"
      />
      <img
        src="/images/deco-sticky-note.png"
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-70 sm:w-70 z-10"
      />
      <img
        src="/images/deco-envelope-right.png"
        alt=""
        className="absolute top-0 right-0 sm:top-0 sm:right-0 w-50 sm:w-70 z-10"
      />
      <img
        src="/images/deco-wax-seal.png"
        alt=""
        className="absolute top-2 right-2 w-10 sm:w-16 z-10"
      />

      {/* Thank you text */}
      <div className="absolute bottom-10 right-6 sm:bottom-16 sm:right-12 z-10 text-right rotate-[-9deg]">
        <span
          className="font-argine text-white leading-none"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
        >
          Thank<br />you
        </span>
       
      </div>

      {/* Stamp card */}
      <div className="contact-stamp stamp-frame absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] sm:w-[70%] max-w-lg bg-white/90 p-6 sm:p-10">
        <div className="flex flex-col gap-4 sm:gap-5">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link flex items-center gap-3 sm:gap-4 group"
            >
              <img
                src={c.icon}
                alt={c.label}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0 group-hover:scale-110 transition-transform duration-150"
              />
              <span className="font-mono text-xs sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-150">
                {c.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
