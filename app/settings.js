const {ipcMain} = require('electron')
const Config = require('electron-config')
const config = new Config()

module.exports = {
	init: function(){
		console.log('init settings')

		ipcMain.on('settings:set', (event, key, value) => {
      config.set(key, value)
      event.returnValue = config.get(key)
		})

    ipcMain.on('settings:get', (event, key) => {
      event.returnValue = config.get(key)
    })
	}
}
