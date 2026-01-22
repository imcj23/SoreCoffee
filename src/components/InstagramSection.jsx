import { useEffect } from "react";

const posts = [
  "https://www.instagram.com/p/DTt7prtASSd/?igsh=anJtMDEwNzd3OHNo",
  "https://www.instagram.com/p/DQrBzRlAVHu/",
  "https://www.instagram.com/p/DQrBrs3AdM8/",
  "https://www.instagram.com/p/DQQW0aigRDG/",
  "https://www.instagram.com/p/DRmceE6gesU/",
  "https://www.instagram.com/p/DRMI8muEdPx/",
  "https://www.instagram.com/p/DRMI8muEdPx/",
  "https://www.instagram.com/p/DRMI8muEdPx/",
  "https://www.instagram.com/p/DRMI8muEdPx/",
];

export default function InstagramFeed() {
  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        window.instgrm.Embeds.process();
      };
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map((url, i) => (
        <blockquote
          key={i}
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
        />
      ))}
    </div>
  );
}
