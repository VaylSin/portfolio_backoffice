export default [
	"strapi::errors",
	{
		name: "strapi::security",
		config: {
			contentSecurityPolicy: {
				directives: {
					"default-src": ["'self'", "https://skdigit.com"],
					"script-src": [
						"'self'",
						"'unsafe-inline'",
						"https://cdn.example.com",
					],
					"style-src": [
						"'self'",
						"'unsafe-inline'",
						"https://fonts.googleapis.com",
					],
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
	{
		name: "strapi::cors",
		config: {
			origin: [
				"http://localhost:3000", // localhost
				"https://preprod.skdigit.com", // préprod
				"https://admin.skdigit.fr", // BO
				"https://skdigit.com", // prod
			],
			methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
			headers: ["Content-Type", "Authorization"],
		},
	},
	"strapi::poweredBy",
	"strapi::logger",
	"strapi::query",
	"strapi::body",
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];
