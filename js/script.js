
const titleClickHandler = function (event) {
  const clickedElement = this;
  console.log('clickedElement (with plus): ' + clickedElement);
  event.preventDefault();
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  /* add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('article.active');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  /* get 'href' attribute from the clicked link */
  const href = clickedElement.getAttribute('href');
  /* find the correct article using the selector (value of 'href' attribute) */
  const articleToShow = document.querySelector(href);
  console.log(articleToShow);
  /* add class 'active' to the correct article */
  articleToShow.classList.add('active');
};

/*     generateTitleLinks      */


const optArticleSelector = '.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';
const optArticleAuthorSelector = '.post-author';

const generateTitleLinks = function (customSelector = '') {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  let html = '';

  for (let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute('id');
    // console.log(articleId);
    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    // console.log(articleTitle);
    /* create html of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    // console.log(linkHTML);
    html = html + linkHTML;
  }

  console.log(html);

  titleList.innerHTML = html;
};

generateTitleLinks();
const links = document.querySelectorAll('.titles a');
for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}
function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const tags = article.querySelector(optArticleTagsSelector);
    // console.log(tags);
    /* make html variable with empty string */
    tags.innerHTML = '';
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    // console.log(articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      /* generate HTML of the link */
      // console.log(tag);
      let htmlTag = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      // console.log(htmlTag);
      /* add generated code to html variable */
      html += htmlTag + ' ';
      /* END LOOP: for each tag */
    }
    // console.log(html);
    /* insert HTML of all the links into the tags wrapper */
    tags.insertAdjacentHTML('beforeend', html);
    /* END LOOP: for every article: */
  }
}

generateTags();

function tagClickHandler(event) {
  // console.log('aaaaaaaaaaaaaaaaaaaaaaaa');
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log(clickedElement);


  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(href);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  let tagLinksActive = document.querySelectorAll('a.active[href^="#tag-"]');
  //.classList.includes('active');
  /* START LOOP: for each active tag link */
  for (let tag of tagLinksActive) {
    /* remove class active */
    tag.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagHref = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for (let tag of tagHref) {
    /* add class active */
    tag.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');

}

function addClickListenersToTags() {
  /* find all links to tags */
  const links = document.querySelectorAll('.post-tags a');
  /* START LOOP: for each link */
  for (let link of links) {
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
  }
}

addClickListenersToTags();

/* generate Authors */

function generateAuthors() {
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles) {
    const authorName = article.querySelector(optArticleAuthorSelector);
    authorName.innerHTML = '';
    const articleAuthors = article.getAttribute('data-authors');
    const linkHTML = '<a href="#author-' + articleAuthors + '">' + articleAuthors + '</a>';
    authorName.insertAdjacentHTML('beforeend', linkHTML);
  }
}
generateAuthors();

function authorsClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  const href = clickedElement.getAttribute('href');
  const author = href.replace('#author-', '');
  const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');
  for (let activeAuthor of activeAuthors) {
    activeAuthor.classList.remove('active');
  }
  const authorsLinks = document.querySelectorAll('a[href="' + href + '"]');
  for (let authorLink of authorsLinks) {
    authorLink.classList.add('active');
  }
  generateTitleLinks('[data-authors="' + author + '"]');
}
function addClickListenersToAuthors() {
  const links = document.querySelectorAll('.post-author a');
  for (let link of links) {
    link.addEventListener('click', authorsClickHandler);
  }
}
addClickListenersToAuthors();