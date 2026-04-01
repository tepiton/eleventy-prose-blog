export default {
	// Site metadata
	title: "pborenstein.com",
	url: "https://pborenstein.com/",
	language: "en",
	description: "I know a little bit about a lot of things.",
	tagline: "I observed all the happenings beneath the sun, and I found that all is futile and pursuit of wind.",

	// Author information
	author: {
		name: "Philip Borenstein",
		email: "pborenstein@gmail.com",
		url: "https://pborenstein.com/about/",
		social: {
			github: "pborenstein",
			bluesky: "@pborenstein.com"
		}
	},

	// Feed configuration
	feed: {
		subtitle: "I observed all the happenings beneath the sun...",
		path: "/feed/feed.xml",
		id: "https://pborenstein.com/",
		limit: 10
	},

	// Build configuration
	build: {
		environment: process.env.ELEVENTY_ENV || "development"
	}
}
