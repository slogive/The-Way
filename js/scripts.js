const $d = document;

const openNav = () => {
    $nav = $d.getElementById('navUl');

    if ($nav.classList == 'list close') {
        $d.body.style.overflow = 'hidden';
        $nav.classList.remove('close');
        $nav.classList.add('open');
    } else if ($nav.classList == 'list open') {
        $d.body.style.overflow = null;
        $nav.classList.remove('open');
        $nav.classList.add('close');
    }
};

const ajustBanner = () => {
    $nav = $d.getElementById('nav');
    $main = $d.querySelector('.main');

    nh = window.getComputedStyle($nav).getPropertyValue('height');
    nh = nh.replace('px', '');
    nh = parseInt(nh);
    wh = window.innerHeight;

    fh = wh - nh;
    fh = fh + 'px';

    $main.style.minHeight = fh;

    fadedMain();
};

const fadedMain = () => {
    $main = $d.getElementById('navMain');

    setTimeout(() => {
        $main.classList.remove('hi');
        $main.classList.add('vi');
    }, 500);
};

function screenTest() {
    const MediaQueryListMb = window.matchMedia('screen and (max-width: 600px)');
    const MediaQueryListPc = window.matchMedia('screen and (min-width: 601px)');
    $main = $d.getElementById('sectionContainer');

    if (MediaQueryListPc.matches) {
        $main.style.backgroundImage = "url('img/bk-pc.png')";
    } else if (MediaQueryListMb.matches) {
        $main.style.backgroundImage = "url('img/bk-mb.png')";
    }
}

$d.addEventListener('click', (e) => {
    const $navBtn = $d.getElementById('navBtn');

    if (e.target === $navBtn) {
        openNav();
    }
});

$d.addEventListener('DOMContentLoaded', (e) => {
    screenTest();
    ajustBanner();
});

$d.addEventListener('load', () => {
    ajustBanner();
});

window.addEventListener('resize', ajustBanner);
