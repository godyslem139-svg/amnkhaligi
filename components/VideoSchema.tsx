import React from "react";
import { buildVideosJsonLd, type VideoItemInput } from "@/lib/video-schema";

interface VideoSchemaProps {
  videos: VideoItemInput[];
  pagePath: string;
}

export default function VideoSchema({ videos, pagePath }: VideoSchemaProps) {
  if (!videos || videos.length === 0) return null;

  const jsonLd = buildVideosJsonLd(videos, pagePath);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}