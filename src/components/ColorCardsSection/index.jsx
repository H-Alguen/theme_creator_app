import "./ColorCardsSection.css";
import ColorCard from "../ColorCard";

function ColorCardsSection({ themes, onThemesDelete, onThemeEdit }) {
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
          />
        );
      })}
    </main>
  );
}

export default ColorCardsSection;
