import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"


const CategoryPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet title={title} />
    <div>
      <h4>
        <Link to={`/`}> {title} </Link>
      </h4>
      <h1>All Categories</h1>
      <ol>
        {group.map(category => (
          <li key={category.fieldValue}>
            {'  '}
            <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
             {category.fieldValue} ({category.totalCount})
            </Link>
            {', '}
          </li>
        ))}
      </ol>
      
    </div>
  </div>
)

CategoryPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default CategoryPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 100) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`