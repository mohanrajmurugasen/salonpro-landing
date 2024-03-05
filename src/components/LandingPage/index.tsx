import React, { useEffect, useState } from "react";
import "./index.css";

const LandingPage = () => {
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="landing" style={{ height: screenHeight }}>
      <div className="contain">
        <div className="head">Coming Soon</div>
        <div className="bottom">
          We're working hard to bring you something amazing. Stay tuned!
        </div>
        <div className="sites">
          <div
            onClick={() =>
              handleClick("https://dev-crm.salonprosoftware.com/login")
            }
          >
            CRM Login
          </div>
          <div
            onClick={() =>
              handleClick("https://dev-crm.salonprosoftware.com/login")
            }
          >
            cPanel Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
