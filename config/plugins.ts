export default ({
	env,
}: {
	env: (key: string, defaultValue?: any) => any;
}) => ({
	upload: {
		config: {
			provider: "strapi-provider-upload-supabase",
			providerOptions: {
				apiUrl: env("SUPABASE_API_URL"),
				apiKey: env("SUPABASE_API_KEY"),
				bucket: env("SUPABASE_BUCKET"),
			},
		},
	},
});
