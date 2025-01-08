const subscribeButton = document.getElementById('subscribe-button');
const discordButton = document.getElementById('discord-button');
const unlockedMessage = document.getElementById('unlocked-message');

subscribeButton.addEventListener('click', () => {
    window.open('https://www.youtube.com/channel/your-channel-id', '_blank');
    subscribeButton.classList.add('hidden');
    discordButton.classList.remove('hidden');
});

discordButton.addEventListener('click', () => {
    window.open('https://discord.gg/your-server-id', '_blank');
    discordButton.classList.add('hidden');
    unlockedMessage.classList.remove('hidden');
});
