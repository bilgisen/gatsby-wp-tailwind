import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";


const Blog = ({ data, pageContext }) => {
  const posts = data.wpgraphql.posts.nodes
  const { pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext
  return (
    <Layout>

    <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block mx-auto w-1/2"
          src={catAndHumanIllustration}
        />

        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold no-underline text-gray-900"
            href="https://tailwindcss.com/"
          >
            Tailwind
          </a>
          , a utility-first CSS framework.
        </p>
      </section>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query GET_POSTS($ids: [ID]) {
    wpgraphql {
      posts(first: 3, where: { in: $ids }) {
        nodes {
          id
          uri
          title
          excerpt
          date
          featuredImage {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`