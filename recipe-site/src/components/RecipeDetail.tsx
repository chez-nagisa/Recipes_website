'use client';

import React from 'react';
import { ChefHat, Leaf } from 'lucide-react';

interface Recipe {
	id: number;
	name: string;
	image: string;
	description: string;
	ingredients: {
		[category: string]: string[] | undefined;
	};
	instructions: string[];
}

interface Props {
	recipe: Recipe;
	onBack: () => void;
}

const RecipeDetail: React.FC<Props> = ({ recipe, onBack }) => (
	<div className="max-w-4xl mx-auto mb-10">
		<button
			onClick={onBack}
			className="my-7 flex items-center gap-2 text-[#8EB486] hover:text-[#769d70] transition-colors"
		>
			← 戻る
		</button>

		<div className="bg-[#FAF9F6] rounded-xl shadow-lg overflow-hidden">
			<img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover" />

			<div className="p-8">
				<div className="flex justify-between items-start mb-6">
					<div>
						<h1 className="text-3xl font-bold text-[#685752] mb-2">{recipe.name}</h1>
						<p className="text-[#997C70] text-lg">{recipe.description}</p>
					</div>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{/* 材料セクション */}
					<div>
						<h2 className="text-2xl font-bold text-[#685752] mb-4 flex items-center gap-2">
							<Leaf className="w-6 h-6 text-[#8EB486]" />
							材料
						</h2>

						{Object.entries(recipe.ingredients).map(([category, items]) => (
							<div key={category} className="mb-4">
								<h3 className="text-xl font-semibold text-[#8EB486] mb-2">{category}</h3>
								<ul className="space-y-2 ml-4">
									{items?.map((ingredient, index) => (<li key={index} className="flex items-center gap-3">
    <div className="w-2 h-2 bg-[#A1C181] rounded-full"></div>
    <span className="text-[#685752]">{ingredient}</span>
  </li>
))}
								</ul>
							</div>
						))}
					</div>

					{/* 作り方セクション */}
					<div>
						<h2 className="text-2xl font-bold text-[#685752] mb-4 flex items-center gap-2">
							<ChefHat className="w-6 h-6 text-[#685752]" />
							作り方
						</h2>
						<ol className="space-y-4">
							{recipe.instructions.map((instruction, index) => (
								<li key={index} className="flex gap-4">
									<span className="flex-shrink-0 w-8 h-8 bg-[#A1C181] text-[#FAF9F6] rounded-full flex items-center justify-center text-sm font-semibold">
										{index + 1}
									</span>
									<span className="text-[#685752] pt-1">{instruction}</span>
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
