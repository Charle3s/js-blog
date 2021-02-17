
const titleClickHandler = function(event){
    const clickedElement = this;
    console.log('clickedElement (with plus): ' + clickedElement);
    event.preventDefault();

    
  
    /* remove class 'active' from all article links  */
  
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
  

    /* add class 'active' to the clicked link */
  
    clickedElement.classList.add('active');

    /* remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('article.active');

    for(let activeArticle of activeArticles){

      activeArticle.classList.remove('active');
        
    }
    /* get 'href' attribute from the clicked link */
    const href = clickedElement.getAttribute('href');
  
    /* find the correct article using the selector (value of 'href' attribute) */
    const articleToShow = document.querySelector(href);
    console.log(articleToShow);
    /* add class 'active' to the correct article */
    articleToShow.classList.add('active');
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  /*     generateTitleLinks      */

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){
  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.immerHTML = '';

  console.log('optTitleListSelector');

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  let html = '';

  for(let article of articles){
    
    /* get the article id */

    const articleId = article.getAttribute('id')

    /* find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    console.log('linkHTML');
  
    /* create html of the link */

    html = html + linkHTML;

    console.log('html');

    } 

  titleList.innerHTML = html;

  /* insert link into titleList */
  
  const links = document.querySelectorAll('.titles a');
  for(let link of links) {
    link.addEventListener('click', titleClickHandler);
  }  
}

generateTitleLinks();


