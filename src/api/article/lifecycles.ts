import { slugify } from "../../utils/slugify";

export default {
	async beforeCreate(event) {
		const { data } = event.params;

		// Générer le slug à partir du titre
		data.slug = slugify(data.title);
		console.log("Slug généré :", data.slug);

		// Vérifier si un article avec ce slug existe déjà
		const existingArticle = await strapi.db
			.query("api::article.article")
			.findOne({
				where: { slug: data.slug },
			});

		if (existingArticle) {
			throw new Error("Un article avec ce titre existe déjà");
		}
	},

	async beforeUpdate(event) {
		const { data, where } = event.params;

		// Générer le slug à partir du titre (si le titre est modifié)
		if (data.title) {
			const slug = slugify(data.title);

			// Vérifier si un autre article avec ce slug existe déjà
			const existingArticle = await strapi.db
				.query("api::article.article")
				.findOne({
					where: { slug, id: { $ne: where.id } }, // Exclure l'article actuel
				});

			if (existingArticle) {
				throw new Error("Un article avec ce titre existe déjà");
			}

			// Injecter le slug dans les données
			data.slug = slug;
		}
	},
};
