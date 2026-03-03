import { useEffect, useState } from "react";

const DEFAULT_LOGO = "/vadihusnaLogo.png";

export function useLogoUrl() {
  const [logoUrl, setLogoUrl] = useState<string>(DEFAULT_LOGO);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Static data - no async fetch needed
    setLogoUrl(DEFAULT_LOGO);
    setLoading(false);
  }, []);

  return { logoUrl, loading };
}
