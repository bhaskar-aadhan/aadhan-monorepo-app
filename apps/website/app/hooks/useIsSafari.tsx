import { useEffect, useState } from "react";

export function useIsSafari() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent;
      const vendor = navigator.vendor;
      const isSafariBrowser =
        vendor?.includes("Apple") &&
        !userAgent.includes("Chrome") &&
        !userAgent.includes("CriOS") && // Exclude Chrome on iOS
        !userAgent.includes("FxiOS"); // Exclude Firefox on iOS

      setIsSafari(isSafariBrowser);
    }
  }, []);

  return isSafari;
}
