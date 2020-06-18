const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

const defaultWidth = 900;
const defaultHeight = 520;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: defaultWidth,
    minWidth: defaultWidth,
    maxWidth: defaultWidth,
    height: defaultHeight,
    minHeight: defaultHeight,
    maxHeight: defaultHeight,
    frame: false,
    transparent: true,
    fullscreenable: false,
    resizable: false,
    center: true,
    webPreferences: {
      nodeIntegration: true
    }
  });
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true,
  });
  mainWindow.loadURL(startUrl);
  mainWindow.on('closed', () => { mainWindow = null; });
  mainWindow.setMenu(null);
}

(() => {
  app.on('ready', () => {
    setTimeout(createWindow, 300);
  });
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
  // Allow use of native sqlite3 modules.
  app.allowRendererProcessReuse = false;
  app.commandLine.appendSwitch('enable-transparent-visuals');
  app.commandLine.appendSwitch('disable-gpu');
})();
