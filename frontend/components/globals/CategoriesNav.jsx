import { useState } from "react";

export default function CategoriesNav() {
  const [active, setActive] = useState("Tous");
  return (
    <nav className="categoriesNav">
      <button
        onClick={() => setActive("Tous")}
        className={
          active === "Tous"
            ? "categoriesNav-button-selected"
            : "categoriesNav-button"
        }
        value="Tous"
      >
        Tous
      </button>
      <button
        onClick={() => setActive("Festivals")}
        className={
          active === "Festivals"
            ? "categoriesNav-button-selected"
            : "categoriesNav-button"
        }
        value="Festivals"
      >
        Festivals
      </button>
      <button
        onClick={() => setActive("Concerts")}
        className={
          active === "Concerts"
            ? "categoriesNav-button-selected"
            : "categoriesNav-button"
        }
        value="Concerts"
      >
        Concerts
      </button>
      <button
        onClick={() => setActive("Loisirs")}
        className={
          active === "Loisirs"
            ? "categoriesNav-button-selected"
            : "categoriesNav-button"
        }
        value="Loisirs"
      >
        Loisirs
      </button>
    </nav>
  );
}
