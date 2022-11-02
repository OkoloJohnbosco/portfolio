import { HStack, Stack, Input as CustomInput } from "@chakra-ui/react";

interface InputProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export function Input({
  value,
  children,
  set,
  min = -200,
  max = 200,
  step,
}: InputProps) {
  return (
    <Stack bg="transparent" py={6}>
      <HStack as="label" alignItems="center" px={4}>
        <code>{children}</code>
        <input
          value={value}
          type="range"
          min={min}
          max={max}
          style={{ width: "400px", backgroundColor: "red" }}
          onChange={(e) => set(parseFloat(e.target.value))}
          step={step}
        />
        <CustomInput
          w="max-content"
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) => set(parseFloat(e.target.value) || 0)}
        />
      </HStack>
    </Stack>
  );
}
