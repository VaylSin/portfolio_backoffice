export default [
	"strapi::errors",
	"strapi::security",
	{
		name: "strapi::security",
		config: {
			contentSecurityPolicy: {
				directives: {
					"img-src": [
						"'self'",
						"data:",
						"blob:",
						"https://market-assets.strapi.io",
						"https://rkiyjztymcjhibzszhac.supabase.co",
					],
				},
			},
		},
	},
	"strapi::cors",
	"strapi::poweredBy",
	"strapi::logger",
	"strapi::query",
	"strapi::body",
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];
