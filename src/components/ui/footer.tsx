
import { Instagram, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-black/70 border-t border-orange-500/20 text-center relative w-full mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <a
          href="https://www.instagram.com/academix.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-transform hover:scale-110 hover:text-orange-400 text-orange-500 text-lg"
        >
          <Instagram size={32} />
          <span className="font-medium">Instagram</span>
        </a>
        <div className="flex items-center gap-2 text-white opacity-80 text-lg">
          <Phone size={22} className="text-orange-400" />
          <span className="font-semibold tracking-wide">01010748045</span>
        </div>
      </div>
    </footer>
  );
}
