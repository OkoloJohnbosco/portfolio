// Use this to avoid repetition of props in a component, we pass this to the index.ts extendtheme
// Consume in ur component
// <Box layerStyles={selected}  />
const layerStyles = {
  base: {
    bg: 'gray.50',
    border: '2px solid',
    borderColor: 'gray.500',
  },
  selected: {
    bg: 'teal.500',
    color: 'teal.700',
    borderColor: 'orange.500',
  },
};

// Use this to avoid repetition of props in a component, we pass this to the index.ts extendtheme
// Consume in ur component
// <Box textStyles={selected}  />
export const textStyles = {
  h1: {
    // you can also use responsive styles
    fontSize: { base: '48px', md: '72px' },
    fontWeight: 'bold',
    lineHeight: '110%',
    letterSpacing: '-2%',
  },
  h2: {
    fontSize: ['36px', '48px'],
    fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%',
  },
};

export default layerStyles;
