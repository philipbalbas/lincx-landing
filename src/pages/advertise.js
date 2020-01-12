/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkButton from "../components/link-button"
import { Container, Box, Heading, Flex, Text, Grid } from "@theme-ui/components"
import Bolt from "../images/bolt.svg"
import Bullet from "../images/bullet-1.svg"
import BulletTwo from "../images/bullet-3.svg"
import Person from "../images/person-2.svg"
import Target from "../images/target.svg"
import Antenna from "../images/antenna.svg"
import Consumer from "../images/consumer.svg"
import Copy from "../images/copy.svg"
import Path from "../images/path.svg"

const Advertisers = () => (
  <Layout>
    <SEO title="Advertise" />
    <Box pt={[3, 4, 5, 6]} pb={[5, 6]}>
      <Flex mb={[5, 6]} sx={{ flexWrap: ["wrap", "nowrap"] }}>
        <Box
          sx={{
            flexBasis: ["100%", "55%"],
            mr: ["0px", "75px"],
            mb: [4, "0px"],
          }}
        >
          <Flex>
            <Bolt
              sx={{
                marginTop: "6px",
                marginRight: "25px",
              }}
            />
            <Heading>Advertise with us</Heading>
          </Flex>
          <Text variant="body" mb={3}>
            React audience segments ready to engage. Our proprietary machine
            learning algorithms sift through millions of consumers for you in
            order to deliver only those actually interested in you products and
            services.
          </Text>
          <Text variant="body" mb={3}>
            We risk our own dollars buying from hundreds of consumer sales
            funnels across 30+ verticals and you only pay for those consumers
            that engage.
          </Text>
          <Flex
            bg="muted"
            p={4}
            sx={{
              borderRadius: "10px",
            }}
          >
            <Bullet
              sx={{
                variant: "image.icon",
                flex: "0 0 16px",
                mt: "5px",
                mr: "6px",
              }}
            />
            <Text variant="body">
              <span
                sx={{
                  variant: "text.highlight",
                }}
              >
                Performance driven media buying
              </span>{" "}
              where we drive traffic to your offers and you only pay on
              performance.
            </Text>
          </Flex>
        </Box>
        <Box
          bg="lightGray"
          p={4}
          sx={{
            flexBasis: ["100%", "45%"],
          }}
        >
          <Box mb={4}>
            <Heading variant="subheading">Arborist</Heading>
            <Text variant="body">
              <span sx={{ variant: "text.highlight" }}>
                Automated buying platform
              </span>{" "}
              that acquires traffic through hundreds of consumers funnels to
              match high intent consumers and deliver them to your offer.
            </Text>
          </Box>
          <Box>
            <Heading variant="subheading">Funnels</Heading>
            <Text variant="body">
              <span sx={{ variant: "text.highlight" }}>Thank you page</span>{" "}
              traffic from our partner network of vetted sources across 30+
              verticals.
            </Text>
            <Text variant="body">
              <span>Assistive content</span> from our owned and operated site
              indexed around a wide range of verticals. We offer consumers a
              deep resource of information topically related to purchase areas
              that the consumer has expressed interest in.
            </Text>
          </Box>
        </Box>
      </Flex>
      <Flex mb={[5, 6]} sx={{ flexWrap: ["wrap", "nowrap"] }}>
        <Box
          mr={["0px", 5]}
          sx={{ flexBasis: ["100%", "50%", null, "33.3333%"] }}
        >
          <Heading>Arborist</Heading>
          <Text variant="body" mb={3}>
            Arborist's proprietary consumer matching algorithm fine tunes your
            consumer targeting requirements to deliver highly engaged consumers
            interested in your products and services.
          </Text>
          <Text variant="body" mb={3}>
            We source and deliver consumers deep within the buying process,
            effectively at the point of purchase, via our extensive vetted
            network of interest based consumer sales funnels.
          </Text>
          <Text variant="body" mb={3}>
            Give us your optimal consumer requirements and Arborist will filter
            through over 200k consumers/day (5M per month) to deliver highly
            engaged consumers to your offer.
          </Text>
        </Box>
        <Grid
          sx={{ flexBasis: ["100%", "50%", null, "66.6667%"], columnGap: 5 }}
          columns={[1, null, null, 2]}
        >
          <Box>
            <Flex>
              <Person sx={{ mr: 3 }} />
              <Heading variant="subheading">Reach</Heading>
            </Flex>
            <Text variant="body">
              5M+ consumers a month travel through our highly targeted
              placements within consumer sales funnels in verticals ranging from
              financial to home services.
            </Text>
          </Box>
          <Box>
            <Flex>
              <Target sx={{ mr: 3 }} />
              <Heading variant="subheading">Match</Heading>
            </Flex>
            <Text variant="body">
              Provide us with your desired consumer profile matches for your
              products and services.
            </Text>
          </Box>
          <Box>
            <Flex>
              <Antenna sx={{ mr: 3 }} />
              <Heading variant="subheading">Source</Heading>
            </Flex>
            <Text variant="body">
              We source only those consumers that match the specific profile(s)
              you provide using our proprietary decision logic algorithms
              incorporating census data to deliver highly targeted consumers.
            </Text>
          </Box>
          <Box>
            <Flex>
              <Consumer sx={{ mr: 3 }} />
              <Heading variant="subheading">Consumer</Heading>
            </Flex>
            <Text variant="body">
              In today's net-savvy it has become common for any business to have
              a website which they use mostly for advertising their products and
              services.
            </Text>
          </Box>
        </Grid>
      </Flex>
      <Box mb={[5, 6]}>
        <Heading>Funnels</Heading>
        <Flex sx={{ flexWrap: ["wrap", "nowrap"] }}>
          <Box sx={{ flexBasis: ["100%", "33.3333%"], mr: ["0px", 5], pt: 4 }}>
            <Copy sx={{ h: "48px", w: "48px", mb: 3 }} />
            <Text variant="blueLabel">Funnel Solutions</Text>
            <Heading>Fail Points</Heading>
            <Text variant="body" mb={3}>
              We source highly targeted consumers on your behalf through our
              extensive placements within our partner network of Thank You
              Pages. Your campaigns are targeted at Thank You Page placements
              within complementary and direct verticals that match up with your
              specified consumer profiles.
            </Text>
            <Box>
              <Flex mb={3}>
                <Bullet sx={{ flex: "0 0 16px", mr: 3, mt: 2 }} />
                <Text variant="blueText">
                  Reach up to 30+ verticals with consumers deep in the buying
                  process that are looking for your products and services.
                </Text>
              </Flex>
              <Flex mb={3}>
                <Bullet sx={{ flex: "0 0 16px", mr: 3, mt: 2 }} />
                <Text variant="blueText">
                  Provide us with your desired consumer profile matches for your
                  products and services.
                </Text>
              </Flex>
              <Flex mb={3}>
                <Bullet sx={{ flex: "0 0 16px", mr: 3, mt: 2 }} />
                <Text variant="blueText">
                  We pull consumers from Thank You Pages with matching consumer
                  sets containing matching signals to your requirements.
                </Text>
              </Flex>
            </Box>
          </Box>
          <Box sx={{ flexBasis: ["100%", "66.6667%"], bg: "lightGray", p: 4 }}>
            <Path sx={{ h: "48px", w: "48px", mb: 3 }} />
            <Text variant="blueLabel">Assistive Content</Text>
            <Heading>Path</Heading>
            <Flex sx={{ flexWrap: ["wrap", "nowrap"] }}>
              <Box sx={{ flexBasis: ["100%", "50%"], mr: ["0px", 4], pt: 3 }}>
                <Text variant="body" mb={3}>
                  Lower your cost of acquisition through our highly targeted
                  consumer segments from within our extensive Path.Money site.
                </Text>
                <Text variant="body" mb={3}>
                  Our Path.Money site is a content site indexed around a wide
                  range of verticals offering consumers a deep resource of
                  information topically related to purchase areas that the
                  consumer has expressed interest in.
                </Text>
              </Box>
              <Box sx={{ flexBasis: ["100%", "50%"] }}>
                <Text variant="body" mb={3}>
                  Our proprietary algorithm displays your ads in front of highly
                  targeted consumers based on a mix of consumer signals,
                  origination source, and how the consumers navigate through
                  articles with our Path.Money site.
                </Text>
                <Box>
                  <Flex mb={3}>
                    <Bullet sx={{ flex: "0 0 16px", mr: 3, mt: 2 }} />
                    <Text variant="blueText">
                      Reach up to 1M highly targeted consumers who have
                      expressed an interest to purchase.
                    </Text>
                  </Flex>
                  <Flex mb={3}>
                    <Bullet sx={{ flex: "0 0 16px", mr: 3, mt: 2 }} />
                    <Text variant="blueText">
                      Path.Money sources consumers through organic search,
                      internal media buys, and from consumer sales funnels from
                      relevant verticals based on signals tied to where the
                      consumer is within the purchase decision process.
                    </Text>
                  </Flex>
                  <Flex mb={3}>
                    <Bullet sx={{ flex: "0 0 16px", mr: 3, mt: 2 }} />
                    <Text variant="blueText">
                      Expand your reach & lower your cost of acquisition based
                      on a highly targeted consumer population.
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box bg="secondary" p={[4, 5]} mb={[5, 6]} sx={{ borderRadius: "10px" }}>
        <Text variant="blueLabel" sx={{ fontWeight: 600 }}>
          Performance Driven
        </Text>
        <Heading color="white">Media Buying</Heading>
        <Grid columns={[1, 2]} gap={[4, 5]} mb={5}>
          <Flex>
            <BulletTwo sx={{ flex: "0 0 30px", mt: "6px", mr: 3 }} />
            <Text variant="boldWhite">
              We make customer acquisition simple. Our team of industry veterans
              manages
            </Text>
          </Flex>
          <Flex>
            <BulletTwo sx={{ flex: "0 0 30px", mt: "6px", mr: 3 }} />
            <Text variant="boldWhite">
              We can drive consumers direct to your landing pages and or call
              centers from our extensive network of
            </Text>
          </Flex>
          <Flex>
            <BulletTwo sx={{ flex: "0 0 30px", mt: "6px", mr: 3 }} />
            <Text variant="boldWhite">
              Take advantage of additional consumer signals such as real world
              geo-fencing strategies, enabling you to target audiences in an
              entirely new way.
            </Text>
          </Flex>
          <Flex>
            <BulletTwo sx={{ flex: "0 0 30px", mt: "6px", mr: 3 }} />
            <Text variant="boldWhite">
              Through our processes, we drive performance data into concise,
              actionable insights to iterate and improve upon our creative
              strategies.
            </Text>
          </Flex>
        </Grid>

        <Text variant="body">
          We self fund our own media buying - risking our dollars to drive
          consumer conversions based on your requirements. You ONLY pay when we
          deliver, whether that's tied to driving consumers to your site, the
          consumer converting your forms, or sale.
        </Text>
      </Box>

      <Flex
        sx={{
          flexWrap: ["wrap", null, "nowrap"],
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
            textAlign: ["center", "left", null, null],
          }}
        >
          <Heading variant="subheading">Advertise with us</Heading>
          <Text variant="body" mb={4}>
            Get in front of customers when they are ready to engage. Only pay
            for results.
          </Text>
          <LinkButton sx={{ variant: "buttons.primary" }}>
            Get in touch
          </LinkButton>
        </Box>
      </Flex>
    </Box>
  </Layout>
)

export default Advertisers
