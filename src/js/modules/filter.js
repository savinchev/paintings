const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');

    const clickFilter = e => {
        let target = e.target;
        let name = '.' + target.className;
        let mark = wrapper.querySelectorAll(name);

        if(!target.classList.contains('active')) {
            typeFilter(mark);
        }

        items.forEach(btn => btn.classList.remove('active'));
        target.classList.add('active');
    }

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType.length) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            })
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    items.forEach(item => {
        item.addEventListener('click', clickFilter);
    });
}

export default filter;