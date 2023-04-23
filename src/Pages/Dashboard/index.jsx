import React, { useContext } from "react";
import { TechsContent } from "../../Components/ContentTechs";

import { HeaderDash } from "../../Components/HeaderDash";
import { AuthContext } from "../../Contexts/AuthContext";
import { DivAllDash, MainDash } from "./style";

export const DashboardPage = () => {
  const { userName, userCourse } = useContext(AuthContext);

  return (
    <>
      <DivAllDash>
        <div className="container">
          <HeaderDash />

          <MainDash>
            <div className="divProfile">
              <h2>Olá, {userName}</h2>
              <p>{userCourse}</p>
            </div>
            <div className="divBody"></div>
          </MainDash>
          <TechsContent />
        </div>
      </DivAllDash>
    </>
  );
};
