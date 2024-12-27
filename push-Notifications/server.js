// const webPush = require('web-push');

// Replace with your own VAPID keys
// const vapidKeys = webPush.generateVAPIDKeys();
// console.log(vapidKeys);
// webPush.setVapidDetails(
//   'mailto:example@yourdomain.org',
//   vapidKeys.publicKey,
//   vapidKeys.privateKey
// );

// Example subscription object (should be obtained from the client)
// const subscription = {
//   endpoint: 'USER_SUBSCRIPTION_ENDPOINT',
//   keys: {
//     auth: 'USER_AUTH_KEY',
//     p256dh: 'USER_P256DH_KEY',
//   },
// };

// Send a push notification
// const payload = JSON.stringify({
//   title: 'Hello!',
//   body: 'This is a push notification from Angular!',
// });

// webPush.sendNotification(subscription, payload)
//   .then(response => console.log('Notification sent successfully:', response))
//   .catch(error => console.error('Error sending notification:', error));