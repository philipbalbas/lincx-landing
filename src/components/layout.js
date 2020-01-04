/** @jsx jsx */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Global } from "@emotion/core"
import { jsx } from "theme-ui"

import Header from "./header"

import styled from "@emotion/styled"
import { Heading } from "@theme-ui/components"

const LayoutStyles = styled.div`
  font-family: "Open Sans", sans-serif;
`

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
    <>
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
          // maxWidth: 960,
          // padding: `0px 1.0875rem 1.45rem`,
          // paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div>
            <Heading variant="label">Solutions</Heading>
            <div>
              <ul>
                <li>Arborist</li>
                <li>Funnels</li>
              </ul>
            </div>
          </div>
          <div>
            <Heading variant="label">Company</Heading>
            <div>
              <ul>
                <li>About Us</li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>Legal</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
