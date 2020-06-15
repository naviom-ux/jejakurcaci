const path = require('path')
const createPaginatedPages = require('gatsby-paginate')
const _ = require("lodash")

// Making sure frontmatter images in netlifycms to works
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    
    // Making sure frontmatter images in netlifycms to works
    fmImagesToRelative(node);

    

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



// Create pages for journal and photography separately using two separate
// queries. We use the `graphql` function which returns a Promise
// and ultimately resolve all of them using Promise.all(Promise[])
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const journalTemplate = path.resolve('./src/templates/journal.js')
    const photographyTemplate = path.resolve('./src/templates/photography.js')
    
    const tagTemplate = path.resolve("src/templates/tags.js")
    const catPhotographyTemplate = path.resolve("src/templates/photography-category.js")

    // Individual journals pages
	const journals = graphql(`
    {
        journals: allMarkdownRemark(
            filter: {
                frontmatter: {type: {eq: "journal"}}
            },
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    frontmatter{
                        title
                        category
                    }
                    fields {
                        slug
                    }
                }
            }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
              fieldValue
            }
          }

        categoriesGroup:allMarkdownRemark(limit: 2000){
            group(field: frontmatter___category) {
                fieldValue
            }
        }

    }
    `).then(result => {
        if (result.errors) {
            Promise.reject(result.errors);
        }


        // Create journal pages
        result.data.journals.edges.forEach(({ node }) => {
            createPage({
                component: journalTemplate,
                path: `/journal/${node.fields.slug}`,
                context: {
                    slug: node.fields.slug
                }
            });
        });

        // Extract tag data from query
        const tags = result.data.tagsGroup.group
        // Make tag pages
        tags.forEach(tag => {
            createPage({
                path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
                component: tagTemplate,
                context: {
                    tag: tag.fieldValue,
                },
            })
        })

        // Extract category data from query
        const categories = result.data.categoriesGroup.group
        // Make category pages
        categories.forEach(category => {
            createPage({
                path: `/photography/${_.kebabCase(category.fieldValue)}/`,
                component: catPhotographyTemplate,
                context: {
                    category: category.fieldValue,
                },
            })
        })

        // Pagination for journal listing page
        createPaginatedPages({
            edges: result.data.journals.edges,
            createPage: createPage,
            pageTemplate: 'src/templates/listing-test.js',
            pageLength: 3,
            pathPrefix: 'journal',
            buildPath: (index, pathPrefix) =>
                index > 1 ? `journal/${index}` : `/journal`, // This is optional and this is the default
        });
    });

    // Individual photographs pages
    const photographs = graphql(`
        {
            photographs: allMarkdownRemark(
                filter: {
                    frontmatter: {type: {eq: "photography"}}
                },
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            Promise.reject(result.errors);
        }

        // Create photography pages
        result.data.photographs.edges.forEach(({ node }) => {
            createPage({
                component: photographyTemplate,
                path: `/photography/${node.fields.slug}`,
                context: {
                    slug: node.fields.slug
                }
            });
        });

    });

    // Return a Promise which would wait for both the queries to resolve
    return Promise.all([journals, photographs]);

}


// Make sure every image in frontmatter will be a File not a String
exports.sourceNodes = ({ actions, schema }) => {
    const { createTypes } = actions
    createTypes(`
      type MarkdownRemarkFrontmatter {
        image: File
      }
  
      type MarkdownRemark implements Node {
        frontmatter: MarkdownRemarkFrontmatter
      }
    `)
  }