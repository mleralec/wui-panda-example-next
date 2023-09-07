import Image from "next/image";
import styled, { th } from "@xstyled/styled-components";
import { Box } from "@welcome-ui/box";
import { Tab, useTab } from "@welcome-ui/tabs";
import { Badge } from "@welcome-ui/badge";
import { Link } from "@welcome-ui/link";
import { Button } from "@welcome-ui/button";
import { Text } from "@welcome-ui/text";
import { createTheme, WuiProvider } from "@welcome-ui/core";
import { LeftIcon, RightIcon } from "@welcome-ui/icons";
import { Accordion, useAccordion } from "@welcome-ui/accordion";

import banner from "../assets/banner.webp";
import logo from "../assets/logo.webp";

import { organization, job } from "../fixtures";

const theme = createTheme();

const Banner = styled.box`
  position: relative;
  width: 100%;
  padding: 3xl 0;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const CompanyFigure = styled.figureBox`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    transition: opacity ${th("durations.medium")};
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
`;

const Title = styled(Text)`
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 3xl;
  padding-left: 30px;
  &::before {
    display: block;
    content: "";
    width: 20px;
    height: 4px;
    background-color: primary-500;
    position: absolute;
    top: 50%;
    left: 0px;
  }
`;

const ListItem = styled.liBox`
  position: relative;
  padding-left: lg;
  margin-left: lg;
  margin-bottom: lg;

  &::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0.6em;
    width: 8px;
    height: 8px;
    background-color: primary-500;
    border-radius: 50%;
  }
