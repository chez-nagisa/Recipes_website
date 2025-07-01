'use client';

interface Props {
	currentPage: string;
	setCurrentPage: (page: string) => void;
	setSelectedRecipe: (recipe: any) => void;
}

export default function Navigation({ currentPage, setCurrentPage, setSelectedRecipe }: Props) {
	return (
		<nav className="bg-[#997C70] shadow-md fixed w-full top-0 z-50">
			<div className="max-w-6xl mx-auto px-6">
				<div className="flex justify-between items-center h-16">
					{/* <div className="flex items-center gap-2">
						<Leaf className="w-8 h-8 text-green-600" />
						<span className="text-2xl font-bold text-gray-800">Chez Nagisa</span>
					</div> */}
					<div className="flex items-center gap-2">
						<img src="/logo.png" alt="Chez Nagisa Logo" className="w-8 h-8" />
						<span className="text-2xl font-heading text-[#FDF7F4]">Chez Nagisa</span>
					</div>

					<div className="hidden md:flex space-x-8">
						<button
							onClick={() => {
								setCurrentPage('home');
								setSelectedRecipe(null);
							}}
							className={`font-medium transition-colors ${currentPage === 'home' ? 'text-[#8EB486]' : 'text-[#FDF7F4] hover:text-[#8EB486]'}`}
						>
							Home
						</button>
						<button
							onClick={() => {
								setCurrentPage('blog');
								setSelectedRecipe(null);
							}}
							className={`font-medium transition-colors ${currentPage === 'blog' ? 'text-[#8EB486]' : 'text-[#FDF7F4] hover:text-[#8EB486]'}`}
						>
							Blog
						</button>
						<button
							onClick={() => {
								setCurrentPage('contact');
								setSelectedRecipe(null);
							}}
							className={`font-medium transition-colors ${currentPage === 'contact' ? 'text-[#8EB486]' : 'text-[#FDF7F4] hover:text-[#8EB486]'}`}
						>
							Contact
						</button>
					</div>

					<div className="flex md:hidden">
						<button className="text-gray-700">
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
