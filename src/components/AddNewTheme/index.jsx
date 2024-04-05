import { useState } from "react";
import "./AddNewTheme.css";

function AddNewTheme({ onAddTheme }) {
  const [primaryColor, setPrimaryColor] = useState("#aeaeae");
  const [secondaryColor, setSecondaryColor] = useState("#aeaeae");
  const [surfaceColor, setSurfaceColor] = useState("#aeaeae");
  const [surfaceOnColor, setSurfaceOnColor] = useState("#aeaeae");
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddTheme(data);
    console.log("Theme data :", data);
    setPrimaryColor("#aeaeae");
    setSecondaryColor("#aeaeae");
    setSurfaceColor("#aeaeae");
    setSurfaceOnColor("#aeaeae");
    event.target.reset();
  }

  return (
    <form className="add_theme_container" onSubmit={handleSubmit}>
      <label className="add_color_title" htmlFor="name">
        Add new Theme
      </label>
      <input
        name="name"
        className="add_name_input"
        type="text"
        placeholder="Theme name"
      />
      <div className="add_color_box">
        <div className="color_box">
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
              defaultValue="#ffffff"
            />
            <input
              name="primaryColor"
              type="text"
              placeholder={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              value={primaryColor}
            />
          </div>
        </div>
        <div className="color_box">
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
              defaultValue="#444474"
            />
            <input
              name="secondaryColor"
              type="text"
              placeholder={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
              value={secondaryColor}
            />
          </div>
        </div>
        <div className="color_box">
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
              defaultValue="#cc7a7a"
            />
            <input
              name="surfaceColor"
              type="text"
              placeholder={surfaceColor}
              onChange={(e) => setSurfaceColor(e.target.value)}
              value={surfaceColor}
            />
          </div>
        </div>
        <div className="color_box">
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
              defaultValue="#4f99c6"
            />
            <input
              name="surfaceOnColor"
              type="text"
              placeholder={surfaceOnColor}
              onChange={(e) => setSurfaceOnColor(e.target.value)}
              value={surfaceOnColor}
            />
          </div>
        </div>
      </div>
      <button type="submit" className="form_add_theme_button">
        Add Theme
      </button>
    </form>
  );
}

export default AddNewTheme;
