import React from "react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const inactiveColor = useColorModeValue("gray.600", "gray.300");
  const navBg = "white";
  const navBorder = "black";
  const navShadow = useColorModeValue(
    "0 2px 16px rgba(0,0,0,0.08)",
    "0 2px 16px rgba(0,0,0,0.32)"
  );

  return (
    <Box
      as="nav"
      w="100%"
      px={{ base: 4, md: 8 }}
      py={{ base: 3, md: 2 }}
      bg={navBg}
      borderBottomWidth="1px"
      borderColor={navBorder}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={10}
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: navShadow,
      }}
      transition="all 0.3s ease"
      _hover={{
        boxShadow: "md",
        borderColor: "pink.200",
      }}
    >
      <Flex align="center">
        {/* Logo/Title */}
        <HStack spacing={2}>
          <Box
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            letterSpacing="tight"
            cursor="pointer"
            onClick={() => router.push("/")}
            transition="all 0.2s ease"
            _hover={{
              opacity: 0.8,
              transform: "scale(1.05)",
              textShadow: "0 0 8px rgba(236, 72, 153, 0.3)",
            }}
            _active={{
              transform: "scale(0.95)",
            }}
          >
            <Text as="span" color="pink.400">
              lead magnet
            </Text>
            <Text as="span" color={inactiveColor} ml={2}>
              generator
            </Text>
          </Box>
        </HStack>
        <Spacer />
      </Flex>
    </Box>
  );
}
