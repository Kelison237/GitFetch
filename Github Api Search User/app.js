const inputValue = document.querySelector('input');
const  searchButton = document.querySelector('.searchbtn');
const nameContainer = document.querySelector('.profileName');
const userName  = document.querySelector('.userName');
const reposContainer = document.querySelector('.repos');
const urlConatainer = document.querySelector('.urlForProfile');
const dibBox = document.querySelector('.dibBox');


const fetchUsers = async (user) => {
   const api_call = await fetch(`https://api.github.com/users/${user}`)
   const data = await api_call.json();
   return {data}
};

const showData = (e) =>{
e.preventDefault();
    fetchUsers(inputValue.value)
    .then((res) =>{
        console.log(res);
       
       let keke = document.createElement('img');
       keke.src=`${res.data.avatar_url}`;
       keke.alt = "Profile Photo";
       keke.classList.add("profilePhoto")
       dibBox.appendChild(keke);

        let anotherDiv = document.createElement('div');
        dibBox.appendChild(anotherDiv);
        anotherDiv.classList.add('anotherDiv'); 
        
        let userName = document.createElement('p');
        userName.classList.add('username')
        userName.innerHTML = `<b>Name:</b> ${res.data.name}`;
        anotherDiv.appendChild(userName);
     
     
        let userLogin = document.createElement('p');
        userLogin.classList.add('userlogin')
        userLogin.innerHTML = `<b>User Name:</b> ${res.data.login}`;
        anotherDiv.appendChild(userLogin);
   
   
        let repos = document.createElement('p');
        repos.classList.add('repos')
        repos.innerHTML = `<b>No of Repo's:</b> ${res.data.public_repos}`;
        anotherDiv.appendChild(repos);
   
   
        let uRLs = document.createElement('p');
        uRLs.classList.add('url');
        uRLs.innerHTML = `<b>URL:</b> <a href="${res.data.html_url}"> ${res.data.html_url}</a><br><hr>`;
        anotherDiv.appendChild(uRLs);
   
    })
}

searchButton.addEventListener("click", showData);
