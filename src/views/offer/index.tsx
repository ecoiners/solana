import React, {FC} from 'react';

export const OfferView: FC = ({}) => {
	
	return (
		<section className="py-20" id="features">
		  <div className="container">
			  <div className="mb-10 flex items-end justify-between">
				  <div className="mx-auto max-w-2xl text-center">
					  <h2 className="mb-4 text-3xl font-medium capitalize text-white">
						  Solana Token Popularity 🔥
						</h2>
						<p className="text-default-200 text-sm font-medium">
						  🚀 Lihat token Solana paling populer saat ini. Data ini membantu kamu
              menemukan tren terbaru, projects menarik, dan asset yang sedang banyak diminati
              di ecosystem Solana.
						</p>
					</div>
				</div>
				
				<div className="grid gap-6 lg:grid-cols-3">
				  <div className="space-y-6">
					  <div className="bg-default-950/40 hover:translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
						  <div className="p-10">
							  <i className="text-primary h-10 w-10"></i>
							  <h3 className="mb-4 mt-8 text-2xl font-medium text-white">
								  Best Token Builders
								</h3>
								<p className="text-default-100 mb-4 text-sm font-medium ">
								  🔧 Temukan developer dan tools terbaik untuk membangun token
                  Solana. Cocok untuk kamu yang ingin mulai membuat project atau
                  mengembangkan ecosystem sendiri.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};