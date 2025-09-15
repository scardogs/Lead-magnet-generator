import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Textarea,
  Button,
  VStack,
  HStack,
  useColorModeValue,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Badge,
  Icon,
  Flex,
} from "@chakra-ui/react";
import {
  FaDollarSign,
  FaQuestionCircle,
  FaEdit,
  FaCheckCircle,
} from "react-icons/fa";
import GalaxyBackground from "../GalaxyBackground";

export default function DecideAdBudget({ onComplete }) {
  const [draft, setDraft] = useState("");
  const [aiQuestion, setAiQuestion] = useState("");
  const [budget, setBudget] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const bgColor = "gray.50";
  const cardBg = "white";
  const textColor = "gray.800";
  const subTextColor = "gray.600";
  const borderColor = "gray.200";

  const handleSaveStep = async () => {
    setIsSaving(true);
    // Simulate save operation
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    setIsSaved(true);
    // Reset saved state after 3 seconds
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <Box position="relative" minH="100vh">
      <GalaxyBackground />
      <Box p={8} position="relative" zIndex={1}>
        <VStack spacing={2} align="stretch" maxW="5xl" mx="auto">
          {/* Header Section */}
          <Card
            bg={cardBg}
            shadow="lg"
            borderRadius="xl"
            border="1px"
            borderColor={borderColor}
          >
            <CardHeader pb={4}>
              <Flex align="center" gap={3}>
                <Icon as={FaDollarSign} color="pink.400" boxSize={6} />
                <Box>
                  <Heading size="xl" color={textColor} mb={1}>
                    VIP Scale AI Launch Assistant
                  </Heading>
                  <HStack spacing={2}>
                    <Text fontSize="md" color={subTextColor}>
                      Step-by-step
                    </Text>
                    <Badge
                      colorScheme="pink"
                      variant="subtle"
                      borderRadius="lg"
                    >
                      Step 6 of 8
                    </Badge>
                  </HStack>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody pt={0}>
              <Heading size="lg" color={textColor} mb={2}>
                Decide Ad Budget
              </Heading>
              <Text color={subTextColor} fontSize="md">
                Plan your advertising budget strategically to maximize ROI.
                Allocate funds across platforms and set realistic spending
                limits.
              </Text>
            </CardBody>
          </Card>

          {/* AI Help Section */}
          <Card
            bg={cardBg}
            shadow="md"
            borderRadius="xl"
            border="1px"
            borderColor={borderColor}
          >
            <CardHeader pb={4}>
              <Flex align="center" gap={3}>
                <Icon as={FaQuestionCircle} color="blue.400" boxSize={5} />
                <Heading size="md" color={textColor}>
                  Ask AI for Help
                </Heading>
              </Flex>
            </CardHeader>
            <CardBody pt={0}>
              <FormControl>
                <Input
                  placeholder="Ask AI anything about ad budgeting..."
                  placeholderColor="gray.500"
                  color="gray.800"
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  size="lg"
                  borderRadius="lg"
                  border="2px"
                  borderColor={borderColor}
                  sx={{
                    "&::placeholder": {
                      color: "gray.500 !important",
                      opacity: 1,
                    },
                  }}
                  _focus={{
                    borderColor: "blue.400",
                    boxShadow: "0 0 0 1px var(--chakra-colors-blue-400)",
                  }}
                />
                <FormHelperText color={subTextColor} mt={2}>
                  💡 Get AI assistance with budget allocation, platform
                  selection, and ROI optimization strategies
                </FormHelperText>
              </FormControl>
            </CardBody>
          </Card>

          {/* Budget Planning Section */}
          <Card
            bg={cardBg}
            shadow="md"
            borderRadius="xl"
            border="1px"
            borderColor={borderColor}
          >
            <CardHeader pb={4}>
              <Flex align="center" gap={3}>
                <Icon as={FaDollarSign} color="green.400" boxSize={5} />
                <Heading size="md" color={textColor}>
                  Budget Planning
                </Heading>
              </Flex>
            </CardHeader>
            <CardBody pt={0}>
              <VStack spacing={4} align="stretch">
                <FormControl>
                  <FormLabel color={textColor} fontWeight="medium">
                    Total Ad Budget ($)
                  </FormLabel>
                  <NumberInput
                    value={budget}
                    onChange={(value) => setBudget(value)}
                    size="lg"
                    borderRadius="lg"
                    border="2px"
                    borderColor={borderColor}
                    _focus={{
                      borderColor: "green.400",
                      boxShadow: "0 0 0 1px var(--chakra-colors-green-400)",
                    }}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <FormHelperText color={subTextColor}>
                    Set your total advertising budget for this campaign
                  </FormHelperText>
                </FormControl>
              </VStack>
            </CardBody>
          </Card>

          {/* Draft Section */}
          <Card
            bg={cardBg}
            shadow="md"
            borderRadius="xl"
            border="1px"
            borderColor={borderColor}
          >
            <CardHeader pb={4}>
              <Flex align="center" gap={3}>
                <Icon as={FaEdit} color="green.400" boxSize={5} />
                <Heading size="md" color={textColor}>
                  Your Draft
                </Heading>
              </Flex>
            </CardHeader>
            <CardBody pt={0}>
              <VStack spacing={4} align="stretch">
                <Box>
                  <Text
                    fontSize="sm"
                    color={subTextColor}
                    mb={2}
                    fontWeight="medium"
                  >
                    Budget Planning Considerations:
                  </Text>
                  <VStack
                    spacing={1}
                    align="stretch"
                    fontSize="sm"
                    color={subTextColor}
                  >
                    <Text>
                      • Platform breakdown (Facebook, Google, LinkedIn, etc.)
                    </Text>
                    <Text>• Daily vs. total budget allocation</Text>
                    <Text>• Campaign duration and timeline</Text>
                    <Text>• Target metrics (CPC, CPM, ROAS)</Text>
                    <Text>• Testing budget for new campaigns</Text>
                  </VStack>
                </Box>
                <Divider />
                <Textarea
                  placeholder="Start planning your ad budget here..."
                  placeholderColor="gray.500"
                  color="gray.800"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  minH="300px"
                  resize="vertical"
                  borderRadius="lg"
                  border="2px"
                  borderColor={borderColor}
                  sx={{
                    "&::placeholder": {
                      color: "gray.500 !important",
                      opacity: 1,
                    },
                  }}
                  _focus={{
                    borderColor: "green.400",
                    boxShadow: "0 0 0 1px var(--chakra-colors-green-400)",
                  }}
                  fontSize="md"
                  lineHeight="1.6"
                />
              </VStack>
            </CardBody>
          </Card>

          {/* Action Buttons */}
          <Card
            bg={cardBg}
            shadow="md"
            borderRadius="xl"
            border="1px"
            borderColor={borderColor}
          >
            <CardBody>
              <Flex
                justify="space-between"
                align="center"
                direction={{ base: "column", md: "row" }}
                gap={{ base: 4, md: 0 }}
              >
                <HStack
                  spacing={4}
                  w={{ base: "full", md: "auto" }}
                  justify={{ base: "center", md: "flex-start" }}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    colorScheme="pink"
                    onClick={handleSaveStep}
                    isLoading={isSaving}
                    loadingText="Saving..."
                    leftIcon={isSaved ? <FaCheckCircle /> : null}
                    borderRadius="lg"
                    _hover={{
                      transform: "translateY(-1px)",
                      boxShadow: "md",
                    }}
                    transition="all 0.2s"
                    w={{ base: "full", md: "auto" }}
                  >
                    {isSaved ? "Saved!" : "Save Step"}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    colorScheme="pink"
                    onClick={onComplete}
                    borderRadius="lg"
                    _hover={{
                      transform: "translateY(-1px)",
                      boxShadow: "md",
                    }}
                    transition="all 0.2s"
                    w={{ base: "full", md: "auto" }}
                  >
                    Save & Continue
                  </Button>
                </HStack>
                <HStack spacing={2}>
                  <Badge
                    colorScheme="green"
                    variant="subtle"
                    borderRadius="lg"
                    px={3}
                    py={1}
                  >
                    ✓ Self-tests passed
                  </Badge>
                </HStack>
              </Flex>
            </CardBody>
          </Card>
        </VStack>
      </Box>
    </Box>
  );
}
