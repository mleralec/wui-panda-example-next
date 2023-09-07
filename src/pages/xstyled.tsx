import { Box } from "@welcome-ui/box";
import { Button } from "@welcome-ui/button";
import { Text } from "@welcome-ui/text";
import { createTheme, WuiProvider } from "@welcome-ui/core";

const theme = createTheme();

type ButtonVariant = React.ComponentProps<typeof Button>["variant"];
type TextVariant = React.ComponentProps<typeof Text>["variant"];

const buttonVariants: ButtonVariant[] = [
  "primary",
  "secondary",
  "tertiary",
  "primary-info",
  "secondary-info",
  "primary-success",
  "secondary-success",
  "ghost",
  "primary-warning",
  "secondary-warning",
  "primary-danger",
  "secondary-danger",
];

const textVariants: TextVariant[] = [
  "xs",
  "sm",
  "md",
  "lg",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "h0",
  "subtitle-md",
  "subtitle-sm",
];

const getRandomButtonVariant = () =>
  buttonVariants[Math.floor(Math.random() * buttonVariants.length)];

const getRandomTextVariant = () =>
  textVariants[Math.floor(Math.random() * textVariants.length)];

const Xstyled = () => (
  <WuiProvider theme={theme} useReset={false}>
    {Array.from({ length: 10000 }, (_, index) => (
      <Box key={index} display="flex">
        <Button variant={getRandomButtonVariant()}>Button</Button>
        <Text
          variant={getRandomTextVariant()}
          pt="xs"
          pb="sm"
          pr="md"
          pl="lg"
          mt="xl"
          mb="xxl"
          mr="3xl"
          ml="4xl"
        >
          Text
        </Text>
      </Box>
    ))}
  </WuiProvider>
);

export default Xstyled;
