/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"

export default props => {
  return <Link {...props} activeClassName="active" />
}
