const path = require('path')
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions


    if (node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node, 
            name: 'slug',
            value: slug
        })
        // console.log(node)
    }
}




// 1. Get path to template
// 2. Get markdown data 
// 3. Create new pages

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const journalTemplate = path.resolve('./src/templates/journal.js')
    const res = await graphql(`
        query{
            allMarkdownRemark{
                edges{
                  node{
                    fields{
                      slug
                    }
                  }
                }
              }
        }       
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: journalTemplate,
            path: `/journal/${edge.node.fields.slug}`,
            context: {
                slug : edge.node.fields.slug
            }
        })
    })


}