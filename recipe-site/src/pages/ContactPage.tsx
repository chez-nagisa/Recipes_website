'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => (
	<div className="py-16">
		<div className="max-w-4xl mx-auto px-6">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h1>
				<p className="text-gray-600 text-lg">We'd love to hear from you! Share your wellness journey or ask any questions.</p>
			</div>

			<div className="grid md:grid-cols-2 gap-12">
				<div>
					<h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>

					<div className="space-y-6">
						<div className="flex items-center gap-4">
							<Mail className="w-6 h-6 text-green-600" />
							<div>
								<h3 className="font-semibold text-gray-800">Email</h3>
								<p className="text-gray-600">hello@healthyrecipes.com</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<Phone className="w-6 h-6 text-green-600" />
							<div>
								<h3 className="font-semibold text-gray-800">Phone</h3>
								<p className="text-gray-600">+1 (555) 123-4567</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<MapPin className="w-6 h-6 text-green-600" />
							<div>
								<h3 className="font-semibold text-gray-800">Location</h3>
								<p className="text-gray-600">Wellness Kitchen Studio<br />123 Healthy Street, Green City</p>
							</div>
						</div>
					</div>

					<div className="mt-8 p-6 bg-[#A1C181]-50 rounded-xl">
						<h3 className="font-bold text-gray-800 mb-3">Join Our Newsletter</h3>
						<p className="text-gray-600 mb-4">Get weekly recipes and wellness tips delivered to your inbox!</p>
						<div className="flex gap-2">
							<input
								type="email"
								placeholder="Your email address"
								className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
							/>
							<button className="bg-[#A1C181] text-[#FAF9F6] px-6 py-2 rounded-lg hover:bg-[#A1C181]-700 transition-colors">
								Subscribe
							</button>
						</div>
					</div>
				</div>

				<div className="bg-[#FAF9F6] rounded-xl shadow-lg p-8">
					<h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>

					<form className="space-y-4">
						<div>
							<label className="block text-gray-700 font-medium mb-2">Name</label>
							<input
								type="text"
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
								placeholder="Your full name"
							/>
						</div>

						<div>
							<label className="block text-gray-700 font-medium mb-2">Email</label>
							<input
								type="email"
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
								placeholder="your@email.com"
							/>
						</div>

						<div>
							<label className="block text-gray-700 font-medium mb-2">Subject</label>
							<input
								type="text"
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
								placeholder="What's this about?"
							/>
						</div>

						<div>
							<label className="block text-gray-700 font-medium mb-2">Message</label>
							<textarea
								rows={5}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
								placeholder="Tell us what's on your mind..."
							></textarea>
						</div>

						<button className="w-full bg-[#A1C181] text-[#FAF9F6] py-3 rounded-lg font-semibold hover:bg-[#A1C181]-700 transition-colors">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
);

export default ContactPage;
