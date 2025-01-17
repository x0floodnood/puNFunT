import React from "react";
import ArtGenerationPanel from "./creation/ArtGenerationPanel";
import MintingPanel from "./creation/MintingPanel";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

interface HomeProps {
  isWalletConnected?: boolean;
  onConnectWallet?: () => void;
}

const Home = ({
  isWalletConnected = false,
  onConnectWallet = () => console.log("Connect wallet clicked"),
}: HomeProps) => {
  if (!isWalletConnected) {
    return (
      <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-4 max-w-lg">
          <h1 className="text-4xl font-bold">Welcome to AI NFT Creator</h1>
          <p className="text-muted-foreground">
            Connect your wallet to start creating and minting unique
            AI-generated artwork as NFTs.
          </p>
          <Button size="lg" onClick={onConnectWallet} className="mt-4">
            <Wallet className="mr-2 h-5 w-5" />
            Connect Wallet
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-background p-6">
      <div className="max-w-[1400px] mx-auto space-y-6">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">AI NFT Creator</h1>
          <Button variant="outline">
            <Wallet className="mr-2 h-4 w-4" />
            Wallet Connected
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-6">
          <ArtGenerationPanel
            onGenerate={(prompt, style) =>
              console.log("Generating with:", { prompt, style })
            }
          />
          <MintingPanel
            onMint={(metadata) =>
              console.log("Minting with metadata:", metadata)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
