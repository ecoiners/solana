import React, {FC} from 'react';
import {MdGeneratingTokens, MdToken} from"react-icons/md";
import {LuArrowRightFromLine} from "react-lu";
import {RiTokenSwapFill} from "react-icons/ri";
import {RxTokens} from "react-icons/rx";

export const FeatureView: FC = ({
	setOpenAirdrop,
	setOpenContact,
	setOpenCreateModal,
	setOpenSendTransaction,
	setOpenTokenMetadata
}) => {
	const features = [
		{
			name: "Token Generator",
			icon: <MdGeneratingTokens/>,
			description: "✨ Generator token Solana yang mudah digunakan. Kamu bisa membuat, deploy, airdrop, transfer, dan update token hanya dengan beberapa click.",
			function: setOpenCreateModal
		},
		{
			name: "Get Airdrop",
			icon: <MdToken/>,
			description: "🎁 Dapatkan airdrop SOL untuk keperluan testing di jaringan devnet. Cocok untuk belajar dan mencoba fitur tanpa biaya.",
			function: setOpenAirdrop
		},
		{
			name: "Transfer SOL",
			icon: <RiTokenSwapFill/>,
			description: "🏛️ Kirim dan terima SOL dengan cepat dan aman. Mudah digunakan untuk transaksi antar wallet di jaringan Sol.",
			function: setOpenSendTransaction
		},
		{
			name: "Token Metadata",
			icon: <RxTokens/>,
			description: "📄 Atur metadata token kamu, mulai dari nama, simbol, gambar, hingga detail penting lainnya agar token terlihat profesional.",
			function: setOpenTokenMetadata
		},
	];
	
	return (
		<section className="py-20">
		  <div className="container">
			  <div className="mb-10 flex items-end justify-between">
				  <div className="mx-auto max-w-2xl text-center">
					  <h2 className="mb-4 text-3xl text-white font-medium capitalize ">
						  Pilih Solana Blockchain Generator 🔗
						</h2>
						<p className="text-default-200 text-sm font-medium">
						  Sekarang Anda dapat membuat token solana<br/>
							tanpa code secara instans.
						</p>
					</div>
				</div>
				
				<div className="bg-default-950/40 flex flex-wrap items-center rounded-3xl backdrop-blur-3xl">
				  {
						features.map((list, index) => (
							<div 
							  key={index} 
								className={`w-auto border-b grow border-white/10 md:w-1/2 ${index == 0 ? "md:border-e" : index == 1 ? "" : index == 2 ? "md:border-e md:border-b-0" : ""}`}
							>
							  <div className="p-8 sm:p-10">
								  <div className="bg-primary/10 text-primary mb-10 inline-flex items-center justify-center w-16 h-16 rounded-xl">
									  <i data-lucide="framer" >{list.icon}</i>
									</div>
									
									<h2 className="text-white text-2xl font-medium mb-4">{list.name}</h2>
									<p className="text-default-200 mb-6 text-base">{list.description}</p>
									<a onClick={() => list.function(true)} className="hover:bg-primary inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-6 py-2 text-white transition-all duration-500">
									  Gunakan Tools ⚒️
										<i>
										  <LuArrowRightFromLine />
										</i>
									</a>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</section>
	);
};