import { useEffect, useState } from "react";
import "./ColorName.css";

function ColorName({ color }) {
  const [colorName, setColorName] = useState("");

  useEffect(() => {
    try {
      async function getColorName() {
        const newHex = color.value.replace("#", "");

        const response = await fetch(
          `https://www.thecolorapi.com/id?hex=${newHex}`
        );
        const data = await response.json();
        setColorName(data.name.value);
      }
      getColorName();
    } catch {
      return <p>empty color field</p>;
    }
  }, [color.value]);

  return color.value ? (
    <p className="color_name">{colorName}</p>
  ) : (
    <p>no name</p>
  );
}

export default ColorName;
