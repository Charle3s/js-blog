
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
  const titleList = querySelector('optTitleListSelector')
  function clearTitleLinks(){
    document.querySelector('optiTitleListSelector').innerHTML = '';
  }
 

  /* for each article */

  /* get the article id */

  /* find the title element */

  /* get the title from the title element */

  /* create HTML of the link */

  /* insert link into titleList */



generateTitleLinks();}