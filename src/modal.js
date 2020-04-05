export const newsModal = {}

function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('vmodal');
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">

            <div class="modal-window">
                <div class="modal-window-header">
                    <h2>${options.title}</h2>
                    ${options.closable ? `<p id="close-btn" data-close="true">&times;</p>` : ''}
                </div>
                <div class="modal-window-body" data-content>
                    ${options.content || ''}
                </div>                
            </div>
        </div>
    `)
    document.body.append(modal);

    return modal
}

newsModal.modal = function(options) {
    const ANIMATION_TRANSITION = 400;
    const $modal = _createModal(options);
    let opened = false;

    if(opened === true) {
        modal.close();
    }

    const modal = {
        open() {
            $modal.classList.add('open');
            opened = true
        },
        close() {
            $modal.classList.remove('open');
            $modal.classList.add('hide');
        },
    }


    const listener = event => {
        if(event.target.dataset.close) {
            modal.close();
            setTimeout(() => {
                modal.destroy();
            }, ANIMATION_TRANSITION);
        }
    }
    $modal.addEventListener('click', listener);


    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal);
            $modal.removeEventListener('click', listener);
        },
        setContent( html ){
            $modal.querySelector('[data-content]').innerHTML = html;
        }
    })
}