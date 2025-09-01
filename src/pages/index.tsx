import React, {useState} from 'react';
import {NextPage} from "next";
import Head from "next/head";

import {
	AirdropView,
	ContactView,
	CreateView,
	DonateView,
	FaqView,
	FeatureView,
	HomeView,
	InputView,
	OfferView,
	TokenMetadata,
	ToolsView
} from "../views";

const Home: NextPage = (props) => {
	// State Variable
	const [openCreateModal, setOpenCreateModal] = useState(false);
	const [openTokenMetadata, setOpenTokenMetadata] = useState(false);
	const [openContact, setOpenContact] = useState(false);
	const [openAirdrop, setOpenAirdrop] = useState(false);
	const [openSendTransaction, setOpenSendTransaction] = useState(false);
	
  return (
    <>
		  <Head>
			  <title>Darlux token creator</title>
				<meta name="darlux token creator" content="solana token creators"/>
			</Head>
			
			<HomeView setOpenCreateModal={setOpenCreateModal}/>
				
			<ToolsView 
				setOpenAirdrop={setOpenAirdrop}
				setOpenContact={setOpenContact}
				setOpenCreateModal={setOpenCreateModal}
				setOpenSendTransaction={setOpenSendTransaction}
				setOpenTokenMetadata={setOpenTokenMetadata}
			/>
				
			<FeatureView
				setOpenAirdrop={setOpenAirdrop}
				setOpenContact={setOpenContact}
				setOpenCreateModal={setOpenCreateModal}
				setOpenSendTransaction={setOpenSendTransaction}
				setOpenTokenMetadata={setOpenTokenMetadata}
			/>
				
			<OfferView/>
			{/*<FaqView/>
				
			{openCreateModal && (
				<div className="new_loader relative h-full bg-slate-900">
					 <CreateView setOpenCreateModal={setOpenCreateModal} />
				</div>
			)}
				
			{openTokenMetadata && (
				<div className="new_loader relative h-full bg-slate-900">
					 <TokenMetadata setOpenTokenMetadata={setOpenTokenMetadata} />
				</div>
			)}
				
			{openContact && (
				<div className="new_loader relative h-full bg-slate-900">
					 <ContactView setOpenContact={setOpenContact} />
				</div>
			)}
			
			{openAirdrop && (
				<div className="new_loader relative h-full bg-slate-900">
					 <AirdropView setOpenAirdrop={setOpenAirdrop} />
				</div>
			)}
			
			{openSendTransaction && (
				<div className="new_loader relative h-full bg-slate-900">
					 <DonateView setOpenSendTransaction={setOpenSendTransaction} />
				</div>
			)}*/}
		</>
  );
};

export default Home;