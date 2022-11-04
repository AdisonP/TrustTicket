import { useEffect, useState } from "react";

// IMPORT STYLED COMPONENTS
import { Nav, SelectedButton, Button } from "./CategoriesNav.styled";

export default function CategoriesNav(props) {
  const [active, setActive] = useState("Tous");
  const [listCategories, setlistCategories] = useState([]);



  useEffect(() => {
    var temp = [{ categorie_name: "Tous" }];
    temp.push(...props.listCategories);
    setlistCategories(temp);
  }, [])

  const setActiveCat = (cat) => {
    setActive(cat.categorie_name)
    props.catCb(cat)
  }


  return (
    <Nav>
      {listCategories.map((category, index) => active === category.categorie_name ? (
        <SelectedButton key={index}>{category.categorie_name}</SelectedButton>
      ) : (
        <Button key={index} onClick={() => setActiveCat(category)}>{category.categorie_name}</Button>
      ))}
    </Nav>
  );
}
