// src/api/article/controllers/article.ts

import { factories } from "@strapi/strapi";
import { slugify } from "../../../utils/slugify";

export default factories.createCoreController(
	"api::article.article",
	({ strapi }) => ({
		async findOne(ctx) {
			const { id } = ctx.params;

			// Récupérer l'article
			const article = await strapi.entityService.findOne(
				"api::article.article",
				id,
				{
					populate: ["categories", "image"], // Peupler les relations si nécessaire
				}
			);

			if (!article) {
				return ctx.notFound("Article not found"); // Retourner une erreur 404 si l'article n'existe pas
			}

			// Retourner l'article
			return { data: article };
		},
		async create(ctx) {
			const { data } = ctx.request.body;

			// Générer le slug à partir du titre
			const slug = slugify(data.title);

			// Vérifier si un article avec ce slug existe déjà
			const existingArticle = await strapi.db
				.query("api::article.article")
				.findOne({
					where: { slug },
				});

			if (existingArticle) {
				return ctx.badRequest("Un article avec ce titre existe déjà");
			}

			// Injecter le slug dans les données
			data.slug = slug;

			// Appeler la méthode create du core controller
			return super.create(ctx);
		},

		async update(ctx) {
			const { id } = ctx.params;
			const { data } = ctx.request.body;

			// Générer le slug à partir du titre (si le titre est modifié)
			if (data.title) {
				const slug = slugify(data.title);

				// Vérifier si un autre article avec ce slug existe déjà
				const existingArticle = await strapi.db
					.query("api::article.article")
					.findOne({
						where: { slug, id: { $ne: id } }, // Exclure l'article actuel
					});

				if (existingArticle) {
					return ctx.badRequest("Un article avec ce titre existe déjà");
				}

				// Injecter le slug dans les données
				data.slug = slug;
			}

			// Appeler la méthode update du core controller
			return super.update(ctx);
		},
	})
);
