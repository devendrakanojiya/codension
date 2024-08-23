#  `Themes`

![ VS Code theme](https://user-images.githubusercontent.com/378023/132220037-3cd3e777-55a6-445f-9a2e-da6020ebd78d.png)
```sh
    - `DK Light Default`
    - `DK Light High Contrast` 
    - `DK Light Colorblind` 
    - `DK Dark Default`
    - `DK Dark High Contrast`
    - `DK Dark Colorblind` 
    - `DK Dark Dimmed`
``` 

## Contribute

1. Clone and open this [repo](https://github.com/devendrakanojiya/codension) 
2. Run `yarn` to install the dependencies.
3. Press `F5` to open a new window with your extension loaded
4. Make changes to the [`/src/theme.js`](https://github.com/devendrakanojiya/codension/blob/master/src/theme.js) file.
    - **UI**: For all changes to the "outer UI", like (status bar, file navigation etc.), take a look at the [Theme Color](https://code.visualstudio.com/api/references/theme-color) reference.
    - **Syntax**: For changes to the "code highlighting", examine the syntax scopes by invoking the [`Developer: Inspect Editor Tokens and Scopes`](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#scope-inspector) command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) in the Extension Development Host window.
6. Run `yarn build` to update the theme. You can also run `yarn start` instead to automatically rebuild the theme while making changes and no reloading should be necessary.

## Sayonara

> Note: Once you're happy and you know it, clap your hand.
