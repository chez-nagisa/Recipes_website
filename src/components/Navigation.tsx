'use client';

import React, { useState } from 'react';
import { Recipe } from '../types/recipe';

interface Props {
	currentPage: string;
	setCurrentPage: (page: string) => void;
	setSelectedRecipe: (recipe: Recipe | null) => void;
}

export default function Navigation({ currentPage, setCurrentPage, setSelectedRecipe }: Props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleNavClick = (page: string) => {
		setCurrentPage(page);
		setSelectedRecipe(null);
		setIsMenuOpen(false);
	};

	const navItem = (page: string, label: string) => (
		<button
			onClick={() => handleNavClick(page)}
			className={`block md:inline font-medium transition-colors ${
				currentPage === page ? 'text-[#8EB486]' : 'text-[#FDF7F4] hover:text-[#8EB486]'
			}`}
		>
			{label}
		</button>
	);

	return (
		<nav className="bg-[#997C70] shadow-md fixed w-full top-0 z-50">
			<div className="max-w-6xl mx-auto px-6">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center gap-2">
						<img src="/logo.png" alt="Chez Nagisa Logo" className="w-8 h-8" />
						<span className="text-2xl font-heading text-[#FDF7F4]">Chez Nagisa</span>
					</div>

					{/* PCナビゲーション */}
					<div className="hidden md:flex space-x-8">
						{navItem('home', 'Home')}
						{navItem('blog', 'Blog')}
						{navItem('contact', 'Contact')}
					</div>

					{/* モバイル用ハンバーガー */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-[#FDF7F4] focus:outline-none"
						>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>

				{/* モバイルメニュー */}
				{isMenuOpen && (
					<div className="md:hidden mt-2 space-y-2">
						{navItem('home', 'Home')}
						{navItem('blog', 'Blog')}
						{navItem('contact', 'Contact')}
					</div>
				)}
			</div>
		</nav>
	);
}
