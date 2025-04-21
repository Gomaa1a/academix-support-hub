
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface AnimatedHeroProps {
  onScrollToServices: () => void;
  onScrollToDemo: () => void;
  onScrollToContact: () => void;
}

export const AnimatedHero = ({ onScrollToServices, onScrollToDemo, onScrollToContact }: AnimatedHeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-[#141111] to-[#18150e] relative overflow-hidden">
      {/* Background orbs animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: "linear-gradient(45deg, rgba(251, 146, 60, 0.15), rgba(251, 146, 60, 0.05))",
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Left side images */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="relative">
          <motion.img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Tech Interface"
            className="w-64 h-48 object-cover rounded-r-lg shadow-2xl mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="AI Interaction"
            className="w-48 h-64 object-cover rounded-r-lg shadow-2xl ml-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Right side images */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="relative">
          <motion.img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Code Interface"
            className="w-64 h-48 object-cover rounded-l-lg shadow-2xl mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="AI Assistant"
            className="w-48 h-64 object-cover rounded-l-lg shadow-2xl mr-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter bg-gradient-to-r from-white to-orange-500/80 bg-clip-text text-transparent"
        >
          ACADEMIX.AI
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col gap-4 sm:flex-row sm:justify-center w-full max-w-lg mx-auto"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg shadow-md w-full"
              onClick={onScrollToServices}
            >
              Services
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-8 py-6 text-lg shadow-md w-full"
              onClick={onScrollToDemo}
            >
              Demo
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-white/10 hover:bg-white/20 text-orange-400 border border-orange-400 px-8 py-6 text-lg shadow-md w-full"
              onClick={onScrollToContact}
            >
              Contact
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
