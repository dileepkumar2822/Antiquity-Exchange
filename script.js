function register(){
    fetch("server/register.php",{
        method:"POST",
        body:JSON.stringify({
            username:username.value,
            email:email.value,
            password:password.value
        })
    }).then(r=>r.text()).then(d=>alert(d));
}

function login(){
    fetch("server/login.php",{
        method:"POST",
        body:JSON.stringify({
            email:email.value,
            password:password.value
        })
    }).then(r=>r.text()).then(d=>{
        if(d!="invalid"){
            window.location="index.html";
        }else{
            alert("Login Failed");
        }
    });
}

function addItem(){
    fetch("server/addItem.php",{
        method:"POST",
        body:JSON.stringify({
            title:title.value,
            description:description.value,
            price:price.value,
            end_time:end_time.value
        })
    }).then(r=>r.text()).then(d=>alert(d));
}

fetch("server/items.php")
.then(r=>r.json())
.then(data=>{
    let out="";
    data.forEach(i=>{
        out+=`
        <div class="card">
            <h3>${i.title}</h3>
            <p>${i.description}</p>
            <p>₹${i.start_price}</p>
        </div>`;
    });
    document.getElementById("items").innerHTML=out;
});
