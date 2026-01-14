import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TarotCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick: () => void;
  delay?: number;
  isSelected?: boolean;
  compact?: boolean;
}

const TarotCard = ({ title, description, icon, onClick, delay = 0, isSelected, compact }: TarotCardProps) => {
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
        relative cursor-pointer rounded-xl sm:rounded-2xl p-0.5 sm:p-1 
        bg-gradient-to-br from-gold via-gold-dark to-gold-light
        ${isSelected ? 'ring-2 sm:ring-4 ring-gold shadow-glow' : ''}
      `}
      style={{ perspective: 1000 }}
    >
      <div className={`
        relative rounded-lg sm:rounded-xl bg-gradient-to-br from-mystic-purple to-mystic-deep 
        h-full flex flex-col items-center justify-center text-center overflow-hidden
        ${compact ? 'p-2 sm:p-4 md:p-6 min-h-[140px] sm:min-h-[200px] md:min-h-[280px]' : 'p-6 min-h-[280px]'}
      `}>
        {/* Decorative corners */}
        <div className="absolute top-1.5 sm:top-3 left-1.5 sm:left-3 w-3 sm:w-6 h-3 sm:h-6 border-t sm:border-t-2 border-l sm:border-l-2 border-gold opacity-60" />
        <div className="absolute top-1.5 sm:top-3 right-1.5 sm:right-3 w-3 sm:w-6 h-3 sm:h-6 border-t sm:border-t-2 border-r sm:border-r-2 border-gold opacity-60" />
        <div className="absolute bottom-1.5 sm:bottom-3 left-1.5 sm:left-3 w-3 sm:w-6 h-3 sm:h-6 border-b sm:border-b-2 border-l sm:border-l-2 border-gold opacity-60" />
        <div className="absolute bottom-1.5 sm:bottom-3 right-1.5 sm:right-3 w-3 sm:w-6 h-3 sm:h-6 border-b sm:border-b-2 border-r sm:border-r-2 border-gold opacity-60" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent" />
        
        {/* Icon */}
        <motion.div 
          className={compact ? "text-3xl sm:text-4xl md:text-6xl mb-1 sm:mb-2 md:mb-4" : "text-6xl mb-4"}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
        
        {/* Title */}
        <h3 className={`text-gold font-bold tracking-wide ${compact ? 'text-xs sm:text-base md:text-xl mb-0.5 sm:mb-1 md:mb-2' : 'text-xl mb-2'}`}>
          {title}
        </h3>
        
        {/* Description */}
        <p className={`text-starlight opacity-80 leading-tight ${compact ? 'text-[8px] sm:text-xs md:text-sm' : 'text-sm'}`}>
          "{description}"
        </p>
        
        {/* Sparkles */}
        <motion.div
          className="absolute top-4 sm:top-8 right-4 sm:right-8 text-gold text-[8px] sm:text-xs"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✦
        </motion.div>
        <motion.div
          className="absolute bottom-6 sm:bottom-12 left-4 sm:left-8 text-gold text-[8px] sm:text-xs"
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
