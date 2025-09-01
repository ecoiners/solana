import {FC} from "react";
import {MdGeneratingTokens} from "react-icons/md";
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";

// internal
import pkg from "../../../package.json";

export const HomeView: FC = ({setOpenCreateModal}) => {
	
	return (
		<section className="relative overflow-hidden pb-20 pt-[72px]" id="home">
		  <div className="px-6 py-4">
			  <div className="bg-default-950/40 rounded-2xl">
				  <div className="container">
					  <div className="p-6">
						  <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
							  
								<div className="bg-primary/10 -z-1 start-0 top-0 absolute h-14 w-14 animate-[spin_10s_linear_infinite] rounded-2xl rounded-br-none rounded-tl-none">
								</div>
								
								<div className="bg-primary/20 -z-1 end-0 absolute bottom-0 h-14 w-14 animate-ping rounded-full">
								</div>
								
								<div>
								  <span className="text-primary bg-primary/20 rounded-md px-3 py-1 text-sm font-medium uppercase tracking-wider">
									  BUAT TOKEN SOLANA {pkg.version}
									</span>
									
									<h1 className="md:text-5xl/tight my-4 max-w-lg text-4xl text-white font-medium">
									  Buat Token Solana Tanpa Coding! 🔥
									</h1>
									<p className="text-default-300 md:text-lg">
									   🎯 Luncurkan token Solana Anda, semua dalam satu platform pengembangan dan penerapan token Solana! ✨
									</p>
									
									<div className="new_add_css">
									  <a onClick={() => setOpenCreateModal(true)}
										  className="hover:bg-primary-hover pe-4 group mt-10 inline-flex items-center justify-center gap-2 rounded-md border border-white/10 px-1 text-white transition-all duration-500"
										>
										  <span className="bg-primary/20 text-primary me-2 flex items-center justify-center h-11 w-11 rounded-md group-hover:bg-white/10 group-hover:text-white">
											  <i data-lucide="image">
												  <MdGeneratingTokens/>
												</i>
											</span>
											Buat 🚀
										</a>
										
										<a className="mt-8 rounded-md">
										  <WalletMultiButton/>
										</a>
									</div>
								</div>
								
								<div className="mx-auto h-[595px] overflow-hidden">
								  <div className="marquee grid grid-cols-2 gap-6">
									  
										<div className="relative m-auto flex flex-col gap-6 overflow-hidden">
										  <div className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
											  {
													[
														"img-9", "img-10", "img-11", "img-12", "img-13"
													].map((image, index) => (
														<img src={`assets/images/ai/${image}.jpg`} alt="content" key={index} className="aspect-1 rounded-xl object-cover h-full w-60"/>
													))
												}
											</div>
											
											<div aria-hidden="true" className="marquee-hero flex min-h-full gap-6 flex-shrink-0 flex-col items-center justify-around">
											  {
													[
														"img-9", "img-10", "img-11", "img-12", "img-13"
													].map((image, index) => (
														<img src={`assets/images/ai/${image}.jpg`} alt="content" key={index} className="aspect-1 rounded-xl object-cover h-full w-60"/>
													))
												}
											</div>
										</div>
										
										<div className="marquee-reverse m-auto flex flex-col gap-6 overflow-hidden">
											 <div className="marquee-hero min-h-full flex flex-col flex-shrink-0 gap-6 items-center justify-around">
												 {
													 [
														 "img-6", "img-7", "img-8", "img-14", "img-22"
													 ].map((image, index) => (
														 <img src={`assets/images/ai/${image}.jpg`} alt="content" key={index} className="aspect-1 rounded-xl object-cover h-full w-60"/>
													 ))
												 }
											</div>
												
											<div className="marquee-hero min-h-full flex flex-col flex-shrink-0 items-center justify-around gap-6" aria-hidden="true">
												 {
													 [
														 "img-6", "img-7", "img-8", "img-14", "img-22"
													 ].map((image, index) => (
														 <img src={`assets/images/ai/${image}.jpg`} alt="content" key={index} className="aspect-1 rounded-xl object-cover h-full w-60"/>
													 ))
												 }
											</div>
										</div>
									</div>
								</div>
							</div>
						
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};