import "./App.css";
import Header from "./components/Header";
import { themes } from "./database/db";
import ColorCardsSection from "./components/ColorCardsSection/index";
import useLocalStorageState from "use-local-storage-state";
import AddNewTheme from "./components/AddNewTheme";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import ColorPreviewPage from "./components/ColorPreviewPage";

function App() {
  const [themesDB, setThemesDB] = useLocalStorageState("themesDB", {
    defaultValue: themes,
  });

  const [isTryMode, setIsTryMode] = useState(false);

  const [colorsForTryMode, setColorsForTryMode] = useState({
    primaryColor: "#57886C",
    secondaryColor: "#F8C7CC",
    surfaceColor: "#FDEDEE",
    surfaceOnColor: "#0E0F19",
  });

  function handleAddTheme(newTheme) {
    setThemesDB([
      {
        id: uuid(),
        name: newTheme.name,
        colors: [
          { role: "primary", value: newTheme.primaryColor, name: "default" },
          {
            role: "secondary",
            value: newTheme.secondaryColor,
            name: "default",
          },
          { role: "surface", value: newTheme.surfaceColor, name: "default" },
          {
            role: "surface-on",
            value: newTheme.surfaceOnColor,
            name: "default",
          },
        ],
      },
      ...themesDB,
    ]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    const newThemes = themesDB.filter((themeId) => themeId.id !== id);
    setThemesDB(newThemes);
    console.log(newThemes);
  }

  function handleEditItem(editTheme) {
    console.log("handleEditItem", editTheme.id);

    setThemesDB(
      themesDB.map((theme) => {
        if (theme.id === editTheme.id) {
          return {
            ...theme,
            id: editTheme.id,
            name: editTheme.name,
            colors: [
              {
                role: "primary",
                value: editTheme.primaryColor,
                name: "default",
              },
              {
                role: "secondary",
                value: editTheme.secondaryColor,
                name: "default",
              },
              {
                role: "surface",
                value: editTheme.surfaceColor,
                name: "default",
              },
              {
                role: "surface-on",
                value: editTheme.surfaceOnColor,
                name: "default",
              },
            ],
          };
        } else {
          return theme;
        }
      })
    );
  }

  function handleTryMode(theme) {
    if (theme !== undefined) {
      setColorsForTryMode({
        primaryColor: theme[0].value,
        secondaryColor: theme[1].value,
        surfaceColor: theme[2].value,
        surfaceOnColor: theme[3].value,
      });
    }

    setIsTryMode(!isTryMode);
  }

  function closePreviewPage() {
    setIsTryMode(!isTryMode);
  }

  return (
    <div className="App">
      <Header />
      <main>
        {isTryMode ? (
          <ColorPreviewPage
            colors={colorsForTryMode}
            onTry={handleTryMode}
            closePage={closePreviewPage}
          />
        ) : (
          <>
            <AddNewTheme onAddTheme={handleAddTheme} />
            <ColorCardsSection
              themes={themesDB}
              onThemesDelete={handleDeleteItem}
              onThemeEdit={handleEditItem}
              onTryMode={handleTryMode}
              isTryMode={isTryMode}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
