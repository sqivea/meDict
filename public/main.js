const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

const defaultWidth = 800;
const defaultHeight = 400;
const frameHeight = 30;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: defaultWidth,
    minWidth: defaultWidth,
    maxWidth: defaultWidth,
    height: defaultHeight,
    minHeight: defaultHeight,
    maxHeight: defaultHeight,
    frame: false,
    fullscreenable: false,
    resizable: false,
    center: true
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
  mainWindow.setMenu(null);
}

(() => {
  app.on('ready', createWindow);
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
})();
