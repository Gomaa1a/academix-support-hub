
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface AnimatedHeroProps {
  onScrollToServices: () => void;
  onScrollToDemo: () => void;
  onScrollToContact: () => void;
}

export const AnimatedHero = ({ onScrollToServices, onScrollToDemo, onScrollToContact }: AnimatedHeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-[#0a0a12] to-[#1a1a2e] relative overflow-hidden">
      {/* Floating elements animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0"
      >
        {/* Floating circles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full"
            style={{
              background: i % 3 === 0 
                ? "linear-gradient(45deg, rgba(251, 146, 60, 0.2), rgba(251, 146, 60, 0.05))"
                : i % 3 === 1 
                  ? "linear-gradient(45deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))" 
                  : "linear-gradient(45deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))",
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(2px)",
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 60 - 30],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.05, 1],
              rotate: [0, Math.random() * 180],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Floating polygons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`polygon-${i}`}
            className="absolute"
            style={{
              width: Math.random() * 100 + 30,
              height: Math.random() * 100 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 
                ? "linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(239, 68, 68, 0.05))"
                : "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05))",
              clipPath: i % 4 === 0 
                ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" // diamond
                : i % 4 === 1 
                  ? "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" // hexagon
                  : i % 4 === 2
                    ? "polygon(0% 0%, 100% 0%, 100% 100%, 30% 100%, 0% 70%)" // pentagon
                    : "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)", // heptagon
              filter: "blur(1px)",
              opacity: 0.4,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 60 - 30],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIGQ9Ik0wIDYwTDYwIDAiLz48cGF0aCBkPSJNMCAwTDYwIDYwIi8+PHBhdGggZD0iTTMwIDBMMzAgNjAiLz48cGF0aCBkPSJNMCAzMEw2MCAzMCIvPjwvZz48L3N2Zz4=')]" />
      </motion.div>

      {/* Floating accent ring */}
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full border border-orange-500/10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.2, 0.8], 
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Second floating accent ring */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full border-2 border-purple-500/5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [1, 1.1, 1], 
          opacity: [0.05, 0.2, 0.05],
          rotate: [360, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-4 text-orange-500/80"
        >
          <motion.div 
            className="inline-block"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            AI-Powered Education Solutions
          </motion.div>
        </motion.div>
        
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter bg-gradient-to-r from-white via-orange-200 to-orange-500/80 bg-clip-text text-transparent"
        >
          ACADEMIX.AI
        </motion.h1>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-xl mx-auto text-lg text-gray-300/90 mb-12"
        >
          Transform your educational institution with cutting-edge AI technology that enhances student experiences and streamlines administrative tasks.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col gap-4 sm:flex-row sm:justify-center w-full max-w-lg mx-auto"
        >
          <motion.div whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(251, 146, 60, 0.5)" }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg shadow-md w-full"
              onClick={onScrollToServices}
            >
              Services
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(251, 146, 60, 0.5)" }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-8 py-6 text-lg shadow-md w-full"
              onClick={onScrollToDemo}
            >
              Demo
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(251, 146, 60, 0.3)" }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-white/10 hover:bg-white/20 text-orange-400 border border-orange-400 px-8 py-6 text-lg shadow-md w-full backdrop-blur-sm"
              onClick={onScrollToContact}
            >
              Contact
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Glowing radial highlight */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent" style={{ background: "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15), transparent 60%)" }} />
    </section>
  );
};
