import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {/* --------------------------------- */}
      {/* code below added by Xiaoyang Wang */}
      <div class="navigation">
        <div class="subheader">
          <ul>
            <h3>
              <a href="https://daomao-first-netlify-site.netlify.app"><li>Home</li></a>
              <a href="https://daomao-first-netlify-site.netlify.app/page-2/"><li>Page_2</li></a>
              <a href="https://daomao-first-netlify-site.netlify.app/using-typescript/"><li>GoToUsingTypescript</li></a>
            </h3>
          </ul>
        </div>
      </div>
      {/* code above added by Xiaoyang Wang */}
      {/* --------------------------------- */}
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
