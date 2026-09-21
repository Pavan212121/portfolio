import React from 'react';
import { motion } from 'framer-motion';

export const LandscapeBanner = () => {
  return (
    <section
      id="landscape-showcase"
      style={{
        width: '100%',
        position: 'relative',
        backgroundColor: '#1c201a',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        lineHeight: 0,
        borderRadius: 0,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          position: 'relative',
          lineHeight: 0,
          borderRadius: 0,
        }}
      >
        <img
          src="/figma-landscape.png"
          alt="Crafting digital experiences that connect"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '85vh',
            objectFit: 'cover',
            display: 'block',
            borderRadius: 0,
          }}
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default LandscapeBanner;
