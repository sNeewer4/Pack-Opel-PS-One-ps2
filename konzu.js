const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const request = require("request");
const EventEmitter = require('events');
const moment = require('moment');
let rememberMsgSent = false;
let rememberMsg = null;

let servers = {};
const sign = '!';

bot.login('process.env.TOKEN');
// let stop = false; // for use with while and setTimeout

bot.on('ready', function () {
        bot.user.setAvatar('./images/konzu.jpg')
        bot.user.setActivity('cetus');
})

bot.on('message', function (message) {

        if(message.content.startsWith(sign)){
                switch(message.content.substr(1)){
                        
                        case 'Konzu':
                        message.delete()
                                var help_embed = new Discord.RichEmbed()
                                .setTitle("**__LA LISTE DES COMMANDES__**")
                                .setURL("http://warframe.wikia.com/wiki/WARFRAME_Wiki")
                                .setImage("https://media.discordapp.net/attachments/436527279057797133/440969425328537600/Konzu.png")
                                .addField("**!Eidolon Leurre**","cette commande permet d'avoir des recommandations concernant les Leurre")
                                .addField("**!Opérateur**", "cette commande permet d'avoir des recommandations concernant l'opérateur")
                                .addField("**!Warframe**", "cette commande permet d'avoir des recommandations concernant les warframe" )
                                .setColor("#CDB966")
                                .setDescription("c'est ici que vous trouverez toutes les informations concernant la liste des commandes")
                                .setFooter(`Actualisé à ${new Date().toLocaleTimeString()}`,"https://vignette.wikia.nocookie.net/warframe/images/4/4b/Vgwfr_glyph.png/revision/latest/scale-to-width-down/480?cb=20171222133402")
                                .setAuthor("sNeewer4","https://cdn.discordapp.com/attachments/417786622919049237/440998564781359105/1490447517-chibinidus-sneewer4-energie.jpg")
                                message.author.send(help_embed);
                        break;

                        case 'Opérateur':
                        message.delete()
                                var help_embed = new Discord.RichEmbed()
                                .setTitle("**__Opérateur__**")
                                .setURL("http://warframe.wikia.com/wiki/Operator")
                                .setImage("https://vignette.wikia.nocookie.net/warframe/images/b/b6/OperatorSomaticLink.png/revision/latest?cb=20151206165229")
                                .addField("**__Focus__**","Le Focus se réfère à des capacités spéciales débloquables à la fin de la quête du second rêve, ici, vous trouverez toutes les informations concernant les écoles pour les Eidolon. Si vous souhaitez avoir plus d'information je vous invite à cliquer sur le lien ci-dessous : http://warframe.wikia.com/wiki/Operator\n\n")
                                .addField("**__Les écoles__**","Je vous recommande deux écoles pour les Eidolon : Pour la première écoles, je vous recommande le **Madurai**, toute les informations concernant la configuration des attributs sont trouvables sur ce lien : https://imgur.com/gSbvUmN\n\nPour la deuxième école je vous recommande **Unairu**, informations complementaires ici : https://imgur.com/7dbLaym\n\nCes deux écoles que je vous ai recommandé sont actuellement les plus intéressantes pour les Eidolon, mais il existe au total 5 écoles différentes, si vous souhaitez avoir plus d'information, je vous recommande d'aller consulter ce lien : http://warframe.wikia.com/wiki/Operator")
                                .setColor("#0489F7")
                                .setDescription("Ici vous trouverez toutes les informations concernant les capacités de l'opérateur\n\n")
                                .setThumbnail("https://vignette.wikia.nocookie.net/warframe/images/a/ad/FocusLensFocus_b.png/revision/latest?cb=20151206123922")
                                .setFooter(`Actualisé à ${new Date().toLocaleTimeString()}`,"https://vignette.wikia.nocookie.net/warframe/images/4/4b/Vgwfr_glyph.png/revision/latest/scale-to-width-down/480?cb=20171222133402")
                                .setAuthor("sNeewer4","https://cdn.discordapp.com/attachments/417786622919049237/440998564781359105/1490447517-chibinidus-sneewer4-energie.jpg")
                                message.author.send(help_embed);
                        break;

                        case 'Eidolon Leurre':
                        message.delete()
                                var help_embed = new Discord.RichEmbed()
                                .setTitle("**__voici toutes les explications__**")
                                .setURL("http://warframe.wikia.com/wiki/Eidolon_Lure")
                                .setImage("https://vignette.wikia.nocookie.net/warframe/images/5/55/VomvalystLureDrone.png/revision/latest?cb=20180213133625")
                                .addField("**Eidolon Leurre**","http://warframe.wikia.com/wiki/Eidolon_Lure")
                                .setColor("#F6C82E")
                                .setDescription("c'est ici que vous trouverez toutes les informations")
                                .setFooter(`Actualisé à ${new Date().toLocaleTimeString()}`,"https://vignette.wikia.nocookie.net/warframe/images/4/4b/Vgwfr_glyph.png/revision/latest/scale-to-width-down/480?cb=20171222133402")
                                .setAuthor("sNeewer4","https://cdn.discordapp.com/attachments/417786622919049237/440998564781359105/1490447517-chibinidus-sneewer4-energie.jpg")
                                message.author.send(help_embed);  
                        break;

                        case 'Warframe':
                        message.delete()
                                var help_embed = new Discord.RichEmbed()
                                .setTitle("**__la liste des warframe__**")
                                .setURL("http://warframe.wikia.com/wiki/Warframes")
                                .setImage("https://vignette.wikia.nocookie.net/warframe/images/0/04/CBwarframe.png/revision/latest?cb=20130606151427")
                                .addField("**Chroma**","\n\nen cliquant sur le lien http://warframe.wikia.com/wiki/Chroma vous aurez toutes les informations nécessaires")
                                .addField("**Volt**","\n\nen cliquant sur le lien http://warframe.wikia.com/wiki/Volt vous aurez toutes les informations nécessaires")
                                .addField("**Trinity**","\n\nen cliquant sur le lien http://warframe.wikia.com/wiki/Trinity vous aurez toutes les informations nécessaires")
                                .addField("**Harrow**","\n\nen cliquant sur le lien http://warframe.wikia.com/wiki/Harrow vous aurez toutes les informations nécessaires")
                                .setColor("#BF1919")
                                .setDescription("c'est ici que vous trouverez toutes les informations")
                                .setFooter(`Actualisé à ${new Date().toLocaleTimeString()}`,"https://vignette.wikia.nocookie.net/warframe/images/4/4b/Vgwfr_glyph.png/revision/latest/scale-to-width-down/480?cb=20171222133402")
                                .setAuthor("sNeewer4","https://cdn.discordapp.com/attachments/417786622919049237/440998564781359105/1490447517-chibinidus-sneewer4-energie.jpg")
                                message.author.send(help_embed); 
                        break;

                        case 'Update':
                        message.delete()
                                var help_embed = new Discord.RichEmbed()
                                .setTitle("**__Update De Konzu__**")
                                .setURL("https://twitter.com/sNeewer4")
                                .addBlankField(true)
                                .addField("**__mise à jour 0.35__** BETA","comme vous pouvez le voir nous sommes à la version 0.35 beta ça signifie qu'il y a encore beaucoup d'évolution à appliquer à konzu")
                                .addBlankField(true)
                                .addField("**__de nouvelles commandes disponible__**","une liste de commandes qui ont été ajoutés pour répondre à la demande des joueurs en rentrant **[!Konzu]**\ndans le canal bot-spam vous aurez toutes les listes de commandes que vous pourrez effectuer")
                                .addBlankField(true)
                                .addField("**__Corrections__**","du timer pour le teralyst également des corrections concernant les affiches")
                                .setColor("#048A81")
                                .setDescription("c'est ici que vous trouverez toutes les informations concernant les mises à jour de konzu")
                                .setFooter(`Actualisé à ${new Date().toLocaleTimeString()}`,"https://vignette.wikia.nocookie.net/warframe/images/4/4b/Vgwfr_glyph.png/revision/latest/scale-to-width-down/480?cb=20171222133402")
                                .setImage("https://cdn.discordapp.com/attachments/434772105876209676/442636223740117022/mis.jpg")
                                .setThumbnail("https://media.discordapp.net/attachments/436527279057797133/440969425328537600/Konzu.png")
                                .setURL("https://twitter.com/sNeewer4")
                                .setAuthor("sNeewer4","https://cdn.discordapp.com/attachments/417786622919049237/440998564781359105/1490447517-chibinidus-sneewer4-energie.jpg")
                                message.channel.send(help_embed); 
                        break;

                        case 'Surah':
                        //let bot_message; 
                        message.delete();
                        let role = message.guild.roles.find("name", "Surah");
                        if(message.member.roles.find("name", "Surah") !== null){
                                message.member.removeRole(role)
                        } else {
                                message.member.addRole(role)
                        }
                        break;
                        case 'Teralyst': 
                                //let bot_message;
                                message.delete();
                                update(message, message.channel);
                                setInterval(function() {
                                        update(message, message.channel);
                                }, 15000);
                                
                                var server = servers[message.guild.id];
                                if(!servers[message.guild.id]) servers[message.guild.id] ={
                                        anti_spam: 0,
                                        bot_message: []
                                }
                        break;

                        default: // do something when message not understood
                        break;
                }

        }

});

