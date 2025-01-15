const subscribeButton = document.getElementById('subscribe-button');
const discordButton = document.getElementById('discord-button');
const unlockedMessage = document.getElementById('unlocked-message');

const API_KEY = 'AIzaSyAxqk1qwKm1qKzl7CcToH3tBBqyAcxFG20'; // Replace with your API key
const CHANNEL_ID = 'UCVQosXld2q3fZ2jxglyAwYQ'; // Replace with your channel's ID

subscribeButton.addEventListener('click', () => {
    window.open('https://youtube.com/@miyabhaiff646?si=e0blBjaHkcRY-kNz', '_blank');

    // Prompt user for YouTube username
    const username = prompt('Enter your YouTube username:');
    if (username) {
        checkSubscription(username);
    }
});

function checkSubscription(username) {
    fetch(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&forChannelId=${CHANNEL_ID}&key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            const subscriptions = data.items || [];
            const isSubscribed = subscriptions.some((item) =>
                item.snippet.title.toLowerCase().includes(username.toLowerCase())
            );

            if (isSubscribed) {
                alert('Subscription verified! Proceeding...');
                subscribeButton.classList.add('hidden');
                discordButton.classList.remove('hidden');
            } else {
                alert('Subscription not found. Please ensure your subscriptions are public and try again.');
            }
        })
        .catch((error) => {
            console.error('Error checking subscription:', error);
            alert('There was an error verifying your subscription. Please try again later.');
        });
}

discordButton.addEventListener('click', () => {
    window.open('https://discord.gg/TqjZsQ73', '_blank');
    discordButton.classList.add('hidden');
    unlockedMessage.classList.remove('hidden');
});
