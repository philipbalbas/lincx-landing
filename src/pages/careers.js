/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Heading, Text, Grid, Container } from "@theme-ui/components"
import LinkButton from "../components/link-button"
import UserCircle from "../images/user-circle.svg"

const CareersPage = () => (
  <Layout>
    <SEO title="Join Us" />
    <Box px={2} pt={[3, 4, 5, 6]} pb={[5, 6]}>
      <Box mb={5}>
        <Heading as="h1">Join our team</Heading>
        <Text variant="body" mb={3}>
          Are you energized about chasing audacious goals? Does the possibility
          of joining a team of highly motivated people, each contributing
          towards building the next market disrupting force keep you up at
          night? If so, then we want to hear from you. We are seeking strong
          opinionated, curious, humble (yet aggressive), and goal oriented
          individuals looking to join a team of similarly focused others (all
          from diverse backgrounds) to come together to impact industry and
          revolutionize tomorrow.
        </Text>

        <Text variant="body">
          Our values are on display in both how we live our personal lives, as
          well as, how we approach our work life. When you join the team, you
          should expect to be challenged, pushed to achieve, and thrive within
          an environment where we have your back. Below are a list of values
          that we embody and live by. We believe that these values are the
          bedrock to not only who we are, but also critical in supporting our
          big audacious goals.
        </Text>
      </Box>
      <Grid
        columns={[1, 2, 3]}
        mb={5}
        sx={{
          columnGap: [4, 5, 6],
          rowGap: [4, null, 5],
        }}
      >
        <Box>
          <UserCircle
            sx={{
              width: "48px",
              height: "48px",
              mb: [2, 3, 4],
              color: "primary",
            }}
          />
          <Heading variant="subheadingCaps">Diverse and Inclusive</Heading>
          <Text variant="body">
            We seek new team members who can come in and make an impact. It is
            our belief that the more diverse in background, religious
            persuasion, personal identity, and personal interests that the team
            is - the better we are as a whole.
          </Text>
        </Box>
        <Box>
          <UserCircle
            sx={{
              width: "48px",
              height: "48px",
              mb: [2, 3, 4],
              color: "primary",
            }}
          />
          <Heading variant="subheadingCaps">We are a team</Heading>
          <Text variant="body">
            We can only reach our moon shot, our big audacious gaols, our
            aspirations when we approach them as a team. Individually you can be
            a strong contributor or a rockstar, but collectively we are a
            team...a family...we will only cross the finish line together.
          </Text>
        </Box>
        <Box>
          <UserCircle
            sx={{
              width: "48px",
              height: "48px",
              mb: [2, 3, 4],
              color: "primary",
            }}
          />
          <Heading variant="subheadingCaps">Autonomy & Freedom</Heading>
          <Text variant="body">
            The future is yours to create. We seek those who can build, create,
            and do on their own. We will give you as much space as needed to
            meet (and surpass) your objectives. All of this...while still
            working collaboratively together as a team.
          </Text>
        </Box>
        <Box>
          <UserCircle
            sx={{
              width: "48px",
              height: "48px",
              mb: [2, 3, 4],
              color: "primary",
            }}
          />
          <Heading variant="subheadingCaps">Mindful</Heading>
          <Text variant="body">
            The reason we are here is to impact industry and revolutionize
            tomorrow. While we may have big lofty aspirations and we will do big
            things in our industry and the world, we must never forget that we
            belong within a larger community of industries, entities, and
            individuals with goals and aspirations as well. Never forget
            everything we do we do to impact others beyond any benefit to
            ourselves.
          </Text>
        </Box>
        <Box>
          <UserCircle
            sx={{
              width: "48px",
              height: "48px",
              mb: [2, 3, 4],
              color: "primary",
            }}
          />
          <Heading variant="subheadingCaps">Personal Growth</Heading>
          <Text variant="body">
            Strongest and most lasting personal (and professional) growth comes
            from pushing past boundaries and being open to making mistakes. Many
            of the great leaders and achievers have only gotten there through
            making big mistakes, and got back up and kept pushing forward. Let's
            make huge mistakes together and from there break every record and
            revolutionize everything we set out to impact.
          </Text>
        </Box>
        <Box>
          <UserCircle
            sx={{
              width: "48px",
              height: "48px",
              mb: [2, 3, 4],
              color: "primary",
            }}
          />
          <Heading variant="subheadingCaps">Life Balance at Work</Heading>
          <Text variant="body">
            We spend more time within our work environments than almost anywhere
            else (outside of family and home), so it is extremely important to
            maintain a healthy life balance on the job. Always pursue something
            that inspires you and where you can find personal growth and
            fulfillment. Hopefully, you can achieve this both within your 'work'
            environment, as well as, outside of work.
          </Text>
        </Box>
      </Grid>
      <Box bg="muted" p={4}>
        <Container
          sx={{
            maxWidth: "350px",
            textAlign: "center",
          }}
        >
          <Heading>We are hiring</Heading>
          <Text variant="body" mb={4}>
            If the above resonates with you, reach out to us and learn more
            about the roles we are hiring for.
          </Text>
          <LinkButton to="/" sx={{ variant: "buttons.secondary" }}>
            Get in touch
          </LinkButton>
        </Container>
      </Box>
    </Box>
  </Layout>
)

export default CareersPage
