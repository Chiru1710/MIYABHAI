const subscribeButton = document.getElementById('subscribe-button');
const discordButton = document.getElementById('discord-button');
const unlockedMessage = document.getElementById('unlocked-message');

subscribeButton.addEventListener('click', () => {
    window.open('https://youtube.com/@miyabhaiff646?si=e0blBjaHkcRY-kNz', '_blank');
    subscribeButton.classList.add('hidden');
    discordButton.classList.remove('hidden');
});

discordButton.addEventListener('click', () => {
    window.open('https://discord.gg/TqjZsQ73', '_blank');
    discordButton.classList.add('hidden');
    unlockedMessage.classList.remove('hidden');
});
