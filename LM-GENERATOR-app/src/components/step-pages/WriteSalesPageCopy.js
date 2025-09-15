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
  Card,
  CardBody,
  CardHeader,
  Divider,
  Badge,
  Icon,
  Flex,
} from "@chakra-ui/react";
import {
  FaFileAlt,
  FaQuestionCircle,
  FaEdit,
  FaCheckCircle,
} from "react-icons/fa";
import GalaxyBackground from "../GalaxyBackground";

export default function WriteSalesPageCopy({ onComplete }) {
  const [draft, setDraft] = useState("");
  const [aiQuestion, setAiQuestion] = useState("");
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
                <Icon as={FaFileAlt} color="pink.400" boxSize={6} />
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
                      Step 3 of 8
                    </Badge>
                  </HStack>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody pt={0}>
              <Heading size="lg" color={textColor} mb={2}>
                Write Sales Page Copy
              </Heading>
              <Text color={subTextColor} fontSize="md">
                Create compelling sales copy that converts visitors into
                customers. Write persuasive headlines, benefits, and
                calls-to-action that drive sales.
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
                  placeholder="Ask AI anything about writing sales page copy..."
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
                  💡 Get AI assistance with headlines, benefit statements,
                  social proof, and persuasive copywriting techniques
                </FormHelperText>
              </FormControl>
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
                    Essential Sales Page Elements:
                  </Text>
                  <VStack
                    spacing={1}
                    align="stretch"
                    fontSize="sm"
                    color={subTextColor}
                  >
                    <Text>• Headline & Subheadline (Attention-grabbing)</Text>
                    <Text>
                      • Benefits & Features (What&apos;s in it for them)
                    </Text>
                    <Text>
                      • Social Proof (Testimonials, reviews, case studies)
                    </Text>
                    <Text>• Objection Handling (Address concerns)</Text>
                    <Text>• Call-to-Action (Clear next steps)</Text>
                  </VStack>
                </Box>
                <Divider />
                <Textarea
                  placeholder="Start writing your sales page copy here..."
                  placeholderColor="gray.500"
                  color="gray.800"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  minH="350px"
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
