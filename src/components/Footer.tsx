import React from 'react';

const Footer = () => (
	<footer className="bg-[#997C70] text-[#FAF9F6] py-12">
		<div className="max-w-6xl mx-auto px-6">
			<div className="flex flex-col md:flex-row justify-between items-center">
				<div className="flex items-center gap-2 mb-4 md:mb-0">
					<img
						src="/logo.png"
						alt="Chez Nagisa Logo"
						className="w-8 h-8"
					/>
					<span className="text-2xl font-bold">Chez Nagisa</span>
				</div>

				<div className="text-center md:text-right">
					<p className="text-sm text-gray">© 2025 Chez Nagisa.</p>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
