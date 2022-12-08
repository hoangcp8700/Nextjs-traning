import { useEffect, useState } from "react";

const useHydrationMismatch = () => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  return { showChild };
};

export default useHydrationMismatch;
