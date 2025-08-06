import React from 'react';

const BlogPage = () => {
	const blogPosts = [
		{
			id: 1,
			title: "The Power of Natural Sweeteners: Beyond Refined Sugar",
			excerpt:
				"Discover how natural alternatives like dates, maple syrup, and stevia can transform your cooking while supporting your wellness journey.",
			date: "June 20, 2025",
			readTime: "5 min read",
			image:
				"https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop",
		},
		{
			id: 2,
			title: "Meal Prep Magic: Healthy Eating Made Simple",
			excerpt:
				"Learn how to prepare nutrient-dense meals in advance, saving time while nourishing your body with wholesome ingredients.",
			date: "June 18, 2025",
			readTime: "7 min read",
			image:
				"https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&h=250&fit=crop",
		},
		{
			id: 3,
			title: "Anti-Inflammatory Foods: Nature's Medicine Cabinet",
			excerpt:
				"Explore the healing power of turmeric, ginger, leafy greens, and other natural ingredients that fight inflammation.",
			date: "June 15, 2025",
			readTime: "6 min read",
			image:
				"https://images.unsplash.com/photo-1506368083636-6defb67639a7?w=400&h=250&fit=crop",
		},
	];

	return (
		<div className="py-16">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-800 mb-4">準備中...</h1>
					{/* <p className="text-gray-600 text-lg">
						Insights, tips, and inspiration for your healthy living journey
					</p> */}
				</div>

				{/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{blogPosts.map((post) => (
						<article
							key={post.id}
							className="bg-[#FAF9F6] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
						>
							<img
								src={post.image}
								alt={post.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<div className="flex justify-between items-center text-sm text-gray-500 mb-3">
									<span>{post.date}</span>
									<span>{post.readTime}</span>
								</div>
								<h2 className="text-xl font-bold text-gray-800 mb-3">
									{post.title}
								</h2>
								<p className="text-gray-600 mb-4">{post.excerpt}</p>
								<button className="text-green-600 hover:text-green-700 font-semibold">
									Read More →
								</button>
							</div>
						</article>
					))}
				</div> */}
			</div>
		</div>
	);
};

export default BlogPage;
