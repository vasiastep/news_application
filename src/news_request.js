import {newsModal} from './modal'

export function getNews(options){

    const apiKey = 'apiKey=81c722ace915430da7076695afd718f0';
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const mainUrl = 'https://newsapi.org/v2/top-headlines?';
    const newContentBlock = document.createElement('div');
    newContentBlock.setAttribute('id', 'news-content-block');
    document.body.append( newContentBlock );
    
    if(document.getElementById('key_word-input').value){
        options.keyWord = `q=${document.getElementById('key_word-input').value.replace(/\s+.+/g, '')}&`;
    }
    try{
        if(document.getElementById('country-input').value){
            options.country = `country=${document.getElementById('country-input').value.match(/\(([a-z]{2})\)$/)[1]}&`;
        }
    } catch(e){
        let options = {
            title: 'Ooppss...',
            content: `<div class="error_text">
                <p class="error_text_par">Try to write country properly</p>
                <p class="error_text_par"><b>Format:</b> Country (country code) <b>or</b> (country code)</p>
                <p class="error_text_par"><b>For example:</b> Ukraine (ua) <b>or</b> (ua)</p></div>`,
            closable: true
        };
        const countryErrorModal = newsModal.modal(options);
        countryErrorModal.open();
    }
    if(document.getElementById('category-input').value){
        options.category = `category=${document.getElementById('category-input').value}&`;
    }

    return fetch(proxy + `${mainUrl}${options.country}${options.keyWord}${options.category}${apiKey}`)
        .then(response => response.json())
        .then(response => {

            

            if(response.totalResults == 0){
                let options = {
                    title: 'Ooppss...',
                    content: `<div class="error_text">
                        <p class="error_text_par">Can not find any results</p>`,
                    closable: true
                };
                const resultErrorModal = newsModal.modal(options);
                resultErrorModal.open();
            }

            let tempId = 0;
            response.articles.map(elem => {
                elem.id = tempId++;
            });

            newContentBlock.innerHTML = response.articles.map(configNewsBlocks).join('');

            for(let i=1; i < newContentBlock.children.length; i += 4){
                newContentBlock.children[i].classList.toggle('block-grey-bg')
            }
            return response.articles
        })
    
}

function configNewsBlocks(newsElement){
    return  `
        <hr>
        <div class="news-content-block-not-flex" data-id="${newsElement.id}">
            <div class="news-content-block-flex">
                <div class="news-content-block-flex-time">
                    ${new Date(newsElement.publishedAt).toLocaleTimeString().replace(/:\d\d$/g, '')}<br>
                </div>
                <div class="news-content-block-flex-main-body">
                    ${newsElement.title}
                </div>
            </div>
        </div>
    `
}
