$(document).ready(function(){
    var accunt = document.getElementById("accunt")
    var accunterr = document.getElementById("accunterr")
    var checkerr = document.getElementById("checkerr")

    var pass = document.getElementById("pass")
    var passwd = document.getElementById("passwd")

    accunt.addEventListener("focus", function(){
        accunterr.style.display = "none"
        checkerr.style.display = "none"
    },false)
    //账号检测
    accunt.addEventListener("blur", function(){
        instr = this.value
        if (instr.length < 6 || instr.length > 12){
            accunterr.style.display = "block"
            return
        }
        //ajax函数回调
        $.post("/checkuserid/", {"userid":instr}, function(data){
            if (data.status == "error"){
                checkerr.style.display = "block"
            }
        })
    },false)


    var pass = document.getElementById("pass")
    var passerr = document.getElementById("passerr")

    pass.addEventListener("focus", function(){
        passerr.style.display = "none"
    },false)
    //密码检测
    pass.addEventListener("blur", function(){
        instr = this.value
        if (instr.length < 6 || instr.length > 16){
            passerr.style.display = "block"
            return
        }
         //ajax函数回调
        $.post("/checkpassid/", {"passid":instr}, function(data){
            if (data.status == "error"){
                passerr.style.display = "block"
            }
        })
    },false)


    var passwd = document.getElementById("passwd")
    var passwderr = document.getElementById("passwderr")

    passwd.addEventListener("focus", function(){
        passwderr.style.display = "none"
    },false)
    //两次密码是否相同检测
    passwd.addEventListener("blur", function(){
        instr = this.value
        if (instr != pass.value){
            passwderr.style.display = "block"
            return
        }
     },false)


})