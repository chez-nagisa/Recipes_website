'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
import RecipeDetail from '../components/RecipeDetail';
import recipes from '../data/recipes';
import { Recipe } from '../types/recipe';


// export default function App() {
// 	const [currentPage, setCurrentPage] = useState('home');
// 	const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

// 	return (
// 		<div className="min-h-screen bg-gray">
// 			<Navigation setCurrentPage={setCurrentPage} setSelectedRecipe={setSelectedRecipe} currentPage={currentPage} />
// 			<main className="pt-16">
// 				{selectedRecipe ? (
// 					<RecipeDetail recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
// 				) : currentPage === 'home' ? (
// 					<HomePage recipes={recipes} onSelectRecipe={setSelectedRecipe} />
// 				) : 
// 				currentPage === 'blog' ? (
// 					<BlogPage />
// 				) : (
// 					<ContactPage />
// 				)}
// 			</main>
// 			<Footer />
// 		</div>
// 	);
// }

export default function App() {
	const [currentPage, setCurrentPage] = useState('home');
	const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

	return (
		<div className="min-h-screen flex flex-col bg-[#FDF7F4]">
			<Navigation setCurrentPage={setCurrentPage} setSelectedRecipe={setSelectedRecipe} currentPage={currentPage} />

			<main className="flex-grow pt-16">
				{selectedRecipe ? (
					<RecipeDetail recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
				) : currentPage === 'home' ? (
					<HomePage recipes={recipes} onSelectRecipe={setSelectedRecipe} />
				) : currentPage === 'blog' ? (
					<BlogPage />
				) : (
					<ContactPage />
				)}
			</main>

			<Footer />
		</div>
	);
}
