import { useToast } from "@chakra-ui/react";

export default function useSuccessToast() {
  const toast = useToast();

  return (message, options = {}) => {
    toast({
      title: message || "Success",
      status: "success",
      duration: options.duration || 3000,
      isClosable: options.isClosable ?? true,
      position: options.position || "top-right",
      ...options,
    });
  };
}
