// 'use client';

// import React from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react';

// const ContactPage = () => (
// 	<div className="py-16">
// 		<div className="max-w-4xl mx-auto px-6">
// 			<div className="text-center mb-12">
// 				<h1 className="text-4xl font-bold text-gray-800 mb-4">お問い合わせ</h1>
// 				<p className="text-gray-600 text-lg">We'd love to hear from you! Share your wellness journey or ask any questions.</p>
// 			</div>

// 			<div className="grid md:grid-cols-2 gap-12">
// 				<div>
// 					<h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>

// 					<div className="space-y-6">
// 						<div className="flex items-center gap-4">
// 							<Mail className="w-6 h-6 text-green-600" />
// 							<div>
// 								<h3 className="font-semibold text-gray-800">Email</h3>
// 								<p className="text-gray-600">nagisahara.dev@gmail.com</p>
// 							</div>
// 						</div>

// 						{/* <div className="flex items-center gap-4">
// 							<Phone className="w-6 h-6 text-green-600" />
// 							<div>
// 								<h3 className="font-semibold text-gray-800">Phone</h3>
// 								<p className="text-gray-600">+1 (555) 123-4567</p>
// 							</div>
// 						</div> */}

// 						{/* <div className="flex items-center gap-4">
// 							<MapPin className="w-6 h-6 text-green-600" />
// 							<div>
// 								<h3 className="font-semibold text-gray-800">Location</h3>
// 								<p className="text-gray-600">Wellness Kitchen Studio<br />123 Healthy Street, Green City</p>
// 							</div>
// 						</div> */}
// 					</div>

// 					<div className="mt-8 p-6 bg-[#A1C181]-50 rounded-xl">
// 						<h3 className="font-bold text-gray-800 mb-3">Join Our Newsletter</h3>
// 						<p className="text-gray-600 mb-4">Get weekly recipes and wellness tips delivered to your inbox!</p>
// 						<div className="flex gap-2">
// 							<input
// 								type="email"
// 								placeholder="Your email address"
// 								className="flex-1 px-4 py-2 border border-[#997C70] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
// 							/>
// 							<button className="bg-[#A1C181] text-[#FAF9F6] px-6 py-2 rounded-lg hover:bg-[#A1C181]-700 transition-colors">
// 								Subscribe
// 							</button>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="bg-[#FAF9F6] rounded-xl shadow-lg p-8">
// 					<h2 className="text-2xl font-bold text-[#685752] mb-6">お問い合わせフォーム</h2>

// 					<form className="space-y-4">
// 						<div>
// 							<label className="block text-[#685752] font-medium mb-2">お名前</label>
// 							<input
// 								type="text"
// 								className="w-full px-4 py-3 border border-[#997C70] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EB486]"
// 								placeholder="お名前を入力してください"
// 							/>
// 						</div>

// 						<div>
// 							<label className="block text-[#685752] font-medium mb-2">メールアドレス</label>
// 							<input
// 								type="email"
// 								className="w-full px-4 py-3 border border-[#997C70] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EB486]"
// 								placeholder="メールアドレスを入力してください"
// 							/>
// 						</div>

// 						<div>
// 							<label className="block text-[#685752] font-medium mb-2">件名</label>
// 							<input
// 								type="text"
// 								className="w-full px-4 py-3 border border-[#997C70] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EB486]"
// 								placeholder="ご用件を入力してください"
// 							/>
// 						</div>

// 						<div>
// 							<label className="block text-[#685752] font-medium mb-2">メッセージ</label>
// 							<textarea
// 								rows={5}
// 								className="w-full px-4 py-3 border border-[#997C70] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EB486]"
// 								placeholder="ご質問やご意見をご記入ください"
// 							></textarea>
// 						</div>

// 						<button className="w-full bg-[#8EB486] text-[#FDF7F4] py-3 rounded-lg font-semibold hover:bg-[#769d70] transition-colors">
// 							送信する
// 						</button>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// );

// export default ContactPage;

'use client';

import React from 'react';
import { Mail, Instagram } from 'lucide-react';
import InstagramWidget from '../components/InstagramWidget'; 

const ContactPage = () => (
	<div className="py-16 bg-[#FDF7F4] min-h-screen">
		<div className="max-w-2xl mx-auto px-6 text-center">
			<h1 className="text-4xl font-bold text-[#685752] mb-6">お問い合わせ</h1>
			<p className="text-lg text-[#997C70] mb-12">
				お仕事のご依頼・コラボなどお気軽にご連絡ください。
			</p>

			<div className="space-y-8">
				<div className="flex items-center justify-center gap-4">
					<Mail className="w-6 h-6 text-[#8EB486]" />
					<span className="text-[#685752] text-lg">nagisahara.dev@gmail.com</span>
				</div>

				<div className="flex items-center justify-center gap-4">
					<Instagram className="w-6 h-6 text-[#8EB486]" />
					<a
						href="https://www.instagram.com/chez_nagisa/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#685752] text-lg underline hover:text-[#8EB486] transition-colors"
					>
						@chez_nagisa
					</a>
				</div>
			</div>
			<div className="mt-4">
				<InstagramWidget />
			</div>
		</div>
	</div>
);

export default ContactPage;
