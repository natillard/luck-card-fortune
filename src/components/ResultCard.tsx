import { motion } from "framer-motion";

interface ResultCardProps {
  message: string;
}

const ResultCard = ({ message }: ResultCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        duration: 1,
        type: "spring",
        stiffness: 80
      }}
      className="relative rounded-2xl p-1 bg-gradient-to-br from-gold via-gold-dark to-gold-light max-w-md mx-auto"
    >
      <div className="relative rounded-xl bg-gradient-to-br from-mystic-purple to-mystic-deep p-8 text-center overflow-hidden min-h-[350px] flex flex-col items-center justify-center">
        {/* Decorative frame */}
        <div className="absolute inset-4 border border-gold/30 rounded-lg" />
        
        {/* Decorative corners */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gold" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-gold" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-gold/10 via-transparent to-transparent" />
        
        {/* Lucky bag icon */}
        <motion.div 
          className="text-7xl mb-6"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          🧧
        </motion.div>
        
        {/* Result title */}
        <motion.h3 
          className="text-gold font-bold text-2xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          ✦ 당신의 행운 메시지 ✦
        </motion.h3>
        
        {/* Fortune message */}
        <motion.p 
          className="text-starlight text-lg leading-relaxed px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          "{message}"
        </motion.p>
        
        {/* Sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              fontSize: `${8 + Math.random() * 8}px`
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ 
              duration: 1.5 + Math.random(), 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
          >
            {i % 2 === 0 ? '✦' : '✧'}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ResultCard;
