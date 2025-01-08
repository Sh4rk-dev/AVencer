import { cn } from "@/utils/cn";
import { Text as NativeText, TextProps } from "react-native";

export function Text({ className, ...rest }: TextProps) {
  return (
    <NativeText
      className={cn("font-normal text-white antialiased", className)}
      {...rest}
    />
  );
}
