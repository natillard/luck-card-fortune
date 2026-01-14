import { motion, AnimatePresence } from "framer-motion";

interface BonusPopupProps {
  isOpen: boolean;
  isWinner: boolean;
  onClose: () => void;
}

const BonusPopup = ({ isOpen, isWinner, onClose }: BonusPopupProps) => {
  const handleConfirm = () => {
    if (isWinner) {
      window.open("https://www.style24.com/mypage/main/form", "_blank");
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50"
            onClick={onClose}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-gold via-gold-dark to-gold-light max-w-sm w-full pointer-events-auto">
              <div className="relative rounded-xl bg-gradient-to-br from-mystic-purple to-mystic-deep p-8 text-center overflow-hidden">
                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-gold opacity-60" />
                <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-gold opacity-60" />
                <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-gold opacity-60" />
                <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-gold opacity-60" />
                
                {/* Icon */}
                <motion.div 
                  className="text-6xl mb-4"
                  animate={isWinner ? { 
                    rotate: [0, -10, 10, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {isWinner ? '🎉' : '🍀'}
                </motion.div>
                
                {/* Message */}
                <h3 className="text-gold font-bold text-xl mb-3">
                  {isWinner ? '축하합니다!' : '앗! 아쉽지만...'}
                </h3>
                
                <p className="text-starlight text-base mb-6 leading-relaxed">
                  {isWinner 
                    ? '10% 쇼핑백 쿠폰이 발급되었습니다.'
                    : '이번에는 당첨되지 않았어요. 작은 액땜으로 더 큰 행운이 올 거예요!'
                  }
                </p>
                
                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleConfirm}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-gold to-gold-dark text-mystic-deep font-bold text-lg shadow-glow hover:shadow-[0_0_50px_hsl(45_80%_55%_/_0.5)] transition-shadow"
                >
                  확인
                </motion.button>
                
                {/* Sparkles for winner */}
                {isWinner && [...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-gold"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      y: [-20, -40]
                    }}
                    transition={{ 
                      duration: 1,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    ✦
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BonusPopup;
