import React, { createContext } from "react";
import { LucideIcon } from "lucide-react-native";
import { VariantProps, tv } from "tailwind-variants";
import {
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { Text } from "@/components/text";

const button = tv({
  slots: {
    container: "h-10 w-full items-center justify-center rounded-md text-center",
    text: "font-bold text-white text-bold",
  },
  variants: {
    variant: {
      primary: { container: "bg-primary", text: "text-white" },
      secondary: {
        container: "bg-transparent border border-primary",
        text: "text-primary",
      },
    },
    size: {
      sm: { container: "flex-1" },
      base: { container: "max-h-12 h-12" },
    },
    disabled: {
      true: { container: "opacity-50", text: "opacity-50" },
      false: { container: "opacity-100", text: "opacity-100" },
    },
  },

  defaultVariants: {
    size: "base",
    variant: "primary",
  },
});

type ButtonRootProps = VariantProps<typeof button> &
  TouchableOpacityProps & {
    isLoading?: boolean;
  };

type ContextProps = VariantProps<typeof button>;
const ButtonContext = createContext<ContextProps>({} as ContextProps);

const ButtonRoot = ({
  size,
  variant,
  children,
  disabled,
  className,
  ...rest
}: ButtonRootProps) => {
  const { container } = button({ disabled, size, variant });

  return (
    <ButtonContext.Provider value={{ disabled, size, variant }}>
      <TouchableOpacity className={container({ className })} {...rest}>
        {children}
      </TouchableOpacity>
    </ButtonContext.Provider>
  );
};

interface TextButtonProps extends TextProps {
  icon?: LucideIcon;
}

function TextButton({ children, className, ...rest }: TextButtonProps) {
  const { disabled, size, variant } = React.useContext(ButtonContext);

  const { text } = button({ disabled, size, variant });

  return (
    <Text className={text({ className })} {...rest}>
      {children}
    </Text>
  );
}

const Button = ButtonRoot;

ButtonRoot.Text = TextButton;

export { Button };
