import './styles/style.less';
import {newsModal} from './modal'
import {getNews} from './news_request';


window.addEventListener( 'load', getNewsAndShowModal );

const languageInput = document.getElementById('country-input');
const categoryInput = document.getElementById('category-input');
const languageMenu = document.getElementsByClassName('language_menu')[0];
const categoryMenu = document.getElementsByClassName('category_menu')[0];

languageInput.addEventListener('mouseover', addLanguageClass);
categoryInput.addEventListener('mouseover', addCategoryClass);
languageMenu.addEventListener('click', addLanguageClass);
categoryMenu.addEventListener('click', addCategoryClass);
languageMenu.addEventListener('mouseleave', removeLanguageClass);
categoryMenu.addEventListener('mouseleave', removeCategoryClass);
document.addEventListener('click', removeLanguageClass);
document.addEventListener('click', removeCategoryClass);

function addLanguageClass(e){
    languageMenu.classList.add('menu_choose_active');
    languageMenu.parentNode.style.zIndex = 20;
    if(e.target.textContent) {
        languageInput.value = e.target.textContent + ' ' + `(${e.target.id})`;
        removeLanguageClass();
    }
}
function addCategoryClass(e){
    categoryMenu.classList.add('menu_choose_active');
    categoryMenu.parentNode.style.zIndex = 20;
    if(e.target.textContent) {
        categoryInput.value = e.target.textContent;
        removeCategoryClass();
    }
}
function removeLanguageClass(){
    languageMenu.classList.remove('menu_choose_active');
    languageMenu.parentNode.style.zIndex = -20;
}
function removeCategoryClass(){
    categoryMenu.classList.remove('menu_choose_active');
    categoryMenu.parentNode.style.zIndex = -20;
}


const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', getNewsAndShowModal);

function getNewsAndShowModal() {
    event.preventDefault();

    submitBtn.disabled = true;

    const requestOptions = {
        keyWord: '', 
        country: 'country=ua&', 
        category: '',
    }

    if( document.getElementById('news-content-block') ){
        document.body.removeChild( document.getElementById('news-content-block') );
    }

    getNews(requestOptions)
        .then( response => {

            submitBtn.disabled = false;
            const newContentBlock = document.getElementById('news-content-block');

            newContentBlock.addEventListener('click', event => {
                let target = event.target;
            
                function thisElem(element) {
                    if(element.hasAttribute('data-id')) {
                        return +element.getAttribute('data-id');
                    } else {
                        return thisElem(element.parentNode);
                    }
                }
                
                response.map((elem) => {
                    if(elem.id == thisElem(target)){
                        console.log( elem );
                        const options = {
                            title: 'News PROvider',
                            content: `
                            <div class="modal-news-img-and-title">
                                <h2 class="modal-news-title">${elem.title || ''}</h2>
                                <img class="modal-news-img" src="${elem.urlToImage}" alt="Oops...">
                            </div>
                            <div class="modal-news-main-body">
                                <p class="modal-news-description">${elem.description || ''}</p>
                                <div class="modal-news-link">Read this article on
                                    <a class="modal-news-link-target" href="${elem.url}" target="_blank">${elem.source.name}</a>
                                </div>
                            </div>`,
                            
                            closable: true
                        }
                    
                        const newsModalBlock = newsModal.modal(options);
                        newsModalBlock.open();
                    }
                })


            });


        } )
}

