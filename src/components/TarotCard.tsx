import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TarotCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick: () => void;
  delay?: number;
  isSelected?: boolean;
}

const TarotCard = ({ title, description, icon, onClick, delay = 0, isSelected }: TarotCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 180, scale: 0.8 }}
      animate={{ opacity: 1, rotateY: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 60px hsl(45 80% 55% / 0.4)"
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative cursor-pointer rounded-2xl p-1 
        bg-gradient-to-br from-gold via-gold-dark to-gold-light
        ${isSelected ? 'ring-4 ring-gold shadow-glow' : ''}
      `}
      style={{ perspective: 1000 }}
    >
      <div className="relative rounded-xl bg-gradient-to-br from-mystic-purple to-mystic-deep p-6 h-full min-h-[280px] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Decorative corners */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold opacity-60" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold opacity-60" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold opacity-60" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold opacity-60" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent" />
        
        {/* Icon */}
        <motion.div 
          className="text-6xl mb-4"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
        
        {/* Title */}
        <h3 className="text-gold font-bold text-xl mb-2 tracking-wide">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-starlight text-sm opacity-80">
          "{description}"
        </p>
        
        {/* Sparkles */}
        <motion.div
          className="absolute top-8 right-8 text-gold text-xs"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✦
        </motion.div>
        <motion.div
          className="absolute bottom-12 left-8 text-gold text-xs"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        >
          ✧
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TarotCard;
