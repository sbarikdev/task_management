import { useToast } from "@chakra-ui/react";

export default function useErrorToast() {
  const toast = useToast();

  return (message) => {
    toast({
      title: "Error",
      description: message || "Something went wrong",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };
}
