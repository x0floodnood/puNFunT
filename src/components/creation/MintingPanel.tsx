import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import TransactionStatus from "./TransactionStatus";

interface MintingPanelProps {
  onMint?: (metadata: NFTMetadata) => void;
  isLoading?: boolean;
  transactionStatus?: "idle" | "processing" | "success" | "error";
  transactionMessage?: string;
  transactionProgress?: number;
}

interface NFTMetadata {
  title: string;
  description: string;
  royaltyPercentage: number;
}

const MintingPanel = ({
  onMint = () => {},
  isLoading = false,
  transactionStatus = "idle",
  transactionMessage = "",
  transactionProgress = 0,
}: MintingPanelProps) => {
  const [metadata, setMetadata] = React.useState<NFTMetadata>({
    title: "",
    description: "",
    royaltyPercentage: 5,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onMint(metadata);
  };

  return (
    <Card className="w-full h-full bg-background p-6 flex flex-col gap-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Mint as NFT</h2>
        <p className="text-muted-foreground">
          Add details about your NFT and set royalties
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="My Amazing AI Art"
              value={metadata.title}
              onChange={(e) =>
                setMetadata({ ...metadata, title: e.target.value })
              }
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Tell the story behind your creation..."
              value={metadata.description}
              onChange={(e) =>
                setMetadata({ ...metadata, description: e.target.value })
              }
              disabled={isLoading}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-4">
            <Label>Royalty Percentage</Label>
            <div className="flex items-center gap-4">
              <Slider
                value={[metadata.royaltyPercentage]}
                onValueChange={(value) =>
                  setMetadata({ ...metadata, royaltyPercentage: value[0] })
                }
                max={15}
                step={0.5}
                disabled={isLoading}
                className="flex-1"
              />
              <span className="w-12 text-right">
                {metadata.royaltyPercentage}%
              </span>
            </div>
          </div>
        </div>

        <TransactionStatus
          status={transactionStatus}
          message={transactionMessage}
          progress={transactionProgress}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isLoading || !metadata.title || !metadata.description}
        >
          {isLoading ? "Minting..." : "Mint NFT"}
        </Button>
      </form>
    </Card>
  );
};

export default MintingPanel;
