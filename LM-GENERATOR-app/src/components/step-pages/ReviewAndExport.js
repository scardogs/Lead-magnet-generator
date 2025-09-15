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
  Checkbox,
  CheckboxGroup,
  Stack,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Badge,
  Icon,
  Flex,
} from "@chakra-ui/react";
import {
  FaDownload,
  FaQuestionCircle,
  FaEdit,
  FaCheckCircle,
} from "react-icons/fa";

export default function ReviewAndExport({ onComplete }) {
  const [draft, setDraft] = useState("");
  const [aiQuestion, setAiQuestion] = useState("");
  const [selectedExports, setSelectedExports] = useState([]);
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

  const exportOptions = [
    "PDF Document",
    "Word Document",
    "Google Docs",
    "Notion Template",
    "Email Templates",
    "Social Media Posts",
  ];

  return (
    <Box p={8} bg={bgColor} minH="100vh">
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
              <Icon as={FaDownload} color="pink.400" boxSize={6} />
              <Box>
                <Heading size="xl" color={textColor} mb={1}>
                  VIP Scale AI Launch Assistant
                </Heading>
                <HStack spacing={2}>
                  <Text fontSize="md" color={subTextColor}>
                    Step-by-step
                  </Text>
                  <Badge colorScheme="pink" variant="subtle" borderRadius="lg">
                    Step 8 of 8
                  </Badge>
                </HStack>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody pt={0}>
            <Heading size="lg" color={textColor} mb={2}>
              Review & Export
            </Heading>
            <Text color={subTextColor} fontSize="md">
              Review all your work, make final adjustments, and export your
              complete launch strategy. You&apos;re ready to launch your
              campaign!
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
                placeholder="Ask AI anything about reviewing and exporting..."
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
                💡 Get AI assistance with final review, export formatting, and
                launch preparation
              </FormHelperText>
            </FormControl>
          </CardBody>
        </Card>

        {/* Export Options Section */}
        <Card
          bg={cardBg}
          shadow="md"
          borderRadius="xl"
          border="1px"
          borderColor={borderColor}
          _hover={{
            shadow: "lg",
            transform: "translateY(-2px)",
            transition: "all 0.3s ease",
          }}
        >
          <CardHeader pb={4}>
            <Flex align="center" gap={3}>
              <Icon as={FaCheckCircle} color="green.400" boxSize={5} />
              <Heading size="md" color={textColor}>
                Export Options
              </Heading>
              <Badge
                colorScheme="green"
                variant="subtle"
                borderRadius="lg"
                px={2}
                py={1}
                fontSize="xs"
              >
                {selectedExports.length} selected
              </Badge>
            </Flex>
          </CardHeader>
          <CardBody pt={0}>
            <VStack spacing={6} align="stretch">
              <Text fontSize="sm" color={subTextColor} mb={2}>
                Select the formats you&apos;d like to export your launch
                strategy in:
              </Text>

              {/* Select All/None Buttons */}
              <HStack spacing={3} justify="left">
                <Button
                  size="sm"
                  variant="outline"
                  colorScheme="pink"
                  onClick={() => setSelectedExports(exportOptions)}
                  isDisabled={selectedExports.length === exportOptions.length}
                  borderRadius="lg"
                >
                  Select All
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  colorScheme="gray"
                  onClick={() => setSelectedExports([])}
                  isDisabled={selectedExports.length === 0}
                  borderRadius="lg"
                >
                  Clear All
                </Button>
              </HStack>

              <CheckboxGroup
                value={selectedExports}
                onChange={setSelectedExports}
              >
                <Box
                  display="grid"
                  gridTemplateColumns={{
                    base: "1fr",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                  }}
                  gap={4}
                >
                  {exportOptions.map((option) => (
                    <Card
                      key={option}
                      bg={
                        selectedExports.includes(option) ? "pink.50" : "gray.50"
                      }
                      border="2px"
                      borderColor={
                        selectedExports.includes(option)
                          ? "pink.300"
                          : "gray.200"
                      }
                      borderRadius="lg"
                      p={4}
                      cursor="pointer"
                      transition="all 0.2s ease"
                      _hover={{
                        borderColor: selectedExports.includes(option)
                          ? "pink.400"
                          : "pink.200",
                        transform: "translateY(-1px)",
                        shadow: "md",
                      }}
                      onClick={() => {
                        if (selectedExports.includes(option)) {
                          setSelectedExports(
                            selectedExports.filter((item) => item !== option)
                          );
                        } else {
                          setSelectedExports([...selectedExports, option]);
                        }
                      }}
                    >
                      <HStack spacing={3} align="center">
                        <Checkbox
                          value={option}
                          colorScheme="pink"
                          size="lg"
                          isChecked={selectedExports.includes(option)}
                          onChange={() => {}} // Handled by card click
                          sx={{
                            "& .chakra-checkbox__control": {
                              borderColor: selectedExports.includes(option)
                                ? "pink.400"
                                : "gray.400",
                              bg: selectedExports.includes(option)
                                ? "pink.400"
                                : "white",
                              _checked: {
                                bg: "pink.400",
                                borderColor: "pink.400",
                                color: "white",
                              },
                              _hover: {
                                borderColor: "pink.400",
                                bg: selectedExports.includes(option)
                                  ? "pink.500"
                                  : "pink.50",
                              },
                            },
                          }}
                        />
                        <VStack align="start" spacing={1} flex={1}>
                          <Text
                            fontSize="md"
                            color={
                              selectedExports.includes(option)
                                ? "pink.700"
                                : textColor
                            }
                            fontWeight={
                              selectedExports.includes(option)
                                ? "semibold"
                                : "medium"
                            }
                          >
                            {option}
                          </Text>
                          <Text fontSize="xs" color={subTextColor}>
                            {option === "PDF Document" &&
                              "Professional document format"}
                            {option === "Word Document" &&
                              "Editable Microsoft Word format"}
                            {option === "Google Docs" &&
                              "Collaborative Google Docs format"}
                            {option === "Notion Template" &&
                              "Structured Notion database template"}
                            {option === "Email Templates" &&
                              "Ready-to-send email templates"}
                            {option === "Social Media Posts" &&
                              "Platform-optimized social posts"}
                          </Text>
                        </VStack>
                      </HStack>
                    </Card>
                  ))}
                </Box>
              </CheckboxGroup>

              {/* Export Preview */}
              {selectedExports.length > 0 && (
                <Box
                  bg="green.50"
                  border="1px"
                  borderColor="green.200"
                  borderRadius="lg"
                  p={4}
                >
                  <HStack spacing={2} mb={2}>
                    <Icon as={FaCheckCircle} color="green.500" boxSize={4} />
                    <Text fontSize="sm" color="green.700" fontWeight="semibold">
                      Ready to Export
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="green.600">
                    Your launch strategy will be exported in:{" "}
                    {selectedExports.join(", ")}
                  </Text>
                </Box>
              )}
            </VStack>
          </CardBody>
        </Card>

        {/* Final Review Section */}
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
                Final Review
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
                  Final Checklist:
                </Text>
                <VStack
                  spacing={1}
                  align="stretch"
                  fontSize="sm"
                  color={subTextColor}
                >
                  <Text>• Review all previous steps for completeness</Text>
                  <Text>• Make final adjustments and improvements</Text>
                  <Text>• Add any last-minute notes or considerations</Text>
                  <Text>• Ensure all content is ready for launch</Text>
                  <Text>• Double-check contact information and links</Text>
                </VStack>
              </Box>
              <Divider />
              <Textarea
                placeholder="Add your final review notes, adjustments, and launch preparation checklist here..."
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
                  leftIcon={<FaDownload />}
                  w={{ base: "full", md: "auto" }}
                >
                  Export All
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
                  ✓ All steps completed
                </Badge>
              </HStack>
            </Flex>
          </CardBody>
        </Card>
      </VStack>
    </Box>
  );
}
