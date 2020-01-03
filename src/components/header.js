/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const HeaderStyles = styled.header`
  margin-bottom: 1.45rem;
`

const InnerHeader = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Nav = styled.div`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding-left: 40px;
  }
`

const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 3.55px;
  color: black;
`

const Header = ({ siteTitle }) => (
  <header
    sx={{
      backgound: "white",
      marginBottom: 1,
      p: 3,
      maxWidth: "960px",
      m: "0 auto",
    }}
  >
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        sx={{
          color: "inherit",
          textDecoration: "none",
          textTransform: "uppercase",
          fontSize: "18px",
          letterSpacing: "3.75px",
          "&.active": {
            color: "primary",
          },
        }}
      >
        {siteTitle}
      </Link>
      <nav>
        <ul
          sx={{
            listStyle: "none",
            margin: 0,
            display: ["none", "flex"],
            padding: 0,
            li: {
              marginLeft: [2, 3, "40px"],
            },
          }}
        >
          <li>Solutions</li>
          <li>Advertise</li>
          <li>Company</li>
          <li>Contact us</li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
