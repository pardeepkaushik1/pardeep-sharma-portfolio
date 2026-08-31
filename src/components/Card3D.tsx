import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  glowColor = 'rgba(6, 182, 212, 0.18)'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    setMousePos({ x: percentX, y: percentY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        y: isHovered ? -6 : 0
      }}
      transition={{
        type: 'spring',
        stiffness: 350,
        damping: 25
      }}
      style={{
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        textRendering: 'optimizeLegibility'
      }}
      className={`relative rounded-2xl transition-all duration-300 ${
        isHovered
          ? 'shadow-xl shadow-cyan-500/10'
          : 'shadow-none'
      } ${className}`}
    >
      {/* Subtle Dynamic Ambient Glow behind the card */}
      {isHovered && (
        <div
          className="absolute -inset-0.5 pointer-events-none rounded-2xl transition-opacity duration-300 -z-10 opacity-75"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${glowColor} 0%, transparent 65%)`
          }}
        />
      )}
      <div className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