`;

const Xstyled = () => {
  const tabs = useTab({ defaultSelectedId: "tab-1" });
  const accordion1 = useAccordion();
  const accordion2 = useAccordion();
  const accordion3 = useAccordion();

  return (
    <WuiProvider theme={theme} useReset={true}>
      <Box>
        <Box zIndex="9" position="sticky" top="0" backgroundColor="light-900">
          <Tab.List store={tabs}>
            <Tab id="tab-1" store={tabs}>
              Qui sont-ils?
            </Tab>
            <Tab id="tab-2" store={tabs}>
              Descriptif du poste
            </Tab>
            <Tab id="tab-3" store={tabs}>
              Profil recherché
            </Tab>
          </Tab.List>
        </Box>
        <Banner id="banner">
          <Image
            alt={job.name}
            src={banner}
            priority={false}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
            }}
          />
          <Box
            alignItems="center"
            display="flex"
            h="100%"
            position="relative"
            zIndex="1"
          >
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              h="100%"
              m="0 auto"
            >
              <Box display="block" minWidth="fit-content">
                <Box
                  h="50px"
                  overflow="hidden"
                  w="50px"
                  margin="0 auto"
                  mb="sm"
                >
                  <CompanyFigure>
                    <Image
                      alt={organization.name}
                      priority={false}
                      loading="lazy"
                      src={logo}
                    />
                  </CompanyFigure>
                </Box>
                <Text
                  color="white"
                  textAlign="center"
                  textTransform="uppercase"
                  variant="subtitle-md"
                >
                  {organization.name}
                </Text>
              </Box>
              <Text
                color="white"
                maxW={800}
                my="xxl"
                textAlign="center"
                variant="h1"
                display="flex"
                alignItems="center"
              >
                {job.name}
                <Badge ml="sm">new</Badge>
              </Text>
              <Link isExternal={false} color="white">
                <span>
                  {organization.offices[0].address},{" "}
                  {organization.offices[0].city}{" "}
                  {organization.offices[0].zip_code}
                </span>
              </Link>
            </Box>
          </Box>
        </Banner>
        <Box as="main" m="0 auto" w="600px">
          <Box mt="xl">
            <Title variant="h2" id="tab-1-panel">
              Qui sont-ils?
            </Title>
            <Text mb="xxl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              excepturi temporibus nesciunt corrupti sequi voluptatum in nobis
              modi ut, voluptate praesentium sed harum iure. Aut dolor deserunt
              non! Debitis, perferendis.
            </Text>
            <Text mb="xxl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              excepturi temporibus nesciunt corrupti sequi voluptatum in nobis
              modi ut, voluptate praesentium sed harum iure. Aut dolor deserunt
              non! Debitis, perferendis.
            </Text>
            <Text mb="xxl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              excepturi temporibus nesciunt corrupti sequi voluptatum in nobis
              modi ut, voluptate praesentium sed harum iure. Aut dolor deserunt
              non! Debitis, perferendis.
            </Text>
          </Box>
          <Box mt="xl">
            <Title variant="h2" id="tab-2-panel">
              Descriptif du poste
            </Title>
            <Text mb="xxl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              excepturi temporibus nesciunt corrupti sequi voluptatum in nobis
              modi ut, voluptate praesentium sed harum iure. Aut dolor deserunt
              non! Debitis, perferendis.
            </Text>
            <Text mb="xxl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              excepturi temporibus nesciunt corrupti sequi voluptatum in nobis
              modi ut, voluptate praesentium sed harum iure. Aut dolor deserunt
              non! Debitis, perferendis.
            </Text>
            <Text mb="xxl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              excepturi temporibus nesciunt corrupti sequi voluptatum in nobis
              modi ut, voluptate praesentium sed harum iure. Aut dolor deserunt
              non! Debitis, perferendis.
            </Text>
          </Box>
          <Box mt="xl">
            <Title variant="h2" id="tab-3-panel">
              Profil recherché
            </Title>
            <Text mb="xxl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              excepturi temporibus nesciunt corrupti sequi voluptatum in nobis
              modi ut, voluptate praesentium sed harum iure. Aut dolor deserunt
              non! Debitis, perferendis.
            </Text>
            <Text fontWeight="bold" mb="xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit:
            </Text>
            <ul>
              <ListItem>Lorem ipsum dolor sit amet consectetur</ListItem>
              <ListItem>Lorem ipsum dolor sit amet consectetur elit</ListItem>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
            </ul>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            my="3xl"
            border="1px solid"
            borderColor="border"
            p="xxl"
          >
            <div>
              <Box h="50px" overflow="hidden" w="50px" margin="0 auto" mb="sm">
                <CompanyFigure>
                  <Image
                    alt={organization.name}
                    priority={false}
                    loading="lazy"
                    src={logo}
                  />
                </CompanyFigure>
              </Box>
              <Text textAlign="center" variant="subtitle-md">
                {organization.name}
              </Text>
              <Text variant="h4" my="lg">
                Cette offre vous tente ?
              </Text>
              <Box display="flex" justifyContent="center" gap="md">
                <Button variant="primary">Postuler</Button>
                <Button variant="tertiary">Sauvegarder</Button>
              </Box>
            </div>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            my="3xl"
          >
            <Button variant="secondary">
              <LeftIcon />
              <span>Retour aux résultats</span>
            </Button>
          </Box>
          <iframe
            allow="autoplay"
            height="300px"
            loading="lazy"
            src="https://www.youtube-nocookie.com/embed?listType=playlist&amp;list=PLUndIPKSZI5QtBMYGidPZ5A_rr5r1cBCH&amp;loop=1&amp;rel=0&amp;showinfo=1"
            width="100%"
          ></iframe>
          <Box my="3xl">
            <Box backgroundColor="nude-200" p="lg">
              <Text variant="subtitle-md">
                Questions et réponses sur l offre
              </Text>
            </Box>
            <Accordion
              title="L'envoi d'un CV est-il obligatoire pour postuler à cette offre ?"
              store={accordion1}
              icon={<RightIcon />}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non
              magni eius saepe eum quis at rerum distinctio et ut inventore
              ipsam
            </Accordion>
            <Accordion
              title="Le télétravail est-il possible pour ce poste ?"
              store={accordion2}
              icon={<RightIcon />}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non
              magni eius saepe eum quis at rerum distinctio et ut inventore
              ipsam
            </Accordion>
            <Accordion
              title="Quel est le type de contrat pour ce poste ?"
              store={accordion3}
              icon={<RightIcon />}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non
              magni eius saepe eum quis at rerum distinctio et ut inventore
              ipsam
            </Accordion>
          </Box>
        </Box>
        <Box as="footer" backgroundColor="black" px="3xl" py="xl">
          <Text variant="h4" color="white" mb="sm">
            Components:
          </Text>
          <ul>
            <ListItem color="white" fontWeight="bold">
              Box
            </ListItem>
            <ListItem color="white" fontWeight="bold">
              Text
            </ListItem>
            <ListItem color="white" fontWeight="bold">
              Button
            </ListItem>
            <ListItem color="white" fontWeight="bold">
              Link
            </ListItem>
            <ListItem color="white" fontWeight="bold">
              Icons
            </ListItem>
            <ListItem color="white" fontWeight="bold">
              Badge
            </ListItem>
            <ListItem color="white" fontWeight="bold">
              Accordion
            </ListItem>
            <ListItem color="white" fontWeight="bold">
              Tabs
            </ListItem>
          </ul>
        </Box>
      </Box>
    </WuiProvider>
  );
};

export default Xstyled;
