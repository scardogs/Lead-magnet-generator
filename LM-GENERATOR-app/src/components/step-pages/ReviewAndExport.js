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

  const bgColor = "gray.50";
  const cardBg = "white";
  const textColor = "gray.800";
  const subTextColor = "gray.600";
  const borderColor = "gray.200";

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
      <VStack spacing={8} align="stretch" maxW="5xl" mx="auto">
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
                  Sigrun AI Launch Assistant
                </Heading>
                <HStack spacing={2}>
                  <Text fontSize="md" color={subTextColor}>
                    Step-by-step
                  </Text>
                  <Badge
                    colorScheme="pink"
                    variant="subtle"
                    borderRadius="full"
                  >
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
        >
          <CardHeader pb={4}>
            <Flex align="center" gap={3}>
              <Icon as={FaCheckCircle} color="green.400" boxSize={5} />
              <Heading size="md" color={textColor}>
                Export Options
              </Heading>
            </Flex>
          </CardHeader>
          <CardBody pt={0}>
            <VStack spacing={4} align="stretch">
              <Text fontSize="sm" color={subTextColor} mb={2}>
                Select the formats you&apos;d like to export your launch
                strategy in:
              </Text>
              <CheckboxGroup
                value={selectedExports}
                onChange={setSelectedExports}
              >
                <Stack spacing={3}>
                  {exportOptions.map((option) => (
                    <Checkbox
                      key={option}
                      value={option}
                      colorScheme="pink"
                      size="lg"
                    >
                      <Text fontSize="md" color={textColor}>
                        {option}
                      </Text>
                    </Checkbox>
                  ))}
                </Stack>
              </CheckboxGroup>
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
            <Flex justify="space-between" align="center">
              <HStack spacing={4}>
                <Button
                  colorScheme="gray"
                  variant="outline"
                  size="lg"
                  borderRadius="lg"
                  border="2px"
                >
                  Save Step
                </Button>
                <Button
                  colorScheme="green"
                  size="lg"
                  borderRadius="lg"
                  onClick={onComplete}
                  _hover={{
                    transform: "translateY(-1px)",
                    boxShadow: "lg",
                  }}
                  transition="all 0.2s"
                  leftIcon={<FaDownload />}
                >
                  Export All
                </Button>
              </HStack>
              <HStack spacing={2}>
                <Badge
                  colorScheme="green"
                  variant="subtle"
                  borderRadius="full"
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
