import React from 'react';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../types/recipe';

interface HomePageProps {
	recipes: Recipe[];
	onSelectRecipe: (recipe: Recipe) => void;
}

const HomePage: React.FC<HomePageProps> = ({ recipes, onSelectRecipe }) => (
	<div>

		<section
			className="pt-20 pb-16 bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: "url('/StrawberryTart.jpg')",
			}}
		>
			<div className=" max-w-6xl mx-auto px-6 text-center rounded-xl p-8">
				<h1 className="text-5xl md:text-6xl font-bold text-[#FAF9F6] mb-6">
					Chez Nagisaのレシピノート
				</h1>
				<p className="text-xl text-[#FAF9F6] mb-10 max-w-3xl mx-auto">
					Chez Nagisaのレシピサイトへようこそ。<br />
					余計なものは加えず、素材の味を活かした、<br />
					からだにやさしいお菓子のレシピをご紹介しています。
				</p>

				<div className="mb-12">
					<a
						href="https://chez-nagisa.github.io/ChezNagisa-website/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block bg-[#8EB486] text-[#FDF7F4] px-6 py-3 rounded-full font-medium text-lg hover:bg-[#769d70] transition-colors shadow-lg"
					>
						カフェ Chez Nagisa の公式サイトへ
					</a>
				</div>
				{/* <button className="bg-[#8EB486] text-[#FDF7F4] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#769d70] transform hover:scale-105 transition-all duration-300 shadow-lg">
					レシピを見る
				</button> */}
			</div>
		</section>


		<section className="py-16 bg-[#FAF9F6]">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-[#655752] mb-4">Sweets Recipes</h2>
					<p className="text-[#997C70] text-lg">甘さ控えめで素材の味を活かした優しいお菓子</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{(recipes ?? []).slice(0, 6).map(recipe => (
 						<RecipeCard key={recipe.id} recipe={recipe} onClick={() => onSelectRecipe(recipe)} />
					))}

				</div>
			</div>
		</section>

	</div>
);

export default HomePage;
