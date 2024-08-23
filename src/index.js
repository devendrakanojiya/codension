const fs = require("fs").promises;
const getTheme = require("./theme");
const getClassicTheme = require("./classic/theme");

const lightDefaultTheme = getTheme({
  theme: "light",
  name: "DK Light Default",
});

const lightHighContrastTheme = getTheme({
  theme: "light_high_contrast",
  name: "DK Light High Contrast"
})

const lightColorblindTheme = getTheme({
  theme: "light_colorblind",
  name: "DK Light Colorblind",
});

const darkDefaultTheme = getTheme({
  theme: "dark",
  name: "DK Dark Default",
});

const darkHighContrastTheme = getTheme({
  theme: "dark_high_contrast",
  name: "DK Dark High Contrast"
})

const darkColorblindTheme = getTheme({
  theme: "dark_colorblind",
  name: "DK Dark Colorblind"
})

const darkDimmedTheme = getTheme({
  theme: "dark_dimmed",
  name: "DK Dark Dimmed"
})

// Classic

const lightTheme = getClassicTheme({
  style: "light",
  name: "DK Light",
});

const darkTheme = getClassicTheme({
  style: "dark",
  name: "DK Dark",
});

// Write themes

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/light-default.json", JSON.stringify(lightDefaultTheme, null, 2)),
    fs.writeFile("./themes/light-high-contrast.json", JSON.stringify(lightHighContrastTheme, null, 2)),
    fs.writeFile("./themes/light-colorblind.json", JSON.stringify(lightColorblindTheme, null, 2)),
    fs.writeFile("./themes/dark-default.json", JSON.stringify(darkDefaultTheme, null, 2)),
    fs.writeFile("./themes/dark-high-contrast.json", JSON.stringify(darkHighContrastTheme, null, 2)),
    fs.writeFile("./themes/dark-colorblind.json", JSON.stringify(darkColorblindTheme, null, 2)),
    fs.writeFile("./themes/dark-dimmed.json", JSON.stringify(darkDimmedTheme, null, 2)),
    fs.writeFile("./themes/light.json", JSON.stringify(lightTheme, null, 2)),
    fs.writeFile("./themes/dark.json", JSON.stringify(darkTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))
