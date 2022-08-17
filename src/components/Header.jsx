import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) => {
  return (
    <header>
      <h1>
        {" "}
        <img
          className="expenseLogo"
          src="https://res.cloudinary.com/koolgram/image/upload/v1660264049/expensePlannerLogoP_vabvc3.png"
          alt="Expense Planner Logo"
        />
        Expense Planner
      </h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto
          gastos={gastos}
          setGastos={setGastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
