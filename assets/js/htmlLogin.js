import { Buttons } from "./button.js";
import { Login } from "./login.js";

class HTML {
    static config={
        cor:"048",
        img:"https://placehold.co/300x200",
        login:"Entrar Com",
        createAcount:"Criar Conta",
        createAcountButton:"Cadastrar"
    };
    
    static htmlLogin=()=>{

        Buttons.buttonOpenLogin()
        
        const fundoLogin=document.createElement("div");
        fundoLogin.setAttribute("id","fundoLogin");
        fundoLogin.setAttribute("class","fundoLogin");
        document.body.prepend(fundoLogin);

        const baseLogin=document.createElement("div");
        baseLogin.setAttribute("id","baseLogin");
        baseLogin.setAttribute("class","baseLogin");
        fundoLogin.appendChild(baseLogin);

        const elementosLogin=document.createElement("div");
        elementosLogin.setAttribute("id","elementosLogin");
        elementosLogin.setAttribute("class","elementosLogin");
        baseLogin.appendChild(elementosLogin);        

        const titleLogin=document.createElement("h2");
        titleLogin.setAttribute("id","titleLogin");
        titleLogin.setAttribute("class","titleLogin");
        titleLogin.innerHTML=this.config.login;
        elementosLogin.appendChild(titleLogin);        

        const campoLoginUsername=document.createElement("div");
        campoLoginUsername.setAttribute("id","campoLoginUsername");
        campoLoginUsername.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginUsername);

        const labelUsername=document.createElement("label");
        labelUsername.setAttribute("id","labelUsername");
        labelUsername.innerHTML="Username";
        campoLoginUsername.appendChild(labelUsername);

        const inputUsername=document.createElement("input");
        inputUsername.setAttribute("id","f_username");
        inputUsername.setAttribute("type","text");
        // inputUsername.setAttribute("type","email");
        inputUsername.setAttribute("placeholder","Seu Usuário...");
        inputUsername.setAttribute("name","f_username");
        inputUsername.setAttribute("required", "required");
        campoLoginUsername.appendChild(inputUsername);

        const campoLoginEmail=document.createElement("div");
        campoLoginEmail.setAttribute("id","campoLoginEmail");
        campoLoginEmail.setAttribute("class","campoLogin");
        campoLoginEmail.style.display = "none";
        elementosLogin.appendChild(campoLoginEmail);

        const labelEmail=document.createElement("label");
        labelEmail.innerHTML="Email";
        campoLoginEmail.appendChild(labelEmail);

        const inputEmail=document.createElement("input");
        inputEmail.setAttribute("id","f_Email");
        inputEmail.setAttribute("type","email");
        inputEmail.setAttribute("name","f_Email");
        inputEmail.setAttribute("required", "required");
        inputEmail.setAttribute("placeholder","Seu Email...");
        campoLoginEmail.appendChild(inputEmail);

        const campoLoginSenha=document.createElement("div");
        campoLoginSenha.setAttribute("id","campoLoginSenha");
        campoLoginSenha.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginSenha);
        
        const labelSenha=document.createElement("label");
        labelSenha.innerHTML="Senha";
        campoLoginSenha.appendChild(labelSenha);

        const inputSenha=document.createElement("input");
        inputSenha.setAttribute("id","f_senha");
        inputSenha.setAttribute("type","password");
        inputSenha.setAttribute("name","f_senha");
        inputSenha.setAttribute("required", "required");
        inputSenha.setAttribute("placeholder","Sua Senha...");
        campoLoginSenha.appendChild(inputSenha);

        const campoConfirmSenha=document.createElement("div");
        campoConfirmSenha.setAttribute("id","campoConfirmSenha");
        campoConfirmSenha.setAttribute("class","campoLogin");
        campoConfirmSenha.style.display = "none";
        elementosLogin.appendChild(campoConfirmSenha);
        
        const labelConfirmSenha=document.createElement("label");
        labelConfirmSenha.innerHTML="Confirmar Senha";
        campoConfirmSenha.appendChild(labelConfirmSenha);

        const inputConfirmSenha=document.createElement("input");
        inputConfirmSenha.setAttribute("id","f_confimSenha");
        inputConfirmSenha.setAttribute("type","password");
        inputConfirmSenha.setAttribute("name","f_confimSenha");
        inputConfirmSenha.setAttribute("required", "required");
        inputConfirmSenha.setAttribute("placeholder","Confime sua Senha...");
        campoConfirmSenha.appendChild(inputConfirmSenha);

        const botoesLogin=document.createElement("div");
        botoesLogin.setAttribute("class","botoesLogin");
        elementosLogin.appendChild(botoesLogin);

        const btn_login=document.createElement("button");
        btn_login.setAttribute("id","btn_login");
        btn_login.innerHTML="Login";
        btn_login.addEventListener("click",(evt)=>{
            Login.verificaLogin;
        });
        botoesLogin.appendChild(btn_login);
        
        botoesLogin.append(Buttons.buttonCancelar());

        const createCount=document.createElement("a");
        createCount.setAttribute("id","createCount");
        createCount.setAttribute("class","createCount");
        createCount.setAttribute("href","#");
        createCount.innerHTML="Não tem conta? Registre-se";
        elementosLogin.appendChild(createCount);
        // <a href=""></a>

        createCount.addEventListener("click", ()=>{
        inputUsername.value = ""
        inputSenha.value = ""
            
        createCount.style.display = "none";
        titleLogin.innerHTML=this.config.createAcount;
        btn_login.innerHTML=this.config.createAcountButton;
        

        labelUsername.innerHTML="Name";
        inputUsername.setAttribute("placeholder","Seu Nome...");
        inputUsername.focus()

        campoLoginEmail.style.display = "block";

        campoConfirmSenha.style.display = "block";

        transition.begin(campoLoginUsername,["opacity 0 1 1000ms 0.5s", "transform translateY(10px) translateY(0) 2s ease-in-out"]);

        transition.begin(campoLoginSenha,["opacity 0 1 1000ms 0.7s", "transform translateY(10px) translateY(0) 2s ease-in-out "]);
        
        transition.begin(titleLogin, ["opacity 0 1 1000ms 0.5s", "transform translateY(10px) translateY(0) 2s ease-in-out"]);

        transition.begin(labelUsername, ["opacity 0 1 1000ms 0.5s", "transform translateY(10px) translateY(0) 2s ease-in-out"]);

        transition.begin(campoLoginEmail, ["opacity 0 1 1000ms 0.5s", "transform translateY(10px) translateY(0) 2s ease-in-out"]);

        transition.begin(campoConfirmSenha, ["opacity 0 1 1000ms 0.5s", "transform translateY(10px) translateY(0) 2s ease-in-out"]);
        

        })

        const logoLogin=document.createElement("div");
        logoLogin.setAttribute("id","logoLogin");
        logoLogin.setAttribute("class","logoLogin");
        baseLogin.appendChild(logoLogin);

        const imgLogoLogin=document.createElement("img");
        imgLogoLogin.setAttribute("src",this.config.img);
        // imgLogoLogin.setAttribute("src","https://placehold.co/300x200");
        imgLogoLogin.setAttribute("title","Login");
        logoLogin.appendChild(imgLogoLogin);
    }
    
    
}

export {HTML}