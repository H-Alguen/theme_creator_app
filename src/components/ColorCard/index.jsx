import ArrowOpened from "../../assets/icons8-arrow-48.png";
import ArrowClosed from "../../assets/icons8-arrow-48-closed.png";

import { useState } from "react";
import "./ColorCard.css";

function ColorCard({ id, name, colors }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  function handleAccordion() {
    setIsAccordionOpen(!isAccordionOpen);
  }

  const colorThemesList = colors.map((color) => {
    return (
      <>
        <div className="card_box" key={id}>
          <div className="card_info_desc">
            <h3>{color.role}</h3>
            <p>{color.value}</p>
          </div>
          <div
            className="card_color_sample"
            style={{ backgroundColor: color.value }}
          ></div>
        </div>
      </>
    );
  });

  const colorThemePreview = colors.map((color, index) => {
    return (
      <>
        <div
          key={id}
          className="card_color_sample preview_color_box"
          style={{ backgroundColor: color.value }}
        ></div>
      </>
    );
  });

  return (
    <section className="color_card" key={id}>
      <div className="card_header">
        <h2>{name}</h2>
        <button className="button_Accordion" onClick={handleAccordion}>
          {isAccordionOpen ? (
            <img src={ArrowOpened} alt="" />
          ) : (
            <img src={ArrowClosed} alt="" />
          )}
        </button>
      </div>

      {isAccordionOpen ? (
        colorThemesList
      ) : (
        <div key={id} className="card_box_accordion">
          {colorThemePreview}
        </div>
      )}
    </section>
  );
}

export default ColorCard;
