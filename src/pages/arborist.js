/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkButton from "../components/link-button"
import { Grid, Box, Heading, Flex, Text, Container } from "@theme-ui/components"
import Plot from "../images/plot.svg"
import Flow from "../images/flow.svg"
import Bullet from "../images/bullet-2.svg"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <Box pt={[3, 4, 5, 6]} pb={[5, 6]}>
      <Flex sx={{ flexWrap: ["wrap", "nowrap"], mb: 5 }}>
        <Box sx={{ flexBasis: ["100%", "30%"] }}>
          <Text>Arborist API</Text>
          <Heading>Smarter customer targeting</Heading>
          <Text variant="body">
            Arborist's proven proprietary algorithm connects the right consumer
            to the right advertiser through greater accuracy and speed without
            compromising consumer privacy adn data security.
          </Text>
        </Box>
        <Plot sx={{ flexBasis: ["100%", "70%"] }} />
      </Flex>
      <Grid mb={5} columns={[1, 2, 2, 4]}>
        <Flex>
          <Bullet sx={{ flex: "0 0 16px", mr: 3, mt: 1 }} />
          <Text variant="body">
            We do NOT accept or sell any consumer data with personally
            identifiable information. This means your data is not compromised
            and has a higher conversion rate through us.
          </Text>
        </Flex>
        <Flex>
          <Bullet sx={{ flex: "0 0 16px", mr: 3, mt: 1 }} />
          <Text variant="body">
            Given our unmatched speed and matching accuracy, we qualify a
            significantly higher volume of potential buyers in orders to sell
            the highest bidder that is also the best match to the consumer
            before the session times out.
          </Text>
        </Flex>
        <Flex>
          <Bullet sx={{ flex: "0 0 16px", mr: 3, mt: 1 }} />
          <Text variant="body">
            We either redirect the consumer to one of our buyer's landing pages,
            or provide a listing of multiple buyers for the consumer to choose
            from (further maximizing your revenue per request).
          </Text>
        </Flex>
        <Flex>
          <Bullet sx={{ flex: "0 0 16px", mr: 3, mt: 1 }} />
          <Text variant="body">
            We hold higher budgets and better buying power for your lead
            generation systems.
          </Text>
        </Flex>
      </Grid>
      <Box
        sx={{
          variant: "layout.fullWidth",
          py: 6,
          bg: "lightGray",
          textAlign: "center",
          mb: 5,
        }}
      >
        <Container>
          <Text variant="body">
            We analyze non personally identifiable data across customer
            touchpoints combining customer provided traits, events, and context
            to understand the unique aspects of what specific products and
            services will work for the needs of customers in real time.
          </Text>
        </Container>
      </Box>
      <Flex sx={{ justifyContent: "center", mb: 5 }}>
        <Flow />
      </Flex>
      <Flex>
        <Text
          variant="body"
          sx={{ flexBasis: ["100%", "50%"], mr: ["0px", 4] }}
        >
          Arborist increases the coverage of product and service providers
          available to customers, across verticals, and optimized specifically
          to solve customers problems, at the same time reducing the number of
          companies that gain access to a customer's personal information. Every
          day shoppers are better protected as we ultimately reduce the number
          of locations in which a person's information lives.
        </Text>
        <Text variant="blueText" sx={{ flexBasis: ["100%", "50%"] }}>
          Given our unmatched speed and accuracy, we qualify a significantly
          higher volume of potential buyers in order to sell the highest bidder
          that is also the best match to the consumer before the session times
          out.
        </Text>
      </Flex>
      <Grid columns={[1, 2, null, null]}>
        <Box>
          <Heading variant="subheading">Increase monetization</Heading>
          <Text variant="body">
            Fast matching and secure consumer transfers because we do NOT accept
            personally identifiable information ("PII")data points
          </Text>
        </Box>
        <Box>
          <Heading variant="subheading">Better response times</Heading>
          <Text variant="body">
            95% of decision times are within less than 1 second. Given faster
            response times.
          </Text>
        </Box>
        <Box>
          <Heading variant="subheading">Higher match rates</Heading>
          <Text variant="body">
            Maximize accept rates & revenue per request through our proprietary
            matching algorithms, incorporating census data, and ability to send
            the consumer directly to a landing page or a listing of multiple
            buyers from our extensive buyer network.
          </Text>
        </Box>
        <Box>
          <Heading variant="subheading">Sub headline here</Heading>
          <Text variant="body">A text box would go here</Text>
        </Box>
      </Grid>
    </Box>
  </Layout>
)

export default AboutPage
