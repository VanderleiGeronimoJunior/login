import { Style } from "./style.js";
import { HTML } from "./htmlLogin.js";

class Login {
    static logado=false;
    static matlogado=null;
    static nomelogado=null;
    static acessologado=null;
    // static estilocss=null;
    static callback_ok=null;
    static callback_naook=null;
    static endpoint="https://loginv1.cfbcursos.repl.co/";
    
    static login=(callback_ok,callback_naook,config=null)=>{
        if(config!=null){
            this.config=config;
        }
        this.callback_ok=()=>{callback_ok()};
        this.callback_naook=()=>{callback_naook()};
        
        Style.createStyle()

        HTML.htmlLogin()
    
    }

    static verificaLogin=()=>{
        const mat=document.querySelector("#f_username").value;
        const pas=document.querySelector("#f_senha").value;

        const endpoint=`https://loginv1.cfbcursos.repl.co/?matricula=${mat}&senha=${pas}`;
        //https://loginv1.cfbcursos.repl.co/?matricula=123&senha=321
        fetch(Login.endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado=true;
                this.matlogado=mat;
                this.nomelogado=res.nome;
                this.acessologado=res.acesso;
                this.callback_ok();
                this.Buttons.fechar();
            }else{
                this.logado=false;
                this.matlogado=null;
                this.nomelogado=null;
                this.acessologado=null;
                this.callback_naook();
            }
        });
    };

}

export {Login}