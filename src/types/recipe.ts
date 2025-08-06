// src/types/recipe.ts
export type Recipe = {
	id: number;
	name: string;
	image: string;
	description: string;
	ingredients: {
		[category: string]: string[] | undefined;
	};
	instructions: string[];
};
