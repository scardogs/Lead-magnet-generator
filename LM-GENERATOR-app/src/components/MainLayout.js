import React, { useState } from "react";
import { Box, Flex, Button, HStack, Text } from "@chakra-ui/react";
import HomePageTab from "./home-page-sidebar";
import DefineIdealClient from "./step-pages/DefineIdealClient";
import CreateYourOffer from "./step-pages/CreateYourOffer";
import WriteSalesPageCopy from "./step-pages/WriteSalesPageCopy";
import WriteEmailSequence from "./step-pages/WriteEmailSequence";
import WriteSocialMediaCopy from "./step-pages/WriteSocialMediaCopy";
import DecideAdBudget from "./step-pages/DecideAdBudget";
import PlanClosingSequence from "./step-pages/PlanClosingSequence";
import ReviewAndExport from "./step-pages/ReviewAndExport";

const stepComponents = [
  DefineIdealClient,
  CreateYourOffer,
  WriteSalesPageCopy,
  WriteEmailSequence,
  WriteSocialMediaCopy,
  DecideAdBudget,
  PlanClosingSequence,
  ReviewAndExport,
];

export default function MainLayout() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(0);

  const handleStepChange = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const handleStepComplete = (stepIndex) => {
    if (stepIndex >= completedSteps) {
      setCompletedSteps(stepIndex + 1);
    }
  };

  const handleResetWizard = () => {
    setCurrentStep(0);
    setCompletedSteps(0);
  };

  const CurrentStepComponent = stepComponents[currentStep];

  return (
    <Flex h="100vh" overflow="hidden" direction={{ base: "column", md: "row" }}>
      <HomePageTab
        currentStep={currentStep}
        completedSteps={completedSteps}
        onStepChange={handleStepChange}
        onStepComplete={handleStepComplete}
      />
      <Box flex="1" overflow="auto" position="relative">
        <Box position="absolute" top={4} right={4} zIndex={10}>
          <Button
            size={{ base: "xs", md: "sm" }}
            variant="outline"
            colorScheme="gray"
            onClick={handleResetWizard}
          >
            Reset wizard
          </Button>
        </Box>
        <CurrentStepComponent
          onComplete={() => handleStepComplete(currentStep)}
        />
      </Box>
    </Flex>
  );
}
