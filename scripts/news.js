'use strict'
let  btnPrev = document.getElementById("btn-prev")
let pagenum = document.getElementById("page-num")
btnPrev.style.display = "none"
let postApi ='https://newsapi.org/v2/everything?q=tesla&from=2022-04-05&sortBy=publishedAt&apiKey=ca8cf26c348647c2991a7269a0449ecc'
fetch(postApi)
    .then(function (response) {
       return response.json();
    })
    .then(function (posts){
      let totalPage =  Math.ceil(posts.articles.length /5) ;
      renderNews(posts);
      btnNext.addEventListener("click",() =>{
        btnPrev.style.display = "block";
        currentPage++;
        if(currentPage >= totalPage){
          currentPage = totalPage;
          btnNext.style.display = "none";
        }
        pagenum.innerHTML = currentPage;
        start = (currentPage - 1) * perPage;
        end  = currentPage * perPage;
        renderNews(posts);
      })
      btnPrev.addEventListener("click",() =>{
        btnNext.style.display = "block";
        currentPage--;
        if(currentPage <= 1){
          currentPage = 1;
          btnPrev.style.display = 'none';
        }
        pagenum.innerHTML = currentPage;
        start = (currentPage - 1) * perPage;
        end  = currentPage * perPage;
        renderNews(posts);
      })
    })
    let number = JSON.parse(localStorage.getItem('numberPage'))
    let perPage = parseInt(number[0]);
    console.log(perPage)
    let currentPage = 1;
    let start = 0; 
    let end = perPage;
    let  btnNext = document.getElementById("btn-next")
    function renderNews(posts){
      let html = '';
      let htmls = posts.articles.map(function (post,index) {
         if(index >=start && index < end){
         html += `
           <div style = "width:1400px; height : 350px"> 
               <img src="${post.urlToImage}" style = "width:400px; hieght : 100%;float : left;margin-right : 10px">
               <h2>${post.title}</h2>
               <p>${post.content}</p>
               <a href = "${post.url}"><button type="button" class = "btn btn-primary">View</button><a>
           </div>          
         `
         return html;
         } 
      });
      document.getElementById("news-container").innerHTML = html;
    }
  