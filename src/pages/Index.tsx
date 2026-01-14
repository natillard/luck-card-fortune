import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TarotCard from "@/components/TarotCard";
import ResultCard from "@/components/ResultCard";
import BonusPopup from "@/components/BonusPopup";
import StarryBackground from "@/components/StarryBackground";

type EnergyType = "sun" | "moon" | "heart" | null;
type ItemType = "shoes" | "bag" | "outfit" | null;

const FORTUNE_MESSAGES: Record<string, Record<string, string>> = {
  sun: {
    bag: "도전하는 것마다 대박! 지치지 않는 에너지로 복을 쓸어 담을 거예요",
    shoes: "거침없는 질주! 누구보다 빠르게 성공의 고지에 오를 거예요.",
    outfit: "시선 집중! 숨길 수 없는 끼와 열정이 빛을 발할 거예요",
  },
  moon: {
    bag: "언제나 탁월한 선택! 남다른 안목으로 알짜배기 행운만 챙겨요.",
    shoes: "현명한 발걸음! 당신이 가는 길이 곧 정답이 될 거예요",
    outfit: "분위기 천재! 차분하면서도 세련된 당신, 인기가 폭발하겠네요.",
  },
  heart: {
    bag: "해피 바이러스! 사랑하는 사람들과 함께 행복이 가득할 거예요.",
    shoes: "설레는 발걸음! 혼자보다는 함께할 때 더 큰 행운이 찾아와요.",
    outfit: "사랑둥이 등극! 모두가 당신에게 푹 빠질 거예요.",
  },
};

const Index = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedEnergy, setSelectedEnergy] = useState<EnergyType>(null);
  const [selectedItem, setSelectedItem] = useState<ItemType>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const handleEnergySelect = (energy: EnergyType) => {
    setSelectedEnergy(energy);
    setTimeout(() => setStep(2), 500);
  };

  const handleItemSelect = (item: ItemType) => {
    setSelectedItem(item);
    setTimeout(() => setStep(3), 500);
  };

  const handleBonusClick = () => {
    setIsWinner(Math.random() > 0.5);
    setShowPopup(true);
  };

  const getFortuneMessage = () => {
    if (selectedEnergy && selectedItem) {
      return FORTUNE_MESSAGES[selectedEnergy][selectedItem];
    }
    return "";
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarryBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gold mb-4 tracking-wider">
            The Lucky Beginning
          </h1>
          <p className="text-lg md:text-xl text-starlight/80 mb-2">
            럭키비기닝
          </p>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent my-6" />
          <p className="text-base md:text-lg text-starlight/70 max-w-xl mx-auto leading-relaxed">
            나만의 시작을 골라 행운의 메시지를 확인하세요!<br />
            깜짝 혜택의 행운도 확인해 보세요.
          </p>
        </motion.header>

        {/* Step Indicator */}
        <div className="flex justify-center gap-3 mb-8">
          {[1, 2, 3].map((s) => (
            <motion.div
              key={s}
              className={`w-3 h-3 rounded-full ${
                s === step 
                  ? 'bg-gold shadow-glow' 
                  : s < step 
                    ? 'bg-gold/50' 
                    : 'bg-muted'
              }`}
              animate={s === step ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl text-gold text-center mb-8 font-medium">
                ✦ 올해 나에게 필요한 기운은? ✦
              </h2>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-1">
                <TarotCard
                  title="열정의 태양"
                  description="뭐든 할 수 있어요"
                  icon="☀️"
                  onClick={() => handleEnergySelect("sun")}
                  delay={0}
                  isSelected={selectedEnergy === "sun"}
                  compact
                />
                <TarotCard
                  title="지혜의 달빛"
                  description="정답만 쏙쏙 골라요"
                  icon="🌙"
                  onClick={() => handleEnergySelect("moon")}
                  delay={0.15}
                  isSelected={selectedEnergy === "moon"}
                  compact
                />
                <TarotCard
                  title="행복의 하트"
                  description="웃을 일이 많아요"
                  icon="💖"
                  onClick={() => handleEnergySelect("heart")}
                  delay={0.3}
                  isSelected={selectedEnergy === "heart"}
                  compact
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl text-gold text-center mb-8 font-medium">
                ✦ 나에게 행운을 가져다 줄 부적 아이템은? ✦
              </h2>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-1">
                <TarotCard
                  title="꽃길 걷는 신발"
                  description="가는 곳마다 탄탄대로"
                  icon="👟"
                  onClick={() => handleItemSelect("shoes")}
                  delay={0}
                  isSelected={selectedItem === "shoes"}
                  compact
                />
                <TarotCard
                  title="행운 가득 가방"
                  description="복을 쓸어 담아요"
                  icon="🧧"
                  onClick={() => handleItemSelect("bag")}
                  delay={0.15}
                  isSelected={selectedItem === "bag"}
                  compact
                />
                <TarotCard
                  title="매력 폭발 코디"
                  description="어딜 가나 주인공"
                  icon="👗"
                  onClick={() => handleItemSelect("outfit")}
                  delay={0.3}
                  isSelected={selectedItem === "outfit"}
                  compact
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto"
            >
              <ResultCard message={getFortuneMessage()} />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-center mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 50px hsl(45 80% 55% / 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBonusClick}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-mystic-deep font-bold text-lg shadow-glow transition-all"
                >
                  ✦ 깜짝 혜택도 확인하기 ✦
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Notice */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-6" />
          <div className="text-starlight/50 text-sm space-y-1">
            <p>*ID당 1회 참여 가능합니다.</p>
            <p>*당첨된 스타일24 포인트는 1/23(금) 23:59까지 사용 가능합니다.</p>
          </div>
        </motion.footer>
      </div>

      {/* Bonus Popup */}
      <BonusPopup
        isOpen={showPopup}
        isWinner={isWinner}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
};

export default Index;
