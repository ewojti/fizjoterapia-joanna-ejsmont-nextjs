import React from "react";
import { useRouter } from "next/navigation";

const NavigateBtn = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className="app__navigateBtn custom__button"
        onClick={() => router.back()}
      >
        wróć
      </button>
    </div>
  );
};

export default NavigateBtn;
