import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Meaningful experiences.</h1>
      <p>
        We connect consumers who are actively reaching, comparing, and in market
        for products and services with solutions optimized to their needs. We
        empower marketers to reach people in the moments they're making purchase
        decisions.
      </p>
      <Link to="/">Get in touch</Link>
    </div>
    <div>
      <div>
        <div>Solutions</div>
        <div>Your offer just got better.</div>
        <div>Actionable solutions that improve your revenue per visitor.</div>
        <div>
          <Link>See Funnels</Link>
          <Link>See Arborist</Link>
        </div>
      </div>
      <div>
        <div>Advertise with us</div>
        <div>In market audiences that perform.</div>
        <div>
          Connect with customer who are actively researching and comparing
        </div>
        <div>
          <Link>Learn More</Link>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div>Understand</div>
        <div>The person behind the purchase.</div>
      </div>
      <div>
        <div>Personalize</div>
        <div>The individual experience.</div>
      </div>
      <div>
        <div>Automate</div>
        <div>Audience segments that deliver on customer needs.</div>
      </div>
      <div>
        <div>Grow</div>
        <div>Audiences that scale.</div>
      </div>
    </div>
    <div>
      <div>Path for Funnels</div>
      <div>
        <div>
          <div>
            <div>Funnel Fail Points</div>
            <div>
              Don't limit how you can service each consumer that comes through
              your funnel. We have an extensive buyer network to network to
              match those consumers that don't fit your primary back end buyers.
            </div>
          </div>
          <div>
            <div>Funnel Cross Selling | Upselling</div>
            <div>
              Expand what you offer those consumers going through your funnel,
              and lower your CPL by cross selling and upselling each consumer.
            </div>
          </div>
          <div>
            <div>Thank You Page</div>
            <div>
              We offer single campaigns or multi-advertiser listings that will
              complement the consumer experience across 30+ verticals.
            </div>
          </div>
        </div>
        <div>
          <img src="#" alt="" />
        </div>
      </div>
    </div>
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <div>Arborist API</div>
        <div>
          Arborist is an API driven matching engine that optimally connects
          shoppers with products and services tailored to their precise needs,
          while protecting consumer privacy and limiting who has access to the
          customer's personal information.
        </div>
        <Link>Learn More</Link>
      </div>
    </div>
    <div>
      <div>Get Started</div>
      <div>
        <div>Monetize with us</div>
        <div>
          Grow your business with us by integrating solutions that increase your
          revenue per customer.
        </div>
      </div>
      <div>
        <div>Advertise with us</div>
        <div>
          Get in front of customers when they are ready to engage. Only pay for
          results.
        </div>
      </div>
    </div>
    <div>
      <div>
        <div>Solutions</div>
        <div>
          <ul>
            <li>Arborist</li>
            <li>Funnels</li>
          </ul>
        </div>
      </div>
      <div>
        <div>Company</div>
        <div>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
