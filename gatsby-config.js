module.exports = {
	siteMetadata: {
		title: 'Jejakurcaci',
		author: 'Dani Effendi',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'Journal and Portfolio Site',
		keywords: 'Photography, Blog, Dani, Dani Effendi, Effendi, Jejakurcaci, Jejak Kurcaci',
		// twitter: 'https://twitter.com/amanhimself',
		// github: `https://github.com/amandeepmittal`,
		// medium: 'https://medium.com/@amanhimself',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: 'https://danieffendi.com/'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  path: `${__dirname}/content`,
			  name: 'content',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`
			}
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-relative-images`,
					{ 
						resolve: `gatsby-remark-images`,
						options: {
							// quality: 80,
							LinkImagesToOriginal: false,
							// maxWidth: 1280
						}
					}

				]
			}
		},
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-modal-routing`,
			options: {
			  // A selector to set react-modal's app root to, default is `#___gatsby`
			  // See http://reactcommunity.org/react-modal/accessibility/#app-element
			  appElement: '#___gatsby',
	  
			  // Object of props that will be passed to the react-modal container
			  // See http://reactcommunity.org/react-modal/#usage
			  modalProps: { },
			}
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: 'https://gmail.us10.list-manage.com/subscribe/post?u=d60717f3d07f21706b4b3630e&amp;id=2da012984f', // string; add your MC list endpoint here; see instructions below
				timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
			},
		},
		`gatsby-plugin-netlify-cms`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',

		
	]
};
