# meDict
A simple personal vocabulary application.
![](Screenshot.png?raw=true "Screenshot")

# How to use
To add a new word just type your word and translation (you can provide any comment in thet field) and press Add.

Words are being added with hidden comments so that you can check yourself. You can unhide the comment/translation by clicking that field.

All changes are conneted to the date you pick on the calendar bar.

# Debug project
```shell
npm i
npm run start-react
npm run start-electron
```

# Build
To build React app:
```shell
npm i
npm run build-react
```
To create Electron boilerplate:
```shell
npm run build-electron-bash # macOS/Linux
```
```shell
npm run build-electron-powershell # Windows
```
```shell
npm run package-win # or package-mac/package-linux
```