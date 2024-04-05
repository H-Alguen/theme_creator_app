import { useState } from "react";
import "./EditThemeForm.css";

function EditThemeForm({ onEdit, id, name, colors }) {
  const [primaryColor, setPrimaryColor] = useState(colors[0].value);
  const [secondaryColor, setSecondaryColor] = useState(colors[1].value);
  const [surfaceColor, setSurfaceColor] = useState(colors[2].value);
  const [surfaceOnColor, setSurfaceOnColor] = useState(colors[3].value);
  const [paletteName, setPaletteName] = useState(name);

  function handleEditSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onEdit(data);
    console.log("Edit Theme data :", data);
    event.target.reset();
  }

  return (
    <form className="add_theme_container" onSubmit={handleEditSubmit}>
      <label htmlFor="id"></label>
      <input type="hidden" name="id" value={id}></input>
      <label className="add_color_title" htmlFor="name">
        Edit Theme
      </label>
      <input
        name="name"
        className="add_name_input"
        type="text"
        placeholder={paletteName}
        onChange={(e) => setPaletteName(e.target.value)}
        value={paletteName}
      />
      <div className="add_color_box_edit">
        <div className="color_box_edit">
          <div
            className="color_box_set"
            style={{ backgroundColor: primaryColor }}
          ></div>
          <div className="color_box_insert">
            <label className="label_color_name" htmlFor="primaryColor">
              Primary
            </label>
            <input
              name="primaryColor"
              type="color"
              placeholder="#fffff"
              onChange={(e) => setPrimaryColor(e.target.value)}
              defaultValue={primaryColor}
            />
          </div>
        </div>
        <div className="color_box_edit">
          <div
            className="color_box_set"
            style={{ backgroundColor: secondaryColor }}
          ></div>
          <div className="color_box_insert">
            <label className="label_color_name" htmlFor="secondaryColor">
              Secondary
            </label>
            <input
              name="secondaryColor"
              type="color"
              placeholder="#fffff"
              onChange={(e) => setSecondaryColor(e.target.value)}
              defaultValue={secondaryColor}
            />
          </div>
        </div>
        <div className="color_box_edit">
          <div
            className="color_box_set"
            style={{ backgroundColor: surfaceColor }}
          ></div>
          <div className="color_box_insert">
            <label className="label_color_name" htmlFor="surfaceColor">
              Surface
            </label>
            <input
              name="surfaceColor"
              type="color"
              placeholder="#fffff"
              onChange={(e) => setSurfaceColor(e.target.value)}
              defaultValue={surfaceColor}
            />
          </div>
        </div>
        <div className="color_box_edit">
          <div
            className="color_box_set"
            style={{ backgroundColor: surfaceOnColor }}
          ></div>
          <div className="color_box_insert">
            <label className="label_color_name" htmlFor="surfaceOnColor">
              Surface-On
            </label>
            <input
              name="surfaceOnColor"
              type="color"
              placeholder="#fffff"
              onChange={(e) => setSurfaceOnColor(e.target.value)}
              defaultValue={surfaceOnColor}
            />
          </div>
        </div>
      </div>
      <button type="submit" className="form_add_theme_button">
        Save
      </button>
    </form>
  );
}

export default EditThemeForm;
