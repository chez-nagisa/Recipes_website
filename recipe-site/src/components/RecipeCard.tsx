import React from 'react';
import { Recipe } from '../types/recipe';

type Props = {
	recipe: Recipe;
	onClick: () => void;
};

const RecipeCard: React.FC<Props> = ({ recipe, onClick }) => (
	<div
		className="bg-[#FAF9F6] rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
		onClick={onClick}
	>
		<div className="relative">
			<img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
		</div>
		<div className="p-4">
			<h3 className="font-bold text-lg text-[#685752] mb-2">{recipe.name}</h3>
			<p className="text-[#997C70] text-sm mb-3 line-clamp-2">{recipe.description}</p>
			{/* <div className="flex justify-between items-center text-xs text-gray-500">
			</div> */}
		</div>
	</div>
);

export default RecipeCard;
