import "./ColorPreviewPage.css";

function ColorPreviewPage({ onTry, colors }) {
  const primaryColor = colors[0];
  const secondaryColor = colors[1];
  const surfaceColor = colors[2];
  const surfaceOnColor = colors[3];

  console.log(colors);
  return (
    <div>
      <button className="close_button" onClick={onTry}>
        close
      </button>
      <h1 style={{ color: primaryColor }}>Preview Theme</h1>
      <p>Preview Paragraph Text</p>
      <span style={{ backgroundColor: surfaceOnColor }}>
        <p style={{ color: secondaryColor }}>A Highlight Box</p>
      </span>
      <div className="preview_button_container">
        <button
          className="button_box "
          style={{ backgroundColor: surfaceColor }}
        >
          Contained
        </button>
        <button
          className="button_box oulined_button"
          style={{ color: surfaceOnColor }}
        >
          Outlined
        </button>
        <button
          className="button_box"
          style={{ backgroundColor: primaryColor }}
        >
          Primary
        </button>
        <button
          className="button_box"
          style={{ backgroundColor: secondaryColor }}
        >
          Secondary
        </button>
      </div>
    </div>
  );
}

export default ColorPreviewPage;
