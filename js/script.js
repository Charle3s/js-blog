
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
function generateTitleLinks() {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
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
    /* insert link into titleList */
    // titleList.innerHTML = titleList.innerHTML + linkHTML;
    titleList.insertAdjacentHTML('afterbegin', linkHTML);
  }
}

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
  console.log('aaaaaaaaaaaaaaaaaaaaaaaa');
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  // console.log(clickedElement);


  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.href;
  console.log(href);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log(tag);
  /* find all tag links with class active */
  let tagLinksList = document.querySelectorAll('.list a');
  //.classList.includes('active');
  /* START LOOP: for each active tag link */
  /* remove class active */
  /* END LOOP: for each active tag link */
  /* find all tag links with "href" attribute equal to the "href" constant */
  /* START LOOP: for each found tag link */
  /* add class active */
  /* END LOOP: for each found tag link */
  /* execute function "generateTitleLinks" with article selector as argument */
  //('article');
  console.log(tagLinksList);
  for (let i = 0; i < tagLinksList.length; i++) {
    let anchor = tagLinksList[i];
    if (anchor.classList.contains('active')) {
      console.log('i = ' + i);
      anchor.classList.remove('active');
      if (anchor.href === href) {
        anchor.classList.add('active');
        console.log(anchor);
      }
    }
  }

  generateTitleLinks('article');
}

function addClickListenersToTags() {
  /* find all links to tags */

  /* START LOOP: for each link */

  /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();
