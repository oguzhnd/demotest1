import { useDisclosure } from "@mantine/hooks";

export const useLoading = (initialValue = false): [boolean, () => void, () => void] => {
  const [loading, { open: startLoading, close: stopLoading }] = useDisclosure(initialValue);

  return [loading, startLoading, stopLoading];
}