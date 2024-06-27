import React from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import MainPageImage from ".././assets/backgroundimg.png";
// import MainPageImage from ".././"

import Tabs from "@/components/Tabs";
import Schemes from "@/components/Schemes";
import Scholarships from "@/components/Scholarships";
import JobOpenings from "@/components/JobOpenings";
import { useState, useEffect } from "react";

const MainPage = () => {
  const [component, setComponent] = useState("Schemes");
  const [componentToRender, setComponentToRender] = useState(<Schemes />);

  useEffect(() => {
    if (component === "Schemes") setComponentToRender(<Schemes />);
    else if (component === "Job Openings")
      setComponentToRender(<JobOpenings />);
    else if (component === "Scholarships")
      setComponentToRender(<Scholarships />);
  }, [component]);

  return (
    <>
      <div className="mb-[180px]">
        <NavBar />

        {/* Main page image */}
        <div className="absolute top-0 w-full z-0">
          <div className="relative h-60 brightness-50">
            <Image
              src={MainPageImage}
              alt="Loading Image..."
              layout="fill"
              objectFit="cover"
              objectPosition="center bottom"
            />
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "80%", margin: "0 auto" }}>
        <div>
          <div>
            <Tabs setComponent={setComponent} />
          </div>
          <div>{componentToRender}</div>
        </div>
      </div>
    </>
  );
};

export default MainPage;