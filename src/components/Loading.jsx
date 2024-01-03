import React, { useState, CSSProperties, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
  });
  return (
    <div className="justify-center items-center w-full text-center">
      <ClipLoader
        color={"rgb(21 128 61)"}
        loading={isLoading}
        size={150}
        // aria-label="Loading Spinner"
        // data-testid="loader"
      />
    </div>
  );
};

export default Loading;
