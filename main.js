const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 400,
    show: false,
    movable: true,
    frame: false,
    transparent: true,
  });

  mainWindow.loadFile('index.html');
  mainWindow.once('ready-to-show', mainWindow.show);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
