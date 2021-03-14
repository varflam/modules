function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass, isLink) {
    const tabs = document.querySelectorAll(tabsSelector),
          tabContent = document.querySelectorAll(tabsContentSelector),
          tabParent = document.querySelector(tabsParentSelector);

    let removeTabContent = function() {
        tabContent.forEach(tab => {
            tab.style.display = 'none';
            tab.classList.add('animated', 'fadeIn');
        });

        if(isLink) {
            tabs.forEach(tab => {
                const link = tab.querySelector('a');
                link.classList.remove(activeClass);
            });
        } else {
            tabs.forEach(tab => {
                tab.classList.remove(activeClass);
            });
        }
    };

    removeTabContent();

    let showTabContent = function(i = 0) {
        tabContent[i].style.display = 'block';
        if(isLink) {
            const link = tabs[i].querySelector('a');
            link.classList.add(activeClass);
        } else {
            tabs[i].classList.add(activeClass);
        }
    };

    showTabContent();

    tabParent.addEventListener('click', (e) => {
        const target = e.target;
        tabs.forEach((item, i) => {
            item.children.forEach(child => {
                if (target === child || target === item) {
                    removeTabContent();
                    showTabContent(i);
                }
            });
        });
    });
}

export default tabs;