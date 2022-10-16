const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({width: 240,height: 497, show:false, frame: false,transparent: true,})


  //carregar o index.html do aplicativo.
  win.loadFile('./src/index.html')
  
  //Bloquear o controle de expandir a tela do usuario
  win.setResizable(false) 

  //Concerto bug de carregamento de tela
  win.once("ready-to-show",()=>{
      win.show();
    })
}

app.whenReady().then(createWindow)