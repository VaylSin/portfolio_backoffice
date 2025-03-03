/**
 * categorie controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
	"api::categorie.categorie",
	({ strapi }) => ({
		async findOne(ctx) {
			const { id } = ctx.params;

			// Récupérer la catégorie
			const categorie = await strapi.entityService.findOne(
				"api::categorie.categorie",
				id,
				{
					populate: ["articles"], // Peupler les relations si nécessaire
				}
			);

			if (!categorie) {
				return ctx.notFound("Categorie not found"); // Retourner une erreur 404 si la catégorie n'existe pas
			}

			// Retourner la catégorie
			return { data: categorie };
		},
	})
);
