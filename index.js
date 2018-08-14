const { app, BrowserWindow } = require('electron')

function createWindow() {
    mainWindow = new BrowserWindow( {
        width: 800,
        height: 500
    })
    mainWindow.loadFile(`${__dirname}/index.html`)
    mainWindow.webContents.openDevTools()
    mainWindow.on('closed',()=> {
        mainWindow = null
    })
}

app.on('ready', createWindow)