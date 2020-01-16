/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

import { Heading } from '@theme-ui/components';

const Footer = () => (
  <footer
    sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      py: [ 4, 5 ],
      flexWrap: [ 'wrap', 'nowrap' ]
    }}
  >
    <div
      sx={{
        mr: [ 5, 6 ]
      }}
    >
      <Heading variant="label">Solutions</Heading>
      <div>
        <ul
          sx={{
            padding: '0',
            margin: '0',
            listStyle: 'none'
          }}
        >
          <li
            sx={{
              mb: 2
            }}
          >
            <Link
              to="/arborist"
              sx={{
                fontSize: 0,
                color: 'black',
                textDecoration: 'none',
                transition: 'all 0.2s',
                ':hover': {
                  color: 'primary',
                  pb: '2px',
                  borderBottom: '1px solid #0564fe'
                }
              }}
            >
              Arborist
            </Link>
          </li>
          <li
            sx={{
              mb: 2
            }}
          >
            <Link
              sx={{
                fontSize: 0,
                color: 'black',
                textDecoration: 'none',
                transition: 'all 0.2s',
                ':hover': {
                  color: 'primary',
                  pb: '2px',
                  borderBottom: '1px solid #0564fe'
                }
              }}
              to="/funnels"
            >
              Funnels
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <Heading variant="label">Company</Heading>
      <div>
        <ul
          sx={{
            padding: '0',
            margin: '0',
            listStyle: 'none'
          }}
        >
          <li
            sx={{
              mb: 2
            }}
          >
            <Link
              sx={{
                fontSize: 0,
                color: 'black',
                textDecoration: 'none',
                transition: 'all 0.2s',
                ':hover': {
                  color: 'primary',
                  pb: '2px',
                  borderBottom: '1px solid #0564fe'
                }
              }}
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li
            sx={{
              mb: 2
            }}
          >
            <Link
              sx={{
                fontSize: 0,
                color: 'black',
                textDecoration: 'none',
                transition: 'all 0.2s',
                ':hover': {
                  color: 'primary',
                  pb: '2px',
                  borderBottom: '1px solid #0564fe'
                }
              }}
              to="/careers"
            >
              Careers
            </Link>
          </li>
          <li
            sx={{
              mb: 2
            }}
          >
            {' '}
            <Link
              sx={{
                fontSize: 0,
                color: 'black',
                textDecoration: 'none',
                transition: 'all 0.2s',
                ':hover': {
                  color: 'primary',
                  pb: '2px',
                  borderBottom: '1px solid #0564fe'
                }
              }}
              to="/"
            >
              Legal
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
