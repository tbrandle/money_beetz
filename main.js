// var app = require('app');
// var BrowserWindow = require('browser-window');
const MenuBar = require('menubar');

const menubar = MenuBar({
  window: 600,
  height: 700,
  icon: './images/rsz_beet.png'
});

// require('crash-reporter').start();

menubar.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    menubar.quit();
  }
});

menubar.on('ready', function () {
  console.log('app is ready');
});

menubar.on('after-create-window', function () {
  menubar.window.loadURL('file://' + __dirname + '/public/index.html');
  menubar.window.on('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      menubar.window.webContents.send('resized' , { data: fullHistory, bounds: menubar.window.getBounds() });
    }, 150);
  });
});
