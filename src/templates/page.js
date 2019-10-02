import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import { PageTitle } from "../styles"

const Page = ({ data }) => {
  const { title, content } = data.wpgraphql.page
  return (
    <div>
      <Layout>
      <h1>{title}</h1>
      <section className="container mx-auto text-center py-6 mb-12">

            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Call to Action</h1>
            <div className="w-full mb-4">	
                <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <h3 className="my-4 text-3xl leading-tight">Main Hero Message to sell yourself!</h3>	

            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action!</button>
                
        </section>

        <p className="content" dangerouslySetInnerHTML={{ __html: content }} />
        
      </Layout>
    </div>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
      }
    }
  }
`