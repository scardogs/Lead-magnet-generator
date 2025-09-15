import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Progress,
  IconButton,
  Tooltip,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Badge,
  Icon,
  Flex,
  HStack,
} from "@chakra-ui/react";
import {
  ViewIcon,
  ViewOffIcon,
  QuestionIcon,
  WarningIcon,
  CheckIcon,
} from "@chakra-ui/icons";
import { FaCog, FaChartLine, FaList } from "react-icons/fa";
import { useRouter } from "next/router";

const steps = [
  "Define Ideal Client",
  "Create Your Offer",
  "Write Sales Page Copy",
  "Write Email Sequence",
  "Write Social Media Copy",
  "Decide Ad Budget",
  "Plan Closing Sequence",
  "Review & Export",
];

export default function HomePageTab({
  currentStep = 0,
  completedSteps = 0,
  onStepChange = () => {},
  onStepComplete = () => {},
}) {
  const [showApiKey, setShowApiKey] = useState(false);
  const [apiKey, setApiKey] = useState("sk-...");
  const [selectedModel, setSelectedModel] = useState("gpt-4o-mini");

  const sidebarBg = "gray.50";
  const cardBg = "white";
  const textColor = "gray.800";
  const subTextColor = "gray.600";
  const borderColor = "gray.200";
  const shadowColor = "gray.200";
  const router = useRouter();

  return (
    <Box
      w={{ base: "100%", md: "320px" }}
      h={{ base: "auto", md: "100vh" }}
      bg={sidebarBg}
      borderRight={{ base: "none", md: "1px solid" }}
      borderBottom={{ base: "1px solid", md: "none" }}
      borderColor="gray.400"
      sx={{
        borderRightColor: "gray.300 !important",
        borderBottomColor: "gray.400 !important",
      }}
      p={{ base: 4, md: 6 }}
      overflowY="hidden"
      boxShadow={{ base: "sm", md: "2xl" }}
      position={{ base: "relative", md: "relative" }}
      transition="all 0.3s ease"
      _hover={{
        boxShadow: { base: "md", md: "3xl" },
        borderColor: "gray.300",
      }}
    >
      <VStack
        spacing={{ base: 3, md: 4 }}
        align="stretch"
        h={{ base: "auto", md: "full" }}
        justify={{ base: "flex-start", md: "space-between" }}
      >
        <VStack spacing={{ base: 3, md: 4 }} align="stretch">
          {/* Setup Section */}
          <Card
            bg={cardBg}
            shadow="md"
            borderRadius="xl"
            border="1px"
            borderColor={borderColor}
            transition="all 0.2s ease"
            _hover={{
              shadow: "lg",
              transform: "translateY(-2px)",
              borderColor: "pink.200",
            }}
          >
            <CardHeader pb={3}>
              <Flex align="center" gap={3}>
                <Icon as={FaCog} color="pink.400" boxSize={5} />
                <Heading size="sm" color={textColor} fontWeight="bold">
                  Setup
                </Heading>
              </Flex>
            </CardHeader>
            <CardBody pt={0}>
              <Text fontSize="xs" color={subTextColor} mb={4} lineHeight="1.4">
                Provide an API key to enable live Ask AI calls (optional).
              </Text>

              <VStack spacing={3} align="stretch">
                <Box>
                  <Text
                    fontSize="xs"
                    color={textColor}
                    mb={2}
                    fontWeight="medium"
                  >
                    OpenAI API Key
                  </Text>
                  <InputGroup size="sm">
                    <Input
                      type={showApiKey ? "text" : "password"}
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="sk-..."
                      placeholderColor="gray.500"
                      color="gray.800"
                      fontSize="xs"
                      borderRadius="lg"
                      border="1px"
                      borderColor={borderColor}
                      _focus={{
                        borderColor: "pink.400",
                        boxShadow: "0 0 0 1px var(--chakra-colors-pink-400)",
                      }}
                    />
                    <InputRightElement>
                      <HStack spacing={1}>
                        <IconButton
                          size="xs"
                          variant="ghost"
                          icon={<WarningIcon color="red.400" />}
                          aria-label="Error indicator"
                          color="red.400"
                          _hover={{
                            bg: "red.50",
                            transform: "scale(1.1)",
                          }}
                          transition="all 0.2s ease"
                        />
                        <IconButton
                          size="xs"
                          variant="ghost"
                          icon={
                            showApiKey ? (
                              <ViewOffIcon color="gray.600" />
                            ) : (
                              <ViewIcon color="gray.600" />
                            )
                          }
                          onClick={() => setShowApiKey(!showApiKey)}
                          aria-label="Toggle visibility"
                          color="gray.600"
                          _hover={{
                            bg: "pink.50",
                            transform: "scale(1.1)",
                          }}
                          transition="all 0.2s ease"
                        />
                        <Tooltip label="Help">
                          <IconButton
                            size="xs"
                            variant="ghost"
                            icon={<QuestionIcon color="blue.500" />}
                            aria-label="Help"
                            color="blue.500"
                            _hover={{
                              bg: "blue.50",
                              transform: "scale(1.1)",
                            }}
                            transition="all 0.2s ease"
                          />
                        </Tooltip>
                      </HStack>
                    </InputRightElement>
                  </InputGroup>
                </Box>

                <Box>
                  <Text
                    fontSize="xs"
                    color={textColor}
                    mb={2}
                    fontWeight="medium"
                  >
                    Model
                  </Text>
                  <InputGroup size="sm">
                    <Input
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      placeholder="Select model..."
                      placeholderColor="gray.500"
                      color="gray.800"
                      fontSize="xs"
                      borderRadius="lg"
                      border="1px"
                      borderColor={borderColor}
                      _focus={{
                        borderColor: "pink.400",
                        boxShadow: "0 0 0 1px var(--chakra-colors-pink-400)",
                      }}
                    />
                    <InputRightElement>
                      <Tooltip label="Help">
                        <IconButton
                          size="xs"
                          variant="ghost"
                          icon={<QuestionIcon color="blue.500" />}
                          aria-label="Help"
                          color="blue.500"
                          _hover={{
                            bg: "blue.50",
                            transform: "scale(1.1)",
                          }}
                          transition="all 0.2s ease"
                        />
                      </Tooltip>
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </VStack>
            </CardBody>
          </Card>

          {/* Progress Section */}
          <Card
            bg={cardBg}
            shadow="md"
            borderRadius="xl"
            border="1px"
            borderColor={borderColor}
            transition="all 0.2s ease"
            _hover={{
              shadow: "lg",
              transform: "translateY(-2px)",
              borderColor: "blue.200",
            }}
          >
            <CardHeader pb={3}>
              <Flex align="center" gap={3}>
                <Icon as={FaChartLine} color="blue.400" boxSize={5} />
                <Heading size="sm" color={textColor} fontWeight="bold">
                  Progress
                </Heading>
              </Flex>
            </CardHeader>
            <CardBody pt={0}>
              <VStack spacing={3} align="stretch">
                <Box>
                  <Progress
                    value={(completedSteps / steps.length) * 100}
                    size="sm"
                    colorScheme="pink"
                    borderRadius="full"
                    bg="gray.100"
                    transition="all 0.5s ease"
                    _hover={{
                      transform: "scale(1.02)",
                    }}
                  />
                </Box>
                <Flex justify="space-between" align="center">
                  <Text fontSize="xs" color={subTextColor}>
                    {completedSteps} / {steps.length} steps completed
                  </Text>
                  <Badge
                    colorScheme="pink"
                    variant="subtle"
                    borderRadius="full"
                    px={2}
                    py={1}
                    fontSize="xs"
                    transition="all 0.2s ease"
                    _hover={{
                      transform: "scale(1.1)",
                      shadow: "md",
                    }}
                  >
                    {Math.round((completedSteps / steps.length) * 100)}%
                  </Badge>
                </Flex>
              </VStack>
            </CardBody>
          </Card>
        </VStack>

        {/* Steps Section */}
        <Card
          bg={cardBg}
          shadow="md"
          borderRadius="xl"
          border="1px"
          borderColor={borderColor}
          flex={{ base: "none", md: "1" }}
          display="flex"
          flexDirection="column"
          minH={{ base: "auto", md: "0" }}
          maxH={{ base: "300px", md: "none" }}
          transition="all 0.2s ease"
          _hover={{
            shadow: "lg",
            borderColor: "green.200",
          }}
        >
          <CardHeader pb={3}>
            <Flex align="center" gap={3}>
              <Icon as={FaList} color="green.400" boxSize={5} />
              <Heading size="sm" color={textColor} fontWeight="bold">
                Steps
              </Heading>
            </Flex>
          </CardHeader>
          <CardBody
            pt={0}
            flex="1"
            display="flex"
            flexDirection="column"
            minH="0"
          >
            <VStack spacing={1} align="stretch" flex="1" overflowY="auto">
              {steps.map((step, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant={index === currentStep ? "solid" : "ghost"}
                  colorScheme={index === currentStep ? "pink" : "gray"}
                  color={index === currentStep ? "white" : "gray.700"}
                  bg={index === currentStep ? "pink.500" : "transparent"}
                  justifyContent="flex-start"
                  fontWeight="normal"
                  fontSize="xs"
                  h="auto"
                  py={3}
                  px={4}
                  borderRadius="lg"
                  onClick={() => onStepChange(index)}
                  _hover={{
                    bg: index === currentStep ? "pink.500" : "gray.50",
                    color: index === currentStep ? "white" : "gray.800",
                    transform: "translateX(4px) scale(1.02)",
                    shadow: "md",
                  }}
                  _active={{
                    transform: "translateX(2px) scale(0.98)",
                  }}
                  transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                  position="relative"
                  leftIcon={
                    index < completedSteps ? (
                      <Icon as={CheckIcon} color="green.500" boxSize={3} />
                    ) : (
                      <Box
                        w={3}
                        h={3}
                        borderRadius="full"
                        bg={index === currentStep ? "white" : "gray.300"}
                        border="1px"
                        borderColor={
                          index === currentStep ? "pink.500" : "gray.400"
                        }
                      />
                    )
                  }
                >
                  <Box textAlign="left" flex="1">
                    <Text fontSize="xs" fontWeight="medium">
                      {step}
                    </Text>
                    {index < completedSteps && (
                      <Text fontSize="xs" color="green.500" mt={1}>
                        Completed
                      </Text>
                    )}
                  </Box>
                </Button>
              ))}
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Box>
  );
}
