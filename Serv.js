
let b = document.getElementsByClassName('decoration');
let phone = document.getElementsByClassName('iphone');
let email = document.getElementsByClassName('email_text');


window.onload = function(){
    
    upDateDisplay(b, phone, email);
    
};

function upDateDisplay(string_name, string_phone, string_email){
    let url = 'http://127.0.0.1:3000';
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send();
    let retort;
    request.onreadystatechange = function(){
        if(this.readyState != 4) return; 
  
    if (request.status != 200){
        alert(request.status + ':' + request.statusText);
      }else{
        retort = Array.from(JSON.parse(request.response));
      let a = 0;
        for(let arr of retort){
            if (a == 50) break;
            string_name[a].innerHTML = arr.name;
            string_phone[a].innerHTML = arr.phone;
            string_email[a].innerHTML = arr.email;
            a++;
        }

    }
    }
};







