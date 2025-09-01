import { FC } from "react";
import dynamic from "next/dynamic";
import NetworkSwitcher from "./SVG/NetworkSwitcherSVG";
import { useNetworkConfiguration } from "../contexts/NetworkConfigurationProvider";

const NetworkSwitcher: FC = () => {
	const {networkConfiguration, setNetworkConfiguration} = useNetworkConfiguration();
	
  return (
    <>
		  <input type="checkbox" id="checkbox"/>
			<label className="switch rounded-md">
			  <select
				  value={networkConfiguration}
				  onChange={(e) => setNetworkConfiguration(e.target.value || "devnet")}
					className="select max-w-xs border-none bg-transparent outline-0"
				>
				  <option className="bg-[#000000] text-white" value="mainnet-beta">main</option>
					<option className="bg-[#000000] text-white" value="devnet">devnet</option>
					<option className="bg-[#000000] text-white" value="testnet">testnet</option>
				</select>
			</label>
		</>
  );
};

export default dynamic(() => Promise.resolve(NetworkSwitcher), {ssr:false});