import GetRestaurantSource from '../../data/source-get-restoran';
import { createRestaurantsItemCard } from '../templates/template-creator.js';

const HomePage = {
    async render() {
      return `
        <article id="restaurant">
          <h2>Jelajahi Restaurants</h2>
          <section id="restaurant-data" class="list-item"></section>
        </article>
      `;
    },

    async afterRender() {
      const restaurants = await GetRestaurantSource.restaurantsList();
      const restaurantContainer = document.getElementById('restaurant-data');
      restaurants.forEach((getRestoData) => {
        restaurantContainer.innerHTML += createRestaurantsItemCard(getRestoData);
      });
    },
};

export default HomePage;
