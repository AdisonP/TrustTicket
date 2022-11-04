import React, { useState } from "react";

// IMPORT COMPONENTS
import { Button, SelectedButton, Nav } from "./DashboardNav.styled";

function CategoriesNav() {
  const [isFocus, setIsFocus] = useState("All");
  return (
    <Nav>
      {isFocus === "All" ? (
        <SelectedButton onClick={() => setIsFocus("All")}>
          <img
            style={{ height: "20px", width: "20px" }}
            src={"search_FILL0_wght400_GRAD0_opsz48.png"}
          />
        </SelectedButton>
      ) : (
        <Button onClick={() => setIsFocus("All")}>All</Button>
      )}
    </Nav>
  );
}

export default CategoriesNav;
