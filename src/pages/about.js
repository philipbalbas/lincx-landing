/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkButton from "../components/link-button"
import { Container, Box, Heading, Flex, Text } from "@theme-ui/components"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <Container px={2} pt={[3, 4, 5, 6]} pb={[5, 6]}>
      <Flex
        mb={6}
        sx={{
          flexWrap: ["wrap", "nowrap"],
        }}
      >
        <Box
          mr={[0, 5]}
          mb={[4, 0]}
          sx={{
            flexBasis: ["100%", "66.6666%"],
          }}
        >
          <Heading>Company</Heading>
          <Text
            variant="body"
            sx={{
              color: "lightBlue",
              fontWeight: "bold",
              mb: 3,
            }}
          >
            Interlincx was founded upon the idea of carving out various niches
            within the merging online marketing sector based on yield
            optimization strategies.
          </Text>
          <Text
            variant="body"
            sx={{
              mb: 3,
            }}
          >
            Over the last 19 years we have expanded beyond simple ad placement
            and manual audience segmentation into powerful machine learning
            algorithms deployed within and between audience supply and buyer
            demand.
          </Text>
          <Text
            variant="body"
            sx={{
              mb: 3,
            }}
          >
            Interlincx's platforms implement proprietary algorithms to segment
            the growing consumer audience that we see through our supply
            channels into behavioral categories to properly match the right
            consumers with the right advertisers' products and services.
          </Text>
          <Text
            variant="body"
            sx={{
              mb: 3,
            }}
          >
            Whether you are in the consumer audience supply side or a brand
            seeking consumers at the point of purchase stage, let's talk about
            how Interlincx can maximize your ROI.
          </Text>
        </Box>
        <Box
          sx={{
            flexBasis: ["75%", "33.33333%"],
            margin: "0 auto",
          }}
        >
          <Text variant="quote">
            We see about 1 million people a week shopping consumer loans.
            There's an incredible opportunity to engage this highly focused
            audience.
          </Text>
        </Box>
      </Flex>
      <Flex
        sx={{
          flexWrap: ["wrap", null, "nowrap"],
        }}
      >
        <Heading
          mr={[0, 6]}
          sx={{
            flexBasis: ["100%", null, "33.3333%", null],
          }}
        >
          Get Started
        </Heading>
        <Box
          mr={[0, null, null, 6]}
          mb={[5, 0, null, null]}
          sx={{
            flexBasis: ["100%", "50%", null, "33.3333%"],
          }}
        >
          <Heading variant="subheading">Monetize with us</Heading>
          <Text mb={4}>
            Grow your business with us by integrating solutions that increase
            your revenue per customer.
          </Text>
          <LinkButton sx={{ variant: "buttons.secondary" }}>
            Get in touch
          </LinkButton>
        </Box>
        <Box
          sx={{
            flexBasis: ["100%", "50%", null, "33.3333%"],
          }}
        >
          <Heading variant="subheading">Advertise with us</Heading>
          <Text mb={4}>
            Get in front of customers when they are ready to engage. Only pay
            for results.
          </Text>
          <LinkButton sx={{ variant: "buttons.primary" }}>
            Get in touch
          </LinkButton>
        </Box>
      </Flex>
    </Container>
  </Layout>
)

export default AboutPage
