

class Buttons {

    static config={
        login:"Logar",
    };

    static buttonOpenLogin=()=>{

        
        const showLogin= document.querySelector(".show-login");
        // Icone de Login
        // <i class='bx bx-user'></i>
        const btn_open=document.createElement("i");
        btn_open.setAttribute("id","btn_login");
        btn_open.setAttribute("class","bx bx-user");

        // Botão de login
        // const btn_open=document.createElement("button");
        // btn_open.setAttribute("id","btn_login");
        // btn_open.setAttribute("class","btn_login");
        // btn_open.innerHTML="Login";
        btn_open.addEventListener("click",(evt)=>{
            this.open();
        });
        // document.body.appendChild(btn_open);
        showLogin.appendChild(btn_open);

    }

    static open=()=>{

        const inputUsername = document.querySelector("#f_username")
        inputUsername.value = ""
        const inputSenha = document.querySelector("#f_senha")
        inputSenha.value = ""
        
        const createCount = document.querySelector("#createCount")
        createCount.style.display = "flex";
        const titleLogin = document.querySelector("#titleLogin")
        titleLogin.innerHTML=this.config.login;
        const btn_login = document.querySelector("#btn_login")
        btn_login.innerHTML=this.config.login;
        
        
        const labelUsername = document.querySelector("#labelUsername")
        labelUsername.innerHTML="Username";
        inputUsername.setAttribute("placeholder","Seu Usuário...");
        inputUsername.focus()

        const campoLoginEmail = document.querySelector("#campoLoginEmail")
        campoLoginEmail.style.display = "none";
        
        const campoConfirmSenha = document.querySelector("#campoConfirmSenha")
        campoConfirmSenha.style.display = "none";
        
        
        const fundoLogin=document.querySelector("#fundoLogin");
        transition.begin(fundoLogin,["opacity 0 1 1s ease-in-out"]);
        fundoLogin.classList.toggle("active");
        const id_estiloLogin=document.querySelector("#id_estiloLogin");
        id_estiloLogin.classList.toggle("active");
        }

    static buttonCancelar=()=>{
        const btn_cancelar=document.createElement("button");
        btn_cancelar.setAttribute("id","btn_cancelar");
        btn_cancelar.innerHTML="Cancelar";
        btn_cancelar.addEventListener("click",(evt)=>{
            this.fechar();
        });
        // botoesLogin.appendChild(btn_cancelar);
        return btn_cancelar;
    }

    static fechar=()=>{
        const fundoLogin=document.querySelector("#fundoLogin");
        fundoLogin.classList.toggle("active");
        const id_estiloLogin=document.querySelector("#id_estiloLogin");
        id_estiloLogin.classList.toggle("active");
        transition.begin(fundoLogin,["opacity 1 0 1s ease-in-out"]);
    }


}


export {Buttons}