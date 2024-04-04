import "./App.css";
import Header from "./components/Header";
import { themes } from "./database/db";
import ColorCardsSection from "./components/ColorCardsSection/index";
import useLocalStorageState from "use-local-storage-state";
import AddNewTheme from "./components/AddNewTheme";
import { v4 as uuid } from "uuid";

function App() {
  const [themesDB, setThemesDB] = useLocalStorageState("themesDB", {
    defaultValue: themes,
  });
  //const isAccordionOpen = false;
  //const randomId = uuid();

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

  return (
    <div className="App">
      <Header />
      <AddNewTheme onAddTheme={handleAddTheme} />
      <ColorCardsSection themes={themesDB} onThemesDelete={handleDeleteItem} />
    </div>
  );
}

export default App;
