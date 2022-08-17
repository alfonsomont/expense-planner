import { useState, useEffect } from "react";

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Expense Filter</label>
          <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="">-- All Categories --</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="household">Household</option>
            <option value="general">General Expenses</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="memberships">Memberships / Subscriptions</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
