function closeModal(modalSelector) {
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.remove('visible');
    modalWindow.classList.add('hidden');
    document.body.style.overflow = '';
    }
    
function openModal(modalSelector){
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('visible');
    modalWindow.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function modal(triggerSelector, modalSelector) {
    const modalBtn = document.querySelectorAll(triggerSelector),
          modalWindow = document.querySelector(modalSelector);
    
    modalBtn.forEach(item => {
        item.addEventListener('click', () => openModal(modalSelector));
    });

    modalWindow.addEventListener('click', (evt) => {
        if (evt.target === modalWindow || evt.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape' && modalWindow.classList.contains('visible')) {
            closeModal(modalSelector);
        }
    });

    //Появление модального окна при скролле
    const showModalByScroll = () => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                openModal(modalSelector);
                window.removeEventListener('scroll', showModalByScroll);
            }
        });
    };
}

export default modal;
export {openModal};
export {closeModal};
