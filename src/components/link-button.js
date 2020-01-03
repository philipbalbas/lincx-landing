/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"

export default props => {
  return (
    <Link
      {...props}
      activeClassName="active"
      sx={{
        padding: "13px 48px",
        borderRadius: "3px",
        textDecoration: "none",
        display: "inline-block",
      }}
    />
  )
}
