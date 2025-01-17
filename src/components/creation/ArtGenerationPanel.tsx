import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Wand2 } from "lucide-react";
import StyleSelector from "./StyleSelector";
import ImagePreview from "./ImagePreview";

interface ArtGenerationPanelProps {
  onGenerate?: (prompt: string, style: string) => void;
  isGenerating?: boolean;
  generatedImageUrl?: string;
}

const ArtGenerationPanel = ({
  onGenerate = () => {},
  isGenerating = false,
  generatedImageUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
}: ArtGenerationPanelProps) => {
  const [prompt, setPrompt] = useState(
    "A magical forest with glowing mushrooms",
  );
  const [selectedStyle, setSelectedStyle] = useState("realistic");

  const handleGenerate = () => {
    onGenerate(prompt, selectedStyle);
  };

  return (
    <Card className="w-full max-w-[900px] bg-background p-6 flex flex-col gap-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Create Your AI Art</h2>
        <div className="space-y-2">
          <Textarea
            placeholder="Describe your imagination..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[100px] resize-none"
          />
          <Button
            className="w-full"
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
          >
            {isGenerating ? (
              <>
                <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate Art
              </>
            )}
          </Button>
        </div>
      </div>

      <StyleSelector
        selectedStyle={selectedStyle}
        onStyleSelect={setSelectedStyle}
      />

      <ImagePreview
        imageUrl={generatedImageUrl}
        isLoading={isGenerating}
        onRegenerate={handleGenerate}
      />
    </Card>
  );
};

export default ArtGenerationPanel;
