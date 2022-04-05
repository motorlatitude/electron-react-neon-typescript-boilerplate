declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: any;
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

// Modules to control application life and create native browser window
import { app, BrowserWindow } from 'electron'

function createWindow() {
  // Create the browser window.
  const mainWindow: any = new BrowserWindow({
    width: 900,
    height: 500,
    resizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  })

  // and load the index.html of the app.
  console.log(MAIN_WINDOW_WEBPACK_ENTRY)
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY).catch((err: any) => {
    console.log(err)
  })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
}).catch((err: any) => {
  console.log(err)
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
