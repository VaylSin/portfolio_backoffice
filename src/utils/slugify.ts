export function slugify(text: string): string {
	return text
		.toLowerCase() // Convertir en minuscules
		.replace(/[^\w\s-]/g, "") // Supprimer les caractères spéciaux
		.replace(/[\s_-]+/g, "-") // Remplacer les espaces et underscores par des tirets
		.replace(/^-+|-+$/g, ""); // Supprimer les tirets en début et fin
}
