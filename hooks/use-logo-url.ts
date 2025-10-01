import { useEffect, useState } from "react";
import { appwrite } from "@/lib/appwrite";

const BUCKET_ID = "68c8feb100211df93ea6";
const FALLBACK_LOGO = "/vadihusnaLogo.png";

export function useLogoUrl() {
  const [logoUrl, setLogoUrl] = useState<string>(FALLBACK_LOGO);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchLogo() {
      try {
        const files = await appwrite.storage.listFiles(
          BUCKET_ID,
          undefined,
          "1"
        );
        if (files.total > 0) {
          const file = files.files[0];
          const url = appwrite.storage.getFileView(BUCKET_ID, file.$id);

          if (isMounted) setLogoUrl(url);
        } else {
          if (isMounted) setLogoUrl(FALLBACK_LOGO);
        }
      } catch {
        if (isMounted) setLogoUrl(FALLBACK_LOGO);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchLogo();
    return () => {
      isMounted = false;
    };
  }, []);

  return { logoUrl, loading };
}
