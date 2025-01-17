const fetch = require("node-fetch");
const { AnimeSubreddits, AnimeNames, AnimePosts } = require("../../data.json");
const { Client, GatewayIntentBits, EmbedBuilder, ActivityType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ButtonComponent } = require('discord.js');

module.exports = {
  name: "cute",
  description: "Cute wholesome anime posts",
  run: async (client, message) => {
    const randomCutePost = AnimePosts[Math.floor(Math.random() * AnimePosts.length)];
    fetch(`https://api.waifu.pics/sfw/${randomCutePost}`)
        .then(res => res.json())
        .then(data => {
            const embed = new EmbedBuilder().setImage(data.url).setColor(2829617);
            message.channel.send({ embeds: [embed] });
        })
  },
};
