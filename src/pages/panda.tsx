import { BoxPanda } from "@welcome-ui/box";
import { ButtonPanda } from "@welcome-ui/button";
import { TextPanda } from "@welcome-ui/text";
import { SpacingToken } from "@welcome-ui/panda/tokens";

type ButtonVariant = React.ComponentProps<typeof ButtonPanda>["variant"];
type TextVariant = React.ComponentProps<typeof TextPanda>["variant"];

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

export default function Panda() {
  return (
    <div>
      {Array.from({ length: 10000 }, (_, index) => (
        <BoxPanda key={index} display="flex">
          <ButtonPanda variant={getRandomButtonVariant()}>Button</ButtonPanda>
          <TextPanda
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
          </TextPanda>
        </BoxPanda>
      ))}
    </div>
  );
}
