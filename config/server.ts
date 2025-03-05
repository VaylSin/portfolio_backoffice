export default ({ env }) => ({
	host: env("HOST", "0.0.0.0"),
	port: env.int("PORT", 8000),
	url: env("PUBLIC_URL", "https://admin.skdigit.fr"),
	app: {
		keys: env.array("APP_KEYS"),
	},
});
