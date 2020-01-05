/** @jsx jsx */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Global } from "@emotion/core"
import { jsx } from "theme-ui"
import { Heading, Container } from "@theme-ui/components"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Global
        styles={theme => ({
          "*": {
            boxSizing: "border-box",
            fontFamily: "Open Sans, sans-serif",
          },
          body: {
            margin: 0,
          },
        })}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
