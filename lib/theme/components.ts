import { theme } from '@chakra-ui/react';

const components = {
  Button: {
    // 1. We can update the base styles
    baseStyle: {
      fontWeight: 'semi-bold', // Normally, it is "semibold"
      letterSpacing: 0.7,
      fontFamily: 'Satoshi-Regular',
    },
    // 2. We can add a new button size or extend existing

    // 3. We can add a new visual variant
    // you can also use the variants responsively
    // <Button variant={{ base: 'base', md: 'md' }}>Object syntax</Button>
    // the button will be orange after the `sm` breakpoint due to the array syntax
    variants: {
      danger: {
        bg: 'brand.1500',
        color: 'white',
        fontSize: '15px',
        px: '40px',
        rounded: '10px',
        height: '50px',
        _focus: {
          shadow: 'outline',
        },
        _hover: {
          _disabled: {
            bg: 'auto',
          },
        },
      },
      success: {
        bg: 'brand.600',
        color: 'white',
        fontSize: '15px',
        px: '40px',
        rounded: '10px',
        height: '50px',
        _focus: {
          shadow: 'outline',
        },
        _hover: {
          _disabled: {
            bg: 'auto',
          },
        },
      },
      main: {
        bg: 'brand.50',
        color: 'white',
        fontSize: '15px',
        px: '40px',
        rounded: '10px',
        height: '50px',
        _focus: {
          shadow: 'outline',
        },
        _hover: {
          _disabled: {
            bg: 'auto',
          },
        },
      },
      main_sm: {
        bg: 'brand.50',
        color: 'white',
        fontSize: '14px',
        height: '36px',
        _focus: {
          shadow: 'outline',
        },
        _hover: {
          _disabled: {
            bg: 'auto',
          },
        },
      },
      main_outline: {
        ...theme.components.Button.variants.outline,
        bg: 'brand.1700',
        color: 'brand.50',
        px: '20px',
        height: '50px',
        fontSize: '15px',
        rounded: '10px',
        border: '1px solid',
        borderColor: 'brand.50',
        _focus: {
          shadow: 'outline',
        },
        _hover: {
          _disabled: {
            bg: 'auto',
          },
        },
      },
      secondary: {
        ...theme.components.Button.variants.outline,
        fontFamily: 'Satoshi-Bold',
        bg: 'brand.100',
        color: 'brand.50',
        rounded: '10px',
        px: '40px',
        height: '50px',
        fontSize: '15px',
        _focus: {
          shadow: 'outline',
        },
        _hover: {
          _disabled: {
            bg: 'auto',
          },
        },
      },
      secondary_sm: {
        bg: 'brand.100',
        color: 'brand.50',
        fontSize: '14px',
        height: '36px',
        _hover: {
          _disabled: {
            bg: 'auto',
          },
        },
      },
      outline: {
        ...theme.components.Button.variants.outline,
        bg: 'transparent',
        color: 'brand.200',
        px: '40px',
        height: '50px',
        fontSize: '15px',
        rounded: '10px',
        border: '1px solid',
        borderColor: 'brand.500',
        _focus: {
          shadow: 'outline',
        },
        _hover: {
          _disabled: {
            bg: 'auto',
          },
        },
      },
      outline_sm: {
        ...theme.components.Button.variants.outline,
        bg: 'transparent',
        color: 'brand.200',
        fontSize: '14px',
        height: '36px',
        border: '1px solid',
        borderColor: 'brand.500',
        _focus: {
          shadow: 'outline',
        },
        _hover: {
          _disabled: {
            bg: 'auto',
          },
        },
      },
      ghost: {
        ...theme.components.Button.variants.ghost,
        bg: 'transparent',
        fontSize: '15px',
        rounded: '10px',
        color: 'brand.50',

        _hover: {
          bg: 'transparent',
          _disabled: {
            bg: 'auto',
          },
        },
        _focus: {
          bg: 'transparent',
        },
        _active: {
          bg: 'transparent',
        },
      },
    },
    // 6. We can overwrite defaultProps
    defaultProps: {
      size: 'md', // default is md
      variant: 'solid', // default is solid
      colorScheme: 'teal',
    },
  },
};

export default components;
