'use client';

import React from 'react';
import { ChefHat, Clock, Leaf, Star } from 'lucide-react';

interface Recipe {
	id: number;
	name: string;
	image: string;
	prepTime: string;
	cookTime: string;
	difficulty: string;
	rating: number;
	description: string;
	ingredients: string[];
	instructions: string[];
}

interface Props {
	recipe: Recipe;
	onBack: () => void;
}

const RecipeDetail: React.FC<Props> = ({ recipe, onBack }) => (
	<div className="max-w-4xl mx-auto">
		<button
			onClick={onBack}
			className="my-7 flex items-center gap-2 text-[#8EB486] hover:text-[#769d70] transition-colors"
		>
			← Back to Recipes
		</button>

		<div className="bg-[#FAF9F6] rounded-xl shadow-lg overflow-hidden">
			<img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover" />

			<div className="p-8">
				<div className="flex justify-between items-start mb-6">
					<div>
						<h1 className="text-3xl font-bold text-gray-800 mb-2">{recipe.name}</h1>
						<p className="text-gray-600 text-lg">{recipe.description}</p>
					</div>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					<div>
						<h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
							<Leaf className="w-6 h-6 text-green-600" />
							材料
						</h2>
						<ul className="space-y-2">
							{recipe.ingredients.map((ingredient, index) => (
								<li key={index} className="flex items-center gap-3">
									<div className="w-2 h-2 bg-[#A1C181] rounded-full"></div>
									<span className="text-gray-700">{ingredient}</span>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
							<ChefHat className="w-6 h-6 text-green-600" />
							作り方
						</h2>
						<ol className="space-y-4">
							{recipe.instructions.map((instruction, index) => (
								<li key={index} className="flex gap-4">
									<span className="flex-shrink-0 w-8 h-8 bg-[#A1C181] text-[#FAF9F6] rounded-full flex items-center justify-center text-sm font-semibold">
										{index + 1}
									</span>
									<span className="text-gray-700 pt-1">{instruction}</span>
								</li>
							))}
						</ol>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default RecipeDetail;
