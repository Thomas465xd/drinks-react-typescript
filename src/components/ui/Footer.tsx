export default function Footer() {
	return (
		<footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white mt-20">
			<div className="max-w-4xl mx-auto px-6 py-8">
				{/* Main content */}
				<div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
					<div className="text-center md:text-left">
						<p className="text-sm text-slate-300 mb-1">
							Powered by{" "}
							<a 
                                target="_blank"
                                rel="noopener noreferrer"
                                title="The CocktailDB website"
								href="https://www.thecocktaildb.com/"
								className="text-orange-400 hover:text-orange-300 transition-colors duration-200 underline decoration-dotted underline-offset-2"
							>
								TheCocktailDB
							</a>
						</p>
						<p className="text-xs text-slate-400">
							Copyright © {new Date().getFullYear()}
						</p>
					</div>
					
					<div className="text-center md:text-right">
						<p className="text-sm text-slate-300 flex items-center justify-center md:justify-end gap-2">
							Developed by
							<a 
                                className="font-medium text-white hover:underline hover:cursor-pointer"
                                href="https://github.com/Thomas465xd/drinks-react-typescript"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Thomas Schrödinger GitHub Profile"
                            >
                                Thomas Schrödinger
                            </a>
						</p>
					</div>
				</div>
				
				{/* Separator line */}
				<div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
				
				{/* Bottom minimal text */}
				<div className="pt-4 text-center">
					<p className="text-xs text-slate-500">
						Crafting digital experiences, one cocktail at a time
					</p>
				</div>
			</div>
		</footer>
	);
}