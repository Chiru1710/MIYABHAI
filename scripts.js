const subscribeButton = document.getElementById('subscribe-button');
const discordButton = document.getElementById('discord-button');
const unlockedMessage = document.getElementById('unlocked-message');

const CLIENT_ID = '425649969130-hkl5ckm9csj2fad0obonddosjsj665r5.apps.googleusercontent.com'; // Replace with your OAuth client ID
const API_KEY = 'AIzaSyAxqk1qwKm1qKzl7CcToH3tBBqyAcxFG20'; // Replace with your API key
const CHANNEL_ID = 'UCVQosXld2q3fZ2jxglyAwYQ'; // Replace with your channel ID
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn()
        .then(() => console.log('Sign-in successful'))
        .catch((err) => console.error('Error signing in', err));
}

function loadClient() {
    gapi.client.setApiKey(API_KEY);
    return gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
        .then(() => console.log('GAPI client loaded for API'))
        .catch((err) => console.error('Error loading GAPI client for API', err));
}

function checkSubscription() {
    gapi.client.youtube.subscriptions
        .list({
            part: 'snippet',
            mine: true,
            maxResults: 50,
        })
        .then((response) => {
            const subscriptions = response.result.items || [];
            const isSubscribed = subscriptions.some((item) =>
                item.snippet.resourceId.channelId === CHANNEL_ID
            );

            if (isSubscribed) {
                alert('Subscription verified! Proceeding...');
                subscribeButton.classList.add('hidden');
                discordButton.classList.remove('hidden');
            } else {
                alert('You are not subscribed. Please subscribe and try again.');
            }
        })
        .catch((err) => {
            console.error('Error checking subscriptions:', err);
            alert('There was an error verifying your subscription. Please try again later.');
        });
}

subscribeButton.addEventListener('click', () => {
    authenticate()
        .then(loadClient)
        .then(checkSubscription);
});

discordButton.addEventListener('click', () => {
    window.open('https://discord.gg/TqjZsQ73', '_blank');
    discordButton.classList.add('hidden');
    unlockedMessage.classList.remove('hidden');
});
