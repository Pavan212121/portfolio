import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NUM_COLUMNS = 5;

export const CurtainLoader = ({ onComplete, replayKey = 0 }) => {
  const [count, setCount] = useState(0);
  const [isOpening, setIsOpening] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setCount(0);
    setIsOpening(false);
    setIsFinished(false);

    // Smooth counter animation from 0% to 100%
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsOpening(true);
          }, 300);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [replayKey]);

  useEffect(() => {
    if (isOpening) {
      const timer = setTimeout(() => {
        setIsFinished(true);
        if (onComplete) onComplete();
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [isOpening, onComplete]);

  if (isFinished) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        pointerEvents: isOpening ? 'none' : 'auto',
        overflow: 'hidden',
      }}
    >
      {/* 5 Vertical Curtain Columns */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          width: '100vw',
          height: '100vh',
        }}
      >
        {[...Array(NUM_COLUMNS)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={isOpening ? { y: '-100%' } : { y: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
              delay: isOpening ? i * 0.08 : 0,
            }}
            style={{
              flex: 1,
              height: '100%',
              backgroundColor: '#0c0e14',
              borderRight: i < NUM_COLUMNS - 1 ? '1px solid rgba(255, 255, 255, 0.03)' : 'none',
              transformOrigin: 'top',
            }}
          />
        ))}
      </div>

      {/* Bottom-Right Loader Content (Counter & Progress) */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              right: 'clamp(1.5rem, 5vw, 4rem)',
              bottom: 'clamp(1.5rem, 5vw, 3.5rem)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              color: '#ffffff',
              zIndex: 10,
              userSelect: 'none',
              textAlign: 'right',
            }}
          >
            {/* Percentage Number Counter */}
            <div
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontSize: 'clamp(4rem, 10vw, 7.5rem)',
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                background: 'linear-gradient(180deg, #ffffff 30%, rgba(255, 255, 255, 0.5) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '16px',
              }}
            >
              {count}%
            </div>

            {/* Minimalist Progress Line */}
            <div
              style={{
                width: 'clamp(140px, 15vw, 200px)',
                height: '2px',
                background: 'rgba(255, 255, 255, 0.12)',
                borderRadius: '4px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <motion.div
                style={{
                  height: '100%',
                  background: '#ffffff',
                  width: `${count}%`,
                  transition: 'width 0.05s linear',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CurtainLoader;