function update(discord_message, channel) {
        let data; //=> JSON
        let date_expiry; //=> string
        let is_day; //=> boolean
        let expire_in; //=>Moment
        let added_time;

        request("https://api.warframestat.us/pc/cetusCycle", function(error, response, file) {
                data = JSON.parse(file);
                data_expiry = moment(data.expiry).locale('fr');
                is_day = data.isDay
                expire_in = moment(data_expiry).valueOf() - moment().valueOf(); //=>moment
                added_time = moment(expire_in.valueOf()).add(-1,'hour').valueOf();
                added_time = moment(added_time);
                const message = {};

                if (!is_day){
                        //Nuit
                        message.content = `il fait nuit\n**__Temps restant__**\n${moment(added_time).format('HH:mm:ss')}\n**__Debut du jour__**\n à ${data_expiry.format('HH:mm')}`
                        message.img = "https://vignette.wikia.nocookie.net/warframe/images/4/4c/Conclave_Moon.png/revision/latest?cb=20150327081658&path-prefix=fr"
                        rememberMsgSent = false;
                        if(rememberMsg !== null){
                                rememberMsg.delete();
                        }
                        
                }else{
                        //Jour
                        message.content = `il fait jour\n**__Temps restant__**\n${moment(added_time).format('HH:mm:ss')}\n**__Debut de la nuit__**\n à ${data_expiry.format('HH:mm')}`
                        message.img = "https://vignette.wikia.nocookie.net/warframe/images/c/cc/Conclave_Sun.png/revision/latest?cb=20150322082734"
                        if(moment(expire_in).valueOf() < 6000000 && !rememberMsgSent){ // moins de 20 mins
                                const embed = new Discord.RichEmbed()
                                .setTitle("[**__les dernières minutes __**]")
                                .setURL("https://hub.warframestat.us")
                                .setColor("#F4661B")
                                .setDescription('hey <@&439152204969148446> Les teralystes arrivent dans quelques minutes! Préparez-vous!');
                                discord_message.channel.send(embed).then((message) => rememberMsg = message);
                                rememberMsgSent = true;

                        }
                }
                writeMessage(message, discord_message);
        });
}

function writeMessage(_message, discord_message){
        var server = servers[discord_message.guild.id];
        const embed = new Discord.RichEmbed()
                .setTitle("[**__Cetus : Eidolon__**]")
                .setURL("http://warframe.wikia.com/wiki/Eidolon_Teralyst")
                .setColor('#D1951E')
                .setThumbnail(_message.img)
                .setFooter(`Actualisé à ${new Date().toLocaleTimeString()}`,"https://vignette.wikia.nocookie.net/warframe/images/4/4b/Vgwfr_glyph.png/revision/latest/scale-to-width-down/480?cb=20171222133402")
                .setImage("https://vignette.wikia.nocookie.net/warframe/images/7/73/Teralyst.png/revision/latest?cb=20171016171720")
                .setDescription(_message.content)
        if(server.anti_spam === 0){
                server.anti_spam = 1
                discord_message.channel.send(embed)
                .then(m => {
                        server.bot_message = m;
                });
        } else{
                server.bot_message.edit(embed).then((m => {
                        server.bot_message = m;
                }))
        }
}
