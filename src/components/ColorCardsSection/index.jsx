import "./ColorCardsSection.css";
import ColorCard from "../ColorCard";

function ColorCardsSection({
  themes,
  onThemesDelete,
  onThemeEdit,
  onTryMode,
  isTryMode,
}) {
  return (
    <main className="main_section">
      {themes.map((theme) => {
        return (
          <ColorCard
            key={theme.id}
            id={theme.id}
            name={theme.name}
            colors={theme.colors}
            onDelete={onThemesDelete}
            onEdit={onThemeEdit}
            onTryMode={onTryMode}
            isTryMode={isTryMode}
          />
        );
      })}
    </main>
  );
}

export default ColorCardsSection;
