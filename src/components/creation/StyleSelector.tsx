import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StyleOption {
  id: string;
  name: string;
  previewUrl: string;
  description: string;
}

interface StyleSelectorProps {
  selectedStyle?: string;
  onStyleSelect?: (styleId: string) => void;
  styles?: StyleOption[];
}

const defaultStyles: StyleOption[] = [
  {
    id: "realistic",
    name: "Realistic",
    previewUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    description: "Photorealistic art style",
  },
  {
    id: "anime",
    name: "Anime",
    previewUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477",
    description: "Japanese anime style",
  },
  {
    id: "abstract",
    name: "Abstract",
    previewUrl: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3",
    description: "Modern abstract art",
  },
  {
    id: "pixel",
    name: "Pixel Art",
    previewUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    description: "Retro pixel art style",
  },
];

const StyleSelector = ({
  selectedStyle = defaultStyles[0].id,
  onStyleSelect = () => {},
  styles = defaultStyles,
}: StyleSelectorProps) => {
  return (
    <div className="w-full bg-background p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Select Art Style</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {styles.map((style) => (
          <Card
            key={style.id}
            className={cn(
              "cursor-pointer transition-all hover:scale-105",
              "border-2",
              selectedStyle === style.id
                ? "border-primary"
                : "border-transparent",
            )}
            onClick={() => onStyleSelect(style.id)}
          >
            <div className="relative aspect-square overflow-hidden rounded-t-lg">
              <img
                src={style.previewUrl}
                alt={style.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-3">
              <h4 className="font-medium">{style.name}</h4>
              <p className="text-sm text-muted-foreground">
                {style.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
