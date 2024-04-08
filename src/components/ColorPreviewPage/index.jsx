import "./ColorPreviewPage.css";

function ColorPreviewPage({ colors, closePage }) {
  const primaryColor = colors.primaryColor;
  const secondaryColor = colors.secondaryColor;
  const surfaceColor = colors.surfaceColor;
  const surfaceOnColor = colors.surfaceOnColor;

  console.log("PreviewPage:", colors.primaryColor);
  return (
    <div>
      <button className="close_button" onClick={closePage}>
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
