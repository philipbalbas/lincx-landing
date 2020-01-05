/** @jsx jsx */

import css from "@styled-system/css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkButton from "../components/link-button"
import styled from "@emotion/styled"
import { jsx } from "theme-ui"
import {
  Container,
  Flex,
  Card,
  Heading,
  Text,
  Grid,
  Box,
} from "@theme-ui/components"
import UserCircle from "../images/user-circle.svg"
import Funnel from "../images/funnel-1.svg"
import Column from "../images/column.svg"
import Table from "../images/table.svg"
import Image from "../components/image"
import Person from "../images/person.svg"
import Fingerprint from "../images/fingerprint.svg"
import Bot from "../images/bot.svg"
import Bars from "../images/bars.svg"

const Hero = styled.div`
  padding: 30px;
  text-align: center;

  h1 {
    font-size: 60px;
    color: #363638;
    letter-spacing: 1.87px;
  }

  p {
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 1.41px;
    color: #4a4a4a;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      css={css({
        maxWidth: "855px",
        margin: "0 auto",
      })}
    >
      <Heading variant="display">Meaningful experiences.</Heading>
      <p>
        We connect consumers who are actively reaching, comparing, and in market
        for products and services with solutions optimized to their needs. We
        empower marketers to reach people in the moments they're making purchase
        decisions.
      </p>
      <LinkButton to="/" sx={{ variant: "buttons.primary" }}>
        Get in touch
      </LinkButton>
    </Hero>
    <Flex
      p={2}
      m="0 auto"
      sx={{
        flexWrap: ["wrap", "nowrap"],
        maxWidth: "1170px",
      }}
    >
      <Card
        variant="primary"
        mr={["0", "30px"]}
        mb={["10px", "0"]}
        sx={{ flexBasis: ["100%", "60%"] }}
      >
        <div
          css={css({
            background: "#3399ee",
            borderRadius: "13px",
            color: "white",
            width: "max-content",
            padding: "5px 10px",
            fontSize: "12px",
            textTransform: "uppercase ",
            marginBottom: "27px",
          })}
        >
          Solutions
        </div>
        <div
          css={css({
            fontSize: "30px",
            fontWeight: "700",
            letterSpacing: "2.34px",
            maxWidth: "317px",
            marginBottom: "20px",
          })}
        >
          Your offer just got better.
        </div>
        <div
          css={css({
            fontSize: "16px",
            marginBottom: "40px",
            maxWidth: "317px",
          })}
        >
          Actionable solutions that improve your revenue per visitor.
        </div>
        <div
          css={css({
            a: {
              color: "white",
              textDecoration: "none",
            },
          })}
        >
          <LinkButton to="/funnels" sx={{ variant: "buttons.outline" }}>
            See Funnels
          </LinkButton>
          <LinkButton sx={{ variant: "buttons.outline" }}>
            See Arborist
          </LinkButton>
        </div>
      </Card>
      <Card variant="inverse" sx={{ flexBasis: ["100%", "40%"] }}>
        <div
          css={css({
            backgroundColor: "#282c47",
            borderRadius: "13px",
            color: "white",
            width: "max-content",
            padding: "5px 10px",
            fontSize: "12px",
            textTransform: "uppercase ",
            marginBottom: "27px",
          })}
        >
          Advertise with us
        </div>
        <div
          css={css({
            fontSize: "30px",
            fontWeight: "700",
            letterSpacing: "2.34px",
            maxWidth: "317px",
            marginBottom: "20px",
          })}
        >
          In market audiences that perform.
        </div>
        <div sx={{ mb: "40px" }}>
          Connect with customer who are actively researching and comparing
        </div>
        <div>
          <LinkButton sx={{ variant: "buttons.outline" }}>
            Learn More
          </LinkButton>
        </div>
      </Card>
    </Flex>
    <Grid
      px={4}
      py={5}
      columns={[2, null, 4]}
      sx={{
        maxWidth: "1170px",
        m: "0 auto",
      }}
    >
      <Box
        sx={{
          textAlign: ["center", "left"],
        }}
      >
        <Person
          sx={{
            mb: 2,
          }}
        />
        <Heading as="h3" variant="label">
          Understand
        </Heading>
        <Text variant="body">The person behind the purchase.</Text>
      </Box>
      <Box
        sx={{
          textAlign: ["center", "left"],
        }}
      >
        <Fingerprint
          sx={{
            mb: 2,
          }}
        />
        <Heading as="h3" variant="label">
          Personalize
        </Heading>
        <Text variant="body">The individual experience.</Text>
      </Box>
      <Box
        sx={{
          textAlign: ["center", "left"],
        }}
      >
        <Bot
          sx={{
            mb: 2,
          }}
        />
        <Heading as="h3" variant="label">
          Automate
        </Heading>
        <Text variant="body">
          Audience segments that deliver on customer needs.
        </Text>
      </Box>
      <Box
        sx={{
          textAlign: ["center", "left"],
        }}
      >
        <Bars
          sx={{
            mb: 2,
          }}
        />
        <Heading as="h3" variant="label">
          Grow
        </Heading>
        <Text variant="body">Audiences that scale.</Text>
      </Box>
    </Grid>
    <Container
      sx={{
        maxWidth: "1170px",
        p: 4,
      }}
    >
      <Heading variant="header" as="h1">
        Path for Funnels
      </Heading>
      <Flex
        sx={{
          flexWrap: ["wrap", "nowrap"],
          mb: [4, 5],
        }}
      >
        <Box
          sx={{
            flexBasis: ["100%", "50%"],
            mr: [0, 3, null, 7],
          }}
        >
          <Box mb={4}>
            <Heading variant="label">Funnel Fail Points</Heading>
            <Text variant="body">
              Don't limit how you can service each consumer that comes through
              your funnel. We have an extensive buyer network to network to
              match those consumers that don't fit your primary back end buyers.
            </Text>
          </Box>
          <Box mb={4}>
            <Heading variant="label">Funnel Cross Selling | Upselling</Heading>
            <Text variant="body">
              Expand what you offer those consumers going through your funnel,
              and lower your CPL by cross selling and upselling each consumer.
            </Text>
          </Box>
          <Box mb={4}>
            <Heading variant="label">Thank You Page</Heading>
            <Text variant="body">
              We offer single campaigns or multi-advertiser listings that will
              complement the consumer experience across 30+ verticals.
            </Text>
          </Box>
          <LinkButton
            sx={{
              variant: "buttons.primary",
              mb: [5, 0],
            }}
          >
            Learn More
          </LinkButton>
        </Box>
        <Box
          sx={{
            flexBasis: ["100%", "50%"],
          }}
        >
          <Funnel
            sx={{
              width: "100%",
            }}
          />
        </Box>
      </Flex>
    </Container>
    <Box
      sx={{
        backgroundColor: "#282C47",
        color: "white",
        variant: "layout.fullWidth",
        py: [5, 6],
      }}
    >
      <Container>
        <Flex
          sx={{
            flexWrap: ["wrap", "nowrap"],
          }}
        >
          <Box
            sx={{
              flexShrink: "0",
              flexGrow: "0",
              flexBasis: ["100%", "450px"],
              mr: [0, 3, null, 7],
              mb: [4, 0],
            }}
          >
            <Image />
          </Box>
          <Box
            sx={{
              flexBasis: ["100%", "50%"],
              textAlign: ["center", "left", null, null],
            }}
          >
            <Heading as="h1" mb={3}>
              Arborist API
            </Heading>
            <Text
              mb={4}
              variant="body"
              sx={{
                color: "white",
              }}
            >
              Arborist is an API driven matching engine that optimally connects
              shoppers with products and services tailored to their precise
              needs, while protecting consumer privacy and limiting who has
              access to the customer's personal information.
            </Text>
            <LinkButton to="/" sx={{ variant: "buttons.primary" }}>
              Learn More
            </LinkButton>
          </Box>
        </Flex>
      </Container>
    </Box>
    <Flex
      sx={{
        flexWrap: ["wrap", null, "nowrap"],
        my: [5, 6],
      }}
    >
      <Heading
        mr={[0, 6]}
        sx={{
          flexBasis: ["100%", null, "33.3333%", null],
          textAlign: ["center", "left", null, null],
        }}
      >
        Get Started
      </Heading>
      <Box
        mr={[0, null, null, 6]}
        mb={[5, 0, null, null]}
        sx={{
          flexBasis: ["100%", "50%", null, "33.3333%"],
          textAlign: ["center", "left", null, null],
        }}
      >
        <Heading variant="subheading">Monetize with us</Heading>
        <Text variant="body" mb={4}>
          Grow your business with us by integrating solutions that increase your
          revenue per customer.
        </Text>
        <LinkButton sx={{ variant: "buttons.secondary" }}>
          Get in touch
        </LinkButton>
      </Box>
      <Box
        sx={{
          textAlign: ["center", "left", null, null],
          flexBasis: ["100%", "50%", null, "33.3333%"],
        }}
      >
        <Heading variant="subheading">Advertise with us</Heading>
        <Text variant="body" mb={4}>
          Get in front of customers when they are ready to engage. Only pay for
          results.
        </Text>
        <LinkButton sx={{ variant: "buttons.primary" }}>
          Get in touch
        </LinkButton>
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
