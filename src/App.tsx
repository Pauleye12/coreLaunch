import "./App.css";
import Navbar from "./components/Navbar";
import AutoScroll from "./components/AutoScroll";
import Home from "./pages/Home";
import LaunchToken from "./pages/LaunchToken";
import TokenProfile from "./pages/TokenProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Web3 modal and wagmi Imports
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import { config } from "../config";

// 2. Set up a React Query client.
const queryClient = new QueryClient();

const projectId = "72e3576a5459f1784e32223a4e33ea29";

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

const App = () => {
  return (
    // <div className="bg-[#191a1a]">

    //   <Navbar />
    //   {/* <Home /> */}
    //   <LaunchToken />
    // </div>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/launch" element={<LaunchToken />} />
            <Route path="/token/:id" element={<TokenProfile />} />
          </Routes>
        </Router>
      </QueryClientProvider>
      <AutoScroll />
    </WagmiProvider>
  );
};

export default App;
