const MenuBar = require('menubar');

const menubar = MenuBar({
  window: 600,
  height: 700,
  icon: './images/rsz_beet.png'
});

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
});
