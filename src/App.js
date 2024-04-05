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

  // function handleUpdateTheme(editTheme) {
  //   setThemesDB([
  //     {
  //       id: editTheme.id,
  //       name: editTheme.name,
  //       colors: [
  //         { role: "primary", value: editTheme.primaryColor, name: "default" },
  //         {
  //           role: "secondary",
  //           value: editTheme.secondaryColor,
  //           name: "default",
  //         },
  //         { role: "surface", value: editTheme.surfaceColor, name: "default" },
  //         {
  //           role: "surface-on",
  //           value: editTheme.surfaceOnColor,
  //           name: "default",
  //         },
  //       ],
  //     },
  //     ...themesDB,
  //   ]);
  // }

  function handleDeleteItem(id) {
    console.log(id);
    const newThemes = themesDB.filter((themeId) => themeId.id !== id);
    setThemesDB(newThemes);
    console.log(newThemes);
  }

  function handleEditItem(editTheme) {
    console.log("handleEditItem", editTheme);

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
    // const editThemeById = themesDB.filter(
    //   (themeId) => themeId.id === editTheme.id
    // );

    // if (editThemeById === editTheme.id) {
    //   setThemesDB([
    //     {
    //       id: editTheme.id,
    //       name: editTheme.name,
    // colors: [
    //   {
    //     role: "primary",
    //     value: editTheme.primaryColor,
    //     name: "default",
    //   },
    //   {
    //     role: "secondary",
    //     value: editTheme.secondaryColor,
    //     name: "default",
    //   },
    //   {
    //     role: "surface",
    //     value: editTheme.surfaceColor,
    //     name: "default",
    //   },
    //   {
    //     role: "surface-on",
    //     value: editTheme.surfaceOnColor,
    //     name: "default",
    //   },
    // ],
    //     },
    //     ...themesDB,
    //   ]);
    // } else {
    //   return <p>no id found</p>;
    // }
  }

  return (
    <div className="App">
      <Header />
      <main>
        <AddNewTheme onAddTheme={handleAddTheme} />
        <ColorCardsSection
          themes={themesDB}
          onThemesDelete={handleDeleteItem}
          onThemeEdit={handleEditItem}
        />
      </main>
    </div>
  );
}

export default App;
