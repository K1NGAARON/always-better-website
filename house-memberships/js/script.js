const allCoaches = [
    {
        name: 'Thomas Craane',
        img: '/house-memberships/img/coaches/thomas.jpg'
    },
    {
        name: 'Thijs De Smet',
        img: '/house-memberships/img/coaches/thijs.jpg'
    },
    {
        name: 'Thibo De Bleser',
        img: '/house-memberships/img/coaches/thibo.jpg'
    },
    {
        name: 'Sam Berenblit',
        img: '/house-memberships/img/coaches/sam.jpg'
    },
    {
        name: 'Lotte François',
        img: '/house-memberships/img/coaches/lotte.jpg'
    },
    {
        name: 'Jesse Deschepper',
        img: '/house-memberships/img/coaches/jesse.jpg'
    },
    {
        name: 'Gil Callens',
        img: '/house-memberships/img/coaches/gil.jpg'
    },
    {
        name: 'Frédérique de Dobbelaere',
        img: '/house-memberships/img/coaches/frederique.jpg'
    },
    {
        name: 'Bruno Demeulemeester',
        img: '/house-memberships/img/coaches/bruno.jpg'
    },
];

const howContent = [];

function addCoaches(e) {
    const target = document.querySelector('#coaches');

    const coaches = allCoaches.map(coach => {
        return `
            <div class="card">
                <img src="${coach.img}">
                <div class="content">
                    <h5>
                        ${coach.name}
                    </h5>
                </div>
            </div>
        `;
    }).join('');

    target.innerHTML = coaches;
};

function howItWorks(e) {

}

$(document).ready(function() {
    addCoaches();
});