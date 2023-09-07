import "@welcome-ui/core/dist/index.css";
import Image from "next/image";
import { styled } from "@welcome-ui/panda/jsx";
import { token } from "@welcome-ui/panda/tokens";
import { TabPanda, useTab } from "@welcome-ui/tabs";
import { LinkPanda } from "@welcome-ui/link";
import { BadgePanda } from "@welcome-ui/badge";
import { TextPanda } from "@welcome-ui/text";
import { ButtonPanda } from "@welcome-ui/button";
import { LeftIconPanda, RightIconPanda } from "@welcome-ui/icons";
import { AccordionPanda, useAccordion } from "@welcome-ui/accordion";

import banner from "../assets/banner.webp";
import logo from "../assets/logo.webp";

import { organization, job } from "../fixtures";

const Banner = styled("div", {
  base: {
    position: "relative",
    width: "100%",
    paddingY: "3xl",
    paddingX: "0",
    "&::after": {
      content: "''",
      position: "absolute",
      left: "0",
      top: "0",
      bottom: "0",
      right: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  },
});

const CompanyFigure = styled("figure", {
  base: {
    position: "relative",
    width: "100%",
    height: "100%",
    "&::after": {
      opacity: "0",
      position: "absolute",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      content: "''",
      background:
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
      transition: `opacity ${token("durations.medium")}`,
    },
    _hover: {
      _after: {
        opacity: "1",
      },
    },
  },
});

const Title = styled(TextPanda, {
  base: {
    position: "relative",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    marginBottom: "3xl",
    paddingLeft: "30px",
    _before: {
      display: "block",
      content: "''",
      width: "20px",
      height: "4px",
      backgroundColor: "primary-500",
      position: "absolute",
      top: "50%",
      left: "0px",
    },
  },
});

const ListItem = styled("li", {
  base: {
    position: "relative",
    paddingLeft: "lg",
    marginLeft: "lg",
    marginBottom: "lg",
    _before: {
      content: "''",
      position: "absolute",
      left: "0px",
      top: "0.6em",
      width: "8px",
      height: "8px",
      backgroundColor: "primary-500",
      borderRadius: "50%",
    },
  },
});

export default function Panda() {
  const tabs = useTab({ defaultSelectedId: "tab-1" });
  const accordion1 = useAccordion();
  const accordion2 = useAccordion();
  const accordion3 = useAccordion();

  return (
    <styled.div>
      <styled.div
        zIndex="9"
        position="sticky"
        top="0"
        backgroundColor="light-900"
      >
        <TabPanda.List store={tabs}>
          <TabPanda id="tab-1" store={tabs}>
            Qui sont-ils?
          </TabPanda>
          <TabPanda id="tab-2" store={tabs}>
            Descriptif du poste
          </TabPanda>
          <TabPanda id="tab-3" store={tabs}>
            Profil recherché
          </TabPanda>
        </TabPanda.List>
      </styled.div>
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
        <styled.div
          alignItems="center"
          display="flex"
          h="100%"
          position="relative"
          zIndex="1"
        >
          <styled.div
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            h="100%"
            m="0 auto"
          >
            <styled.div display="block" minWidth="fit-content">
              <styled.div
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
              </styled.div>
              <TextPanda
                color="white"
                textAlign="center"
                textTransform="uppercase"
                variant="subtitle-md"
              >
                {organization.name}
              </TextPanda>
            </styled.div>
            <TextPanda
              color="white"
              maxW={800}
              my="xxl"
              textAlign="center"
              variant="h1"
              display="flex"
              alignItems="center"
            >
              {job.name}
              <BadgePanda ml="sm">new</BadgePanda>
            </TextPanda>
            <LinkPanda isExternal={false} color="white">
              <span>
                {organization.offices[0].address},{" "}
                {organization.offices[0].city}{" "}
                {organization.offices[0].zip_code}
              </span>
            </LinkPanda>
          </styled.div>
        </styled.div>
      </Banner>
      <styled.main margin="0 auto" w="600px">
        <styled.div mt="xl">
          <Title variant="h2" id="tab-1-panel">
            Qui sont-ils?
          </Title>
          <TextPanda mb="xxl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            excepturi temporibus nesciunt corrupti sequi voluptatum in nobis
            modi ut, voluptate praesentium sed harum iure. Aut dolor deserunt
            non! Debitis, perferendis.
          </TextPanda>
          <TextPanda mb="xxl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            excepturi temporibus nesciunt corrupti sequi voluptatum in nobis
            modi ut, voluptate praesentium sed harum iure. Aut dolor deserunt
            non! Debitis, perferendis.
          </TextPanda>
          <TextPanda mb="xxl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            excepturi temporibus nesciunt corrupti sequi voluptatum in nobis
            modi ut, voluptate praesentium sed harum iure. Aut dolor deserunt
            non! Debitis, perferendis.
          </TextPanda>
        </styled.div>
        <styled.div mt="xl">
          <Title variant="h2" id="tab-2-panel">
            Descriptif du poste
          </Title>
          <TextPanda mb="xxl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            excepturi temporibus nesciunt corrupti sequi voluptatum in nobis
            modi ut, voluptate praesentium sed harum iure. Aut dolor deserunt
            non! Debitis, perferendis.
          </TextPanda>
          <TextPanda mb="xxl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            excepturi temporibus nesciunt corrupti sequi voluptatum in nobis
            modi ut, voluptate praesentium sed harum iure. Aut dolor deserunt
            non! Debitis, perferendis.
          </TextPanda>
          <TextPanda mb="xxl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            excepturi temporibus nesciunt corrupti sequi voluptatum in nobis
            modi ut, voluptate praesentium sed harum iure. Aut dolor deserunt
            non! Debitis, perferendis.
          </TextPanda>
        </styled.div>
        <styled.div mt="xl">
          <Title variant="h2" id="tab-3-panel">
            Profil recherché
          </Title>
          <TextPanda mb="xxl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            excepturi temporibus nesciunt corrupti sequi voluptatum in nobis
            modi ut, voluptate praesentium sed harum iure. Aut dolor deserunt
            non! Debitis, perferendis.
          </TextPanda>
          <TextPanda fontWeight="bold" mb="xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit:
          </TextPanda>
          <styled.ul>
            <ListItem>Lorem ipsum dolor sit amet consectetur</ListItem>
            <ListItem>Lorem ipsum dolor sit amet consectetur elit</ListItem>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
          </styled.ul>
        </styled.div>
        <styled.div
          display="flex"
          alignItems="center"
          justifyContent="center"
          my="3xl"
          border="1px solid"
          borderColor="border"
          p="xxl"
        >
          <div>
            <styled.div
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
            </styled.div>
            <TextPanda textAlign="center" variant="subtitle-md">
              {organization.name}
            </TextPanda>
            <TextPanda variant="h4" my="lg">
              Cette offre vous tente ?
            </TextPanda>
            <styled.div display="flex" justifyContent="center" gap="md">
              <ButtonPanda variant="primary">Postuler</ButtonPanda>
              <ButtonPanda variant="tertiary">Sauvegarder</ButtonPanda>
            </styled.div>
          </div>
        </styled.div>
        <styled.div
          display="flex"
          alignItems="center"
          justifyContent="center"
          my="3xl"
        >
          <ButtonPanda variant="secondary">
            <LeftIconPanda />
            <span>Retour aux résultats</span>
          </ButtonPanda>
        </styled.div>
        <iframe
          allow="autoplay"
          height="300px"
          loading="lazy"
          src="https://www.youtube-nocookie.com/embed?listType=playlist&amp;list=PLUndIPKSZI5QtBMYGidPZ5A_rr5r1cBCH&amp;loop=1&amp;rel=0&amp;showinfo=1"
          width="100%"
        ></iframe>
        <styled.div my="3xl">
          <styled.div backgroundColor="nude-200" p="lg">
            <TextPanda variant="subtitle-md">
              Questions et réponses sur l offre
            </TextPanda>
          </styled.div>
          <AccordionPanda
            title="L'envoi d'un CV est-il obligatoire pour postuler à cette offre ?"
            store={accordion1}
            icon={<RightIconPanda />}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non
            magni eius saepe eum quis at rerum distinctio et ut inventore ipsam
          </AccordionPanda>
          <AccordionPanda
            title="Le télétravail est-il possible pour ce poste ?"
            store={accordion2}
            icon={<RightIconPanda />}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non
            magni eius saepe eum quis at rerum distinctio et ut inventore ipsam
          </AccordionPanda>
          <AccordionPanda
            title="Quel est le type de contrat pour ce poste ?"
            store={accordion3}
            icon={<RightIconPanda />}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non
            magni eius saepe eum quis at rerum distinctio et ut inventore ipsam
          </AccordionPanda>
        </styled.div>
      </styled.main>
      <styled.footer backgroundColor="black" px="3xl" py="xl">
        <TextPanda variant="h4" color="white" mb="sm">
          Components:
        </TextPanda>
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
      </styled.footer>
    </styled.div>
  );
}
