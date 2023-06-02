import API_DATA from '../global/data-api';

class GetRestaurantSource {
  static async detailRestaurants(id) {
    const response = await fetch(API_DATA.DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.restaurant;
  }

  static async restaurantsList() {
    const response = await fetch(API_DATA.HOMEPAGE);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.restaurants;
  }
}

export default GetRestaurantSource;
