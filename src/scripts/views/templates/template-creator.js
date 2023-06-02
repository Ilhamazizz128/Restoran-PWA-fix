import CONFIG from '../../global/config';

const createRestaurantsDetail = (getRestoData) => `
    <section>
        <h3 class="detail-h3">Restaurant Detail</h3>
        <img src="${getRestoData.pictureId ? CONFIG.BASE_IMAGE_URL + getRestoData.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" crossorigin="anonymous" alt="${getRestoData.name}"/>
        
        <article class="detail">
            <h1>${getRestoData.name}</h1>
            <div><i class="fa fa-star rating"></i><b> ${getRestoData.rating}</b></div>
            <br/>
            <div><i class="fa fa-location-dot city"></i> <b>${getRestoData.city}, ${getRestoData.address}</b></div>
        </article>
        <p>${getRestoData.description}</p>
    </section>
    <section>
        <h3 class="detail-h3">Kategori</h3>
        ${getRestoData.categories
            .map(
                (category) => `
                    <button class="buttontabs">${category.name}</button>
                `,
            )
            .join('')
        }
    </section>
    <section>
        <h3 class="detail-h3">Menu Makanan</h3>
        ${getRestoData.menus.foods
            .map(
              (food, i) => `
                <button class="buttontabs">${i + 1}. ${food.name}</button>
              `,
            )
            .join('')
        }
    </section>
    <section>
        <h3 class="detail-h3">Menu Minuman</h3>
        ${getRestoData.menus.drinks
            .map(
              (drink, i) => `
                <button class="buttontabs">${i + 1}. ${drink.name}</button>
              `,
            )
            .join('')
        }
    </section>
    <section>
        <h3 class="detail-h3">Review Baik Kalian</h3>
        <form action="" method="post">
            <input type="text" class="form-control" id="name" placeholder="Input Namamu kawan ..."><br>
            <textarea class="form-control" aria-label="Review" placeholder="Input deskripsimu kawan..."></textarea><br>
            <button id="addReviewButton" type="Kirim">Submit</button>
        </form>
        <div class="review-item">
        ${getRestoData.customerReviews
            .map(
              (reviews) => `
                <div class="review-card">
                    <h5>${reviews.name}</h5>
                    <p>${reviews.review}</p>
                    <p>${reviews.date}</p>
                </div>
              `,
            )
            .join('')
        }
        </div>
    </section>
`;

const createRestaurantsItemCard = (getRestoData) => `
    <div class="resto-card">
        <img src="${ CONFIG.BASE_IMAGE_URL + getRestoData.pictureId  }"  alt="${getRestoData.name}"  crossorigin="anonymous" />
        <a href="${`/#/detail/${getRestoData.id}`}"><h3>${getRestoData.name}</h3></a>
        <article class="detail">
            <div><i class="fa fa-star rating"></i><b> ${getRestoData.rating}</b></div>
            <div><i class="fa fa-location-dot city"></i> <b>${getRestoData.city}</b></div>
        </article>
        <p>${getRestoData.description}</p>
    </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurants" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurants" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createRestaurantsItemCard,
    createRestaurantsDetail,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};
