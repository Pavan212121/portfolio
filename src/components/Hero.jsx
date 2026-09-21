import React from "react";
import { motion } from "framer-motion";
import { SylvaLivingWorldScene } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import { ArrowUpRight } from "lucide-react";
import { profileData } from "../data/profile";

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "#4a4d44",
      }}
    >
      <div id="about" style={{ position: "absolute", top: 0, left: 0 }} />
      {/* ThreeUI Procedural 3D Living World Canvas (Untouched) */}
      <div
        className="shader-frame"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          margin: 0,
          padding: 0,
          zIndex: 1,
        }}
      >
        <SylvaLivingWorldScene
          variant="living-green"
          style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
        />
      </div>

      {/* Hero Content Overlay matching attached reference */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          textAlign: "center",
          padding: "80px 48px 40px 48px",
          boxSizing: "border-box",
        }}
      >
        {/* Avatar with Floating Name Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "32px",
            pointerEvents: "auto",
          }}
        >
          {/* Circular Portrait Image */}
          <div
            style={{
              width: "92px",
              height: "92px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3.5px solid rgba(255, 255, 255, 0.9)",
              boxShadow: "0 12px 35px rgba(0, 0, 0, 0.35)",
              backgroundColor: "#2a2d27",
            }}
          >
            <img
              src="/avatar.jpg"
              alt="Designer Portrait"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Floating Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              position: "absolute",
              left: "calc(100% - 18px)",
              top: "16px",
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              color: "#18191b",
              padding: "6px 14px",
              borderRadius: "100px",
              fontSize: "0.86rem",
              fontWeight: 600,
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.18)",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span>Pavan Kumar</span>
            <span>👋</span>
          </motion.div>
        </motion.div>

        {/* Minimalist Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "clamp(2.3rem, 5.5vw, 4.4rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            maxWidth: "760px",
            margin: "0 auto 36px auto",
            textShadow: "0 4px 30px rgba(0, 0, 0, 0.45)",
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          Building digital products, brands, and experience.
        </motion.h1>

        {/* Latest Shots Pill Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ pointerEvents: "auto" }}
        >
          <a
            href="#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "13px 28px",
              borderRadius: "100px",
              backgroundColor: "rgba(20, 22, 26, 0.92)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "0.92rem",
              textDecoration: "none",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.backgroundColor = "#000000";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
              e.currentTarget.style.boxShadow = "0 14px 40px rgba(0, 0, 0, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.backgroundColor = "rgba(20, 22, 26, 0.92)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.14)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.35)";
            }}
          >
            <span>Latest Shots</span>
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
