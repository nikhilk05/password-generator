// let btn=document.getElementsByClassName("btn");
const passwordBox=document.getElementById("password");
const length = 15;
const samllAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',' i' ,'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const capitalAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-' , '+' , '+', '_', '[' ,' ]', '/', ',', '?' , '.'];
const weakpassbtn = document.getElementById("weakpwd");
const mediumpassbtn = document.getElementById("mediumpwd");
const strongpassbtn = document.getElementById("strongpwd");
const copyPwdbtn = document.getElementById("copypwd");

class password{
    weakpass(){
        let password = "";
        let newArr= samllAlphabets.concat(capitalAlphabets);
        while(length > password.length){
            const element = newArr[Math.floor(Math.random() * newArr.length)];
            password += element;
        }
        passwordBox.value=password;
    }

    mediumpass(){
        let password = "";
        let newArr = samllAlphabets.concat(capitalAlphabets, numbers);
        while(length > password.length){
            const element = newArr[Math.floor(Math.random() * newArr.length)];
            password += element;
        }
        passwordBox.value = password;
    }

    strongpass(){
        let password = "";
        let newArr = samllAlphabets.concat(capitalAlphabets, numbers, specialSymbols);
        while(length > password.length){
            const element = newArr[Math.floor(Math.random() * newArr.length)];
            password += element;
        }
        passwordBox.value = password;
    }

    copypass(){
        passwordBox.select();
        document.execCommand("copy");
    }
}

let pass= new password()
weakpassbtn.addEventListener('click', pass.weakpass)
mediumpassbtn.addEventListener('click', pass.mediumpass)
strongpassbtn.addEventListener('click', pass.strongpass)
copyPwdbtn.addEventListener('click', pass.copypass)