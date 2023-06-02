import NotificationHelper from './helper-notifikasi';
import CONFIG from '../global/config';

const WebSocketInitiator = {

    _onMessageHandler(message) {
        const restaurant = JSON.parse(message.data);

        NotificationHelper.sendNotification({
            title: `${restaurant.name} added in website catalog!`,
            options: {
                body: restaurant.description,
                image: `${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}`,
            },
        });
    },

    init(url) {
            const webSocket = new WebSocket(url);
            webSocket.onmessage = this._onMessageHandler;
    },
};

export default WebSocketInitiator;
