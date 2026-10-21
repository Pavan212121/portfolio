import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/Hero Secction Image.png";

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "clamp(64px, 8.5vh, 88px)",
        paddingBottom: "clamp(12px, 2vh, 24px)",
        paddingLeft: "clamp(16px, 3vw, 32px)",
        paddingRight: "clamp(16px, 3vw, 32px)",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
      }}
    >
      <div id="about" style={{ position: "absolute", top: 0, left: 0 }} />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: "100%",
          maxWidth: "1350px",
          height: "100%",
          flex: "1 1 0%",
          minHeight: 0,
          minWidth: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src={heroImage}
          alt="Pavan Kumar - UI/UX & Product Designer"
          fetchPriority="high"
          decoding="async"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            aspectRatio: "1536 / 1024",
            objectFit: "contain",
            display: "block",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      </motion.div>
    </section>
  );
}

export default Hero;
