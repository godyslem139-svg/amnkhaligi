export interface VideoItemInput {
  id: string;
  name: string;
  description: string; 
  thumbnailUrl: string; 
  uploadDate: string; 
  duration: string; 
  contentUrl?: string;
  embedUrl?: string; 
  clips?: {
    name: string;
    startOffset: number; 
    endOffset: number; 
    url: string; 
  }[];
}

const SITE_URL = "https://www.amnkhaligi.com";

function toAbsoluteUrl(url?: string): string | undefined {
  if (!url) return undefined;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

export function buildVideosJsonLd(videos: VideoItemInput[], pagePath: string) {
  const pageUrl = toAbsoluteUrl(pagePath) || SITE_URL;

  return {
    "@context": "https://schema.org",
    "@graph": videos.map((video) => {
      const absThumb = toAbsoluteUrl(video.thumbnailUrl);
      const absContent = toAbsoluteUrl(video.contentUrl);

      return {
        "@type": "VideoObject",
        "@id": `${pageUrl}#video-${video.id}`,
        name: video.name,
        description: video.description,
        thumbnailUrl: absThumb ? [absThumb] : undefined,
        uploadDate: video.uploadDate,
        duration: video.duration,
        inLanguage: "ar",
        isFamilyFriendly: true,
        ...(absContent ? { contentUrl: absContent } : {}),
        ...(video.embedUrl ? { embedUrl: video.embedUrl } : {}),
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "شركة أساس الأمن الخليجي",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
          },
        },
        ...(video.clips && video.clips.length > 0
          ? {
              hasPart: video.clips.map((clip) => ({
                "@type": "Clip",
                name: clip.name,
                startOffset: clip.startOffset,
                endOffset: clip.endOffset,
                url: clip.url,
              })),
            }
          : {}),
      };
    }),
  };
}