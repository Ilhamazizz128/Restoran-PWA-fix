import CONFIG from './config';

const API_DATA = {
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  HOMEPAGE: `${CONFIG.BASE_URL}/list`,
};

export default API_DATA;
