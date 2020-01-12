/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Box, Heading, Flex, Text, Grid } from "@theme-ui/components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UserCircle from "../images/user-circle.svg"
import Funnel from "../images/funnel.svg"
import Expand from "../images/expand.svg"
import Match from "../images/match.svg"
import Conversion from "../images/conversion.svg"
import BulletOne from "../images/bullet-1.svg"
import BulletTwo from "../images/bullet-2.svg"
import Graphs from "../images/graphs.svg"
import Journey from "../images/journey.svg"
import Segment from "../images/segment.svg"
import Check from "../images/check.svg"
import Fire from "../images/fire.svg"

export default () => (
  <Layout>
    <SEO title="Funnels" />
    <Box bg="#000" variant="layout.fullWidth" pt={[4, 5]} pb={[4, 6]}>
      <Container color="white">
        <Flex
          sx={{
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text
            sx={{
              color: "#f2bb42",
              fontWeight: "bold",
            }}
          >
            Path for funnels
          </Text>
          <Heading variant="display">
            Find growth opportunities in your funnel.
          </Heading>
          <Funnel
            sx={{
              width: "100%",
            }}
          />
        </Flex>
      </Container>
    </Box>
    <Box py={[4, 6]}>
      <Text
        color="primary"
        mb={4}
        sx={{
          textTransform: "uppercase",
        }}
      >
        Funnel Solutions
      </Text>
      <Flex
        sx={{
          flexWrap: ["wrap", null, "nowrap", null],
        }}
      >
        <Box
          sx={{
            flexBasis: ["100%", null, "calc(50% - 1px)", null],
          }}
          mr={[0, null, 5, null]}
          mb={[4, null, 0, null]}
        >
          <Heading>Fail Points</Heading>
          <Box mb={[4, 5]}>
            <Text variant="body" mb={3}>
              We empower you to provide alternative solutions for the consumers
              that don't meet your current backend buyer requirements. Enhance
              your customers experience while reclaiming lost revenue -
              effectively reducing your cost per lead in the process. Don't
              leave money on the table.
            </Text>
            <Text variant="body" mb={3}>
              We offer stand alone campaigns to present within your consumer
              funnel, or we can provide an all-in-one set of listings that can
              be either hosted on your property or ours.
            </Text>
            <Text variant="body">
              Our proprietary matching technology presents only those
              advertisers interested in the type of consumer going through your
              funnel based on the consumer signals that you provide to us.
            </Text>
          </Box>
          <Box>
            <Flex mb={4}>
              <UserCircle
                sx={{
                  width: "20px",
                  height: "20px",
                  flex: "0 0 20px",
                  mt: 2,
                  mr: 3,
                  color: "blue",
                }}
              />
              <Text variant="bold">
                Reclaim opportunities to monetize consumers who didn't meet the
                criteria set by your back end buyers.
              </Text>
            </Flex>

            <Flex mb={4}>
              <UserCircle
                sx={{
                  width: "20px",
                  height: "20px",
                  flex: "0 0 20px",
                  mt: 2,
                  mr: 3,
                  color: "blue",
                }}
              />
              <Text variant="bold">
                Take advantage of our proprietary algorithms to match your
                consumers with the right buyers.
              </Text>
            </Flex>

            <Flex mb={4}>
              <UserCircle
                sx={{
                  width: "20px",
                  height: "20px",
                  flex: "0 0 20px",
                  mt: 2,
                  mr: 3,
                  color: "blue",
                }}
              />
              <Text variant="bold">
                Lower the cost of acquisition to allow for improved buying power
                and/or margins.
              </Text>
            </Flex>
          </Box>
        </Box>
        <Box
          sx={{
            flexBasis: ["100%", null, "calc(50% - 1px)", null],
          }}
        >
          <Heading>Thank You Path</Heading>
          <Box mb={5}>
            <Text variant="body" mb={3}>
              Your thank you page shouldn't be the final consumer destination
              within your funnel, but rather an extension of relevant products
              offered to hose consumers visiting your sites.
            </Text>
            <Text variant="body" mb={3}>
              Expand the revenue per visit in your funnel through our large
              collection of advertisers. We can provide single campaigns or
              multi-advertiser listings that complement the consumer experience
              in your sales funnels.
            </Text>
            <Text variant="body">
              Double or triple your current Thank You Page revenue after
              implementing our proven proprietary algorithm to yield optimize
              the rank order of either your existing or provided campaigns based
              on the consumer signals that you provide to us.
            </Text>
          </Box>
          <Box>
            <Flex mb={4}>
              <UserCircle
                sx={{
                  width: "20px",
                  height: "20px",
                  flex: "0 0 20px",
                  mt: 2,
                  mr: 3,
                  color: "blue",
                }}
              />
              <Text variant="bold">
                Reclaim opportunities to monetize consumers who didn't meet the
                criteria set by your back end buyers.
              </Text>
            </Flex>

            <Flex mb={4}>
              <UserCircle
                sx={{
                  width: "20px",
                  height: "20px",
                  flex: "0 0 20px",
                  mt: 2,
                  mr: 3,
                  color: "blue",
                }}
              />
              <Text variant="bold">
                Take advantage of our proprietary algorithms to match your
                consumers with the right buyers.
              </Text>
            </Flex>

            <Flex mb={4}>
              <UserCircle
                sx={{
                  width: "20px",
                  height: "20px",
                  flex: "0 0 20px",
                  mt: 2,
                  mr: 3,
                  color: "blue",
                }}
              />
              <Text variant="bold">
                Lower the cost of acquisition to allow for improved buying power
                and/or margins.
              </Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
    <Box bg="lightGray" variant="layout.fullWidth" py={[5, 6]}>
      <Container
        sx={{
          maxWidth: "1028px",
        }}
      >
        <Heading
          sx={{
            textAlign: "center",
            mb: 5,
          }}
        >
          Cross Sell | Up Sell
        </Heading>
        <Flex
          sx={{
            flexWrap: ["wrap", null, "nowrap", null],
          }}
        >
          <Box
            sx={{
              flexBasis: ["100%", null, "calc(50% - 1px)", null],
              mr: [0, null, 6, null],
            }}
          >
            <Box
              sx={{
                variant: "layout.feature",
              }}
            >
              <Expand sx={{ variant: "image.icon" }} />
              <Heading variant="subheadingCaps">Expand</Heading>
              <Text variant="body">
                Expand revenue opportunities within your consumer funnel through
                cross selling and upselling consumers via related offers and
                service via our extensive buyer networks
              </Text>
            </Box>
            <Box
              sx={{
                variant: "layout.feature",
              }}
            >
              <Match sx={{ variant: "image.icon" }} />
              <Heading variant="subheadingCaps">Match</Heading>
              <Text variant="body">
                Our proprietary matching technology presents only those
                advertisers interested in the type of consumer going through
                your funnel based on the intent signals that you provide to us.
              </Text>
            </Box>
          </Box>
          <Box
            sx={{
              flexBasis: ["100%", null, "calc(50% - 1px)", null],
              variant: "layout.feature",
            }}
          >
            <Conversion
              sx={{
                variant: "image.icon",
              }}
            />
            <Heading variant="subheadingCaps">
              Understanding your conversion funnel drop off points
            </Heading>
            <Box
              sx={{
                py: 4,
              }}
            >
              <Graphs
                sx={{
                  width: "100%",
                }}
              />
            </Box>
            <Flex
              sx={{
                textAlign: "left",
              }}
            >
              <BulletOne
                sx={{
                  flex: "0 0 16px",
                  mr: 3,
                  mt: "6px",
                }}
              />
              <Text
                variant="body"
                sx={{
                  color: "lightBlue",
                  fontWeight: "600",
                  mb: 3,
                }}
              >
                Expand revenue opportunities on consumers within the consumer
                funnel through cross selling additional services based on the
                consumer signals gained through your funnel.
              </Text>
            </Flex>
            <Flex
              sx={{
                textAlign: "left",
              }}
            >
              <BulletOne
                sx={{
                  flex: "0 0 16px",
                  mr: 3,
                  mt: "6px",
                }}
              />
              <Text
                variant="body"
                sx={{
                  color: "lightBlue",
                  fontWeight: "600",
                  mb: 3,
                }}
              >
                Lower the cost of acquisition to allow for improved buying power
                and/or margins.
              </Text>
            </Flex>
            <Flex
              sx={{
                textAlign: "left",
              }}
            >
              <BulletOne
                sx={{
                  flex: "0 0 16px",
                  mr: 3,
                  mt: "6px",
                }}
              />
              <Text
                variant="body"
                sx={{
                  color: "lightBlue",
                  fontWeight: "600",
                }}
              >
                Take advantage of our proprietary algorithms to match your
                consumers with the right buyers.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
    <Container
      py={[5, 6]}
      sx={{
        maxWidth: "1028px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
        }}
      >
        <Heading>Be assistive</Heading>
        <Text variant="body">
          Brands cannot ignore their customers for better assistance across the
          shopping experience.
        </Text>
      </Box>

      <Grid
        columns={[1, 2]}
        sx={{
          columnGap: 6,
          rowGap: 4,
        }}
      >
        <Box
          sx={{
            variant: "layout.feature",
          }}
        >
          <Journey
            sx={{
              variant: "image.icon",
            }}
          />
          <Heading variant="subheadingCaps">Journey Analysis</Heading>
          <Text variant="body">
            It starts with understanding your audience, what problems people are
            solving, what motivates them, and how do you help them find the
            answer.
          </Text>
        </Box>
        <Box
          sx={{
            variant: "layout.feature",
          }}
        >
          <Segment
            sx={{
              variant: "image.icon",
            }}
          />
          <Heading variant="subheadingCaps">Behavioral Segmentation</Heading>
          <Text variant="body">
            If you look close enough, you'll find common problems across
            individual consumers who in aggregate become highly valued audience
            segments.
          </Text>
        </Box>
        <Box
          sx={{
            variant: "layout.feature",
          }}
        >
          <Check
            sx={{
              variant: "image.icon",
            }}
          />
          <Heading variant="subheadingCaps">
            Right Content, Right Time, Right Person
          </Heading>
          <Text variant="body">
            It starts with understanding your audience, what problems people are
            solving, what motivates them, and how do you help them find the
            answer.
          </Text>
        </Box>
        <Box
          sx={{
            variant: "layout.feature",
          }}
        >
          <Fire
            sx={{
              variant: "image.icon",
            }}
          />
          <Heading variant="subheadingCaps">
            An Entirely New Way To Monetize
          </Heading>
          <Text variant="body">
            Today's consumers are overwhelmed with choice and need solutions
            that assist them the path for them in the moments that matter.
          </Text>
        </Box>
      </Grid>
    </Container>
  </Layout>
)
