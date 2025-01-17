import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { RefreshCw, Download } from "lucide-react";

interface ImagePreviewProps {
  imageUrl?: string;
  isLoading?: boolean;
  onRegenerate?: () => void;
  onDownload?: () => void;
}

const ImagePreview = ({
  imageUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
  isLoading = false,
  onRegenerate = () => console.log("Regenerate clicked"),
  onDownload = () => console.log("Download clicked"),
}: ImagePreviewProps) => {
  return (
    <Card className="w-full h-[450px] bg-background p-4 flex flex-col gap-4">
      <div className="relative flex-1 w-full bg-muted rounded-lg overflow-hidden">
        {isLoading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <img
            src={imageUrl}
            alt="Generated AI Art"
            className="w-full h-full object-contain"
          />
        )}
      </div>

      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={onRegenerate}
          disabled={isLoading}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onDownload}
          disabled={isLoading}
        >
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default ImagePreview;
