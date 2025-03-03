export default ({ env }) => ({
	upload: {
		config: {
			provider: "strapi-provider-upload-supabase",
			providerOptions: {
				apiUrl: env("SUPABASE_API_URL"), // URL de l'API Supabase
				apiKey: env("SUPABASE_API_KEY"), // Clé API Supabase
				bucket: env("SUPABASE_BUCKET"), // Nom du bucket Supabase Storage
			},
		},
	},
});
