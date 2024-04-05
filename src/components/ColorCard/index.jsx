import ArrowOpened from "../../assets/icons8-arrow-48.png";
import ArrowClosed from "../../assets/icons8-arrow-48-closed.png";

import { useState } from "react";
import "./ColorCard.css";
import ColorName from "../ColorName";
import EditThemeForm from "../EditThemeForm";

function ColorCard({ id, name, colors, onDelete, onEdit }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  function handleAccordion() {
    setIsAccordionOpen(!isAccordionOpen);
  }

  function handleEditMode() {
    setIsEditMode(!isEditMode);
  }

  function handleEditSave() {
    setIsEditMode(!isEditMode);
  }

  const colorThemesList = colors.map((color) => {
    return (
      <div className="card_box" key={color.value}>
        <div className="card_info_desc">
          <h3>{color.role}</h3>
          <span>
            <ColorName key={color.value} color={color} />
            <p>{color.value}</p>
          </span>
        </div>
        <div
          className="card_color_sample"
          style={{ backgroundColor: color.value }}
        ></div>
      </div>
    );
  });

  const colorThemePreview = colors.map((color) => {
    return (
      <div
        key={color.value}
        className="card_color_sample preview_color_box"
        style={{ backgroundColor: color.value }}
      ></div>
    );
  });

  return (
    <section className="color_card">
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
        <>
          {isEditMode ? (
            <EditThemeForm
              onEdit={onEdit}
              id={id}
              name={name}
              colors={colors}
            />
          ) : (
            colorThemesList
          )}
          {isEditMode ? (
            <button className="save_button" onClick={handleEditSave}>
              Close
            </button>
          ) : (
            <div className="color_botton_wrapper">
              <button className="edit_button" onClick={handleEditMode}>
                Edit
              </button>
              <button className="delete_button" onClick={() => onDelete(id)}>
                Delete
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="card_box_accordion">{colorThemePreview}</div>
      )}
    </section>
  );
}

export default ColorCard;
