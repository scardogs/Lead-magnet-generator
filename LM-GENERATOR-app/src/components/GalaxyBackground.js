import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const GalaxyBackground = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      zIndex={-1}
      overflow="hidden"
    >
      {/* Main Galaxy Background */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        width="200%"
        height="200%"
        transform="translate(-50%, -50%)"
        background="radial-gradient(ellipse at center, rgba(236, 72, 153, 0.1) 0%, rgba(147, 51, 234, 0.05) 25%, rgba(59, 7, 100, 0.1) 50%, rgba(0, 0, 0, 0.8) 100%)"
        borderRadius="50%"
      />

      {/* Animated Stars */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            background: `hsl(${Math.random() * 60 + 300}, 70%, ${
              Math.random() * 30 + 70
            }%)`,
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Floating Particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          style={{
            position: "absolute",
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: `rgba(236, 72, 153, ${Math.random() * 0.5 + 0.2})`,
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Pink Nebula Clouds */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`nebula-${i}`}
          style={{
            position: "absolute",
            width: Math.random() * 300 + 200,
            height: Math.random() * 200 + 100,
            background: `radial-gradient(ellipse, rgba(236, 72, 153, ${
              Math.random() * 0.1 + 0.05
            }) 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            borderRadius: "50%",
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            delay: Math.random() * 10,
          }}
        />
      ))}

      {/* Shooting Stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          style={{
            position: "absolute",
            width: 2,
            height: 2,
            background: "rgba(236, 72, 153, 0.8)",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 10px rgba(236, 72, 153, 0.8)",
          }}
          animate={{
            x: [0, 500],
            y: [0, 500],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 10,
          }}
        />
      ))}

      {/* Pink Gradient Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        background="linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(0, 0, 0, 0.3) 100%)"
      />
    </Box>
  );
};

export default GalaxyBackground;
