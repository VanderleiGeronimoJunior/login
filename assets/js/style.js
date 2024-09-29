class Style {
  static estilocss = null;
  static createStyle = () => {
    this.estilocss = `.fundoLogin{display:none;justify-content:center;align-items:center;width:100%;height:100vh;position:absolute;top:0;left:0;background-color:rgba(0,0,0,.75)}.fundoLogin.active{display: flex;z-index:1000;}.baseLogin{display:flex;justify-content:center;align-items:stretch;width:70%}.baseLogin.active{display: flex;}.elementosLogin{display:flex;justify-content:center;align-items:center;flex-direction:column;width:50%;background-color:#eee;border-radius:10px 0 0 10px;padding:10px}.logoLogin{display:flex;justify-content:center;align-items:center;width:50%;background: var(--red);padding:10px;border-radius:0 10px 10px 0}.logoLogin img{width:90%;border-radius:5px}.campoLogin{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;margin-bottom:10px;width:72%}.campoLogin label{font-size:16px;margin-bottom:5px;text-transform:uppercase;}.campoLogin input{font-size:18px;padding:10px;background-color:#fff;border-radius:5px;outline:none;border:none;margin-bottom:10px;width:100%}.botoesLogin{display:flex;justify-content:space-around;align-items:center;width:100%}.botoesLogin button{position: relative;cursor:pointer;background-color:var(--dark-orange);color:#fff;border-radius:5px;margin:8px;padding:10px;width:100px;border:none;-webkit-transition: all 0.3s;-moz-transition: all 0.3s;transition: all 0.3s;z-index: 1;}.botoesLogin button:after{position:absolute;content:"";width:0;height:100%;top:0;right:0;z-index:-1;background-color:var(--button-color-hover);border-radius:5px;box-shadow:inset 2px 2px 2px 0 rgba(255,255,255,.5),7px 7px 20px 0 rgba(0,0,0,.1),4px 4px 5px 0 rgba(0,0,0,.1);transition:all .3s ease}.botoesLogin button:hover{color:#fff}.botoesLogin button:hover:after{left:0;width:100%}.botoesLogin button:active{top:2px}.createCount{display:flex;justify-content:center;align-items:center;width:100%;margin-top:20px;cursor:pointer;text-decoration:none;color:#000}.titleLogin{display:flex;justify-content:center;align-items:center;width:100%;margin-bottom:20px;color:#000}`;
    const styleEstilo = document.createElement("style");
    styleEstilo.setAttribute("id", "id_estiloLogin");
    styleEstilo.setAttribute("rel", "stylesheet");
    styleEstilo.setAttribute("type", "text/css");
    styleEstilo.innerHTML = this.estilocss;
    document.head.appendChild(styleEstilo);
  };
}

export { Style };
