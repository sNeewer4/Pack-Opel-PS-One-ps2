var Discord = require('discord.js');
var bot = new Discord.Client();
var fs = require('fs');
var request = require("request");
var EventEmitter = require('events');
var moment = require('moment');
var rememberMsgSent = false;
var rememberMsg = null;

var servers = {};
var sign = '!';

bot.login('process.env.TOKEN');
// let stop = false; // for use with while and setTimeout

bot.on('ready', function () {
        bot.user.setAvatar('./images/konzu.jpg')
        bot.user.setActivity('cetus | !konzu');
})

bot.on('message', function (message) {
        try {
        if(message.content.startsWith(sign)){
                switch(message.content.substr(1)){
                        
                        case 'konzu':
                                message.delete()
                                var help_embed = new Discord.RichEmbed()
                                .setTitle("**__LA LISTE DES COMMANDES__**")
                                .setURL("http://warframe.wikia.com/wiki/WARFRAME_Wiki")
                                .setImage("https://media.discordapp.net/attachments/436527279057797133/440969425328537600/Konzu.png")
                                .addField("**!guide eidolons**","Ici est mise à votre disposition une commande concernant les eidolons et leur fonctionnement")
                                .addField("**!warframe**","Cette commande permet d'avoir des informations concernant la team de warframe recommandés pour les eidolon")
                                .addField("**!opérateur**","Effectuez cette commande pour obtenir toutes les informations concernant l'opérateur")
                                .addField("**!les amplificateurs**","si vous utilisez cette commande vous aurez tout les information concernant les amplificateur")
                                .setColor("#F6C82E")
                                .setDescription("**Ici vous retrouvez la liste des commandes concernant Cetus et son organisation**")
                                .setThumbnail("https://vignette.wikia.nocookie.net/warframe/images/8/80/OstronSigil.png/revision/latest/scale-to-width-down/350?cb=20171027182421&path-prefix=de")
                                .setFooter(`Actualisé à ${new Date().toLocaleTimeString()}`,"https://vignette.wikia.nocookie.net/warframe/images/4/4b/Vgwfr_glyph.png/revision/latest/scale-to-width-down/480?cb=20171222133402")
                                .setAuthor("sNeewer4","https://cdn.discordapp.com/attachments/417786622919049237/440998564781359105/1490447517-chibinidus-sneewer4-energie.jpg")
                                message.author.send(help_embed);
                        break;

                        case 'guide eidolons':
                                message.delete()
                                var help_embed = new Discord.RichEmbed()
                                .setTitle("**__Guide Eidolons__**")
                                .setURL("https://forums.warframe.com/topic/946875-tuto-sur-les-eidolons-update-220418/")
                                .setImage("https://news.xbox.com/en-us/wp-content/uploads/Shrine-of-the-Eidolon-Keyart-hero.jpg")
                                .addField("Les Eidolons","Ici est mis à votre disposition un tutoriel complet détaillant les divers aspects du farm d’eidolons\nhttps://forums.warframe.com/topic/946875-tuto-sur-les-eidolons-update-220418/")
                                .setColor("#E1E6FA")
                                .setThumbnail("https://i.imgur.com/8kupvzZ.png")
                                .setFooter(`Actualisé à ${new Date().toLocaleTimeString()}`,"https://vignette.wikia.nocookie.net/warframe/images/4/4b/Vgwfr_glyph.png/revision/latest/scale-to-width-down/480?cb=20171222133402")
                                .setAuthor("sNeewer4","https://cdn.discordapp.com/attachments/417786622919049237/440998564781359105/1490447517-chibinidus-sneewer4-energie.jpg")
                                message.author.send(help_embed);  
                        break;

                        case 'warframe':
                                message.delete()
                                var help_embed = new Discord.RichEmbed()
                                .setTitle("**__la liste des warframe__**")
                                .setURL("http://warframe.wikia.com/wiki/Warframes")
                                .setImage("https://i.imgur.com/T4FA77f.jpg")
                                .addField("**Chroma**","spécialisé dans les dégâts pur, Chroma s’occupe de faire le DPS, de préférence équipé d’un sniper. il est là pour détruire les articulations de l’eidolon. conseille : utiliser une couleur clair et pâle pour obtenir l'élément de glace étant l'énergie la plus optimal pour les eidolons build conseillé : https://imgur.com/6701E47")
                                .addField("**Volt**","Utilisé en support pour son shield il est là pour booster les dégâts aussi bien des warframes que des opérateurs ! build conseillé : https://imgur.com/6Z5FDLn")
                                .addField("**Harrow**","Ici pour vous éviter de dépenser trop de plaques d'énergies (on sait qu'il y a pas que des fans de farms de pack polymères) et pour booster les critiques. Il est conseillé de bien savoir à quel moment placé son ulti car sinon, préparez vous à un bon vieux proc magnétique. build conseillé : https://imgur.com/tMF9K8m")
                                .addField("**Trinity**","évidemment, un indispensable ! Si vous voulez survivre aux attaques dévastatrices des eidolons et permettre au drones de survivre, une trinity bless est plus qu’appréciable  (optionnellement, c’est elle qui s’occupe des drones). build conseillé : https://imgur.com/S5ayAvH")
                                .setColor("#BF1919")
                                .setDescription("**Voici les 4 warframes recommandées pour les eidolons ce trouvant ci-joint : http://warframe.wikia.com**\n\nIls s’agit de recommandations , pas d’obligations , rien ne vous empêche de faire vos propres compos !")
                                .setThumbnail("https://i.imgur.com/8kupvzZ.png")
                                .setFooter(`Actualisé à ${new Date().toLocaleTimeString()}`,"https://vignette.wikia.nocookie.net/warframe/images/4/4b/Vgwfr_glyph.png/revision/latest/scale-to-width-down/480?cb=20171222133402")
                                .setAuthor("sNeewer4","https://cdn.discordapp.com/attachments/417786622919049237/440998564781359105/1490447517-chibinidus-sneewer4-energie.jpg")
                                message.author.send(help_embed); 
                        break;

                        case 'opérateur':
                                message.delete()
                                var help_embed = new Discord.RichEmbed()
                                .setTitle("**__Opérateur__**")
                                .setURL("http://warframe.wikia.com/wiki/Operator")
                                .setImage("https://vignette.wikia.nocookie.net/warframe/images/b/b6/OperatorSomaticLink.png/revision/latest?cb=20151206165229")
                                .addField("**__Focus__**","Le Focus se réfère à des capacités spéciales débloquables à la fin de la quête du second rêve, ici, vous trouverez toutes les informations concernant les écoles pour les Eidolon. Si vous souhaitez avoir plus d'information je vous invite à cliquer sur le lien ci-dessous : http://warframe.wikia.com/wiki/Operator")
                                .addField("**__Les écoles__**","Je vous recommande deux écoles pour les Eidolon : Pour la première écoles, je vous recommande le **Madurai**, toute les informations concernant la configuration des attributs sont trouvables sur ce lien : https://imgur.com/gSbvUmN\n\nPour la deuxième école je vous recommande **Unairu**, informations complementaires ici : https://imgur.com/7dbLaym\n\nCes deux écoles que je vous ai recommandé sont actuellement les plus intéressantes pour les Eidolon, mais il existe au total 5 écoles différentes, si vous souhaitez avoir plus d'information, je vous recommande d'aller consulter ce lien : http://warframe.wikia.com/wiki/Operator")
                                .setColor("#0489F7")
                                .setDescription("**Ici vous trouverez toutes les informations concernant les capacités de l'opérateur**")
                                .setThumbnail("https://vignette.wikia.nocookie.net/warframe/images/a/ad/FocusLensFocus_b.png/revision/latest?cb=20151206123922")
                                .setFooter(`Actualisé à ${new Date().toLocaleTimeString()}`,"https://vignette.wikia.nocookie.net/warframe/images/4/4b/Vgwfr_glyph.png/revision/latest/scale-to-width-down/480?cb=20171222133402")
                                .setAuthor("sNeewer4","https://cdn.discordapp.com/attachments/417786622919049237/440998564781359105/1490447517-chibinidus-sneewer4-energie.jpg")
                                message.author.send(help_embed);
                        break;

                        case 'les amplificateurs':
                                message.delete()
                                var help_embed = new Discord.RichEmbed()
                                .setTitle("**__Les amplificateurs__**")
                                .setURL("http://warframe.wikia.com/wiki/Amp")
                                .setImage("https://vignette.wikia.nocookie.net/warframe/images/c/c2/OperatorAmpFire.png/revision/latest?cb=20171024094001")
                                .addField("**les armes modulables**","Ces dernieres sont des armes créées chez Onkko pour les opérateurs\n\nCes dites armes sont obligatoires pour combattre les Eidolons (Elles permettent d'enlever leurs boucliers). Voici un tableau comparatif des différents choix possible pour l’amplificateurs : https://i.imgur.com/I5uoHbW.png")
                                .setColor("#A67E2E")
                                .setDescription("**Ici vous trouverez toutes les informations concernant les capacités sur les amplificateurs**")
                                .setThumbnail("https://vignette.wikia.nocookie.net/warframe/images/a/ad/FocusLensFocus_b.png/revision/latest?cb=20151206123922")
                                .setFooter(`Actualisé à ${new Date().toLocaleTimeString()}`,"https://vignette.wikia.nocookie.net/warframe/images/4/4b/Vgwfr_glyph.png/revision/latest/scale-to-width-down/480?cb=20171222133402")
                                .setAuthor("sNeewer4","https://cdn.discordapp.com/attachments/417786622919049237/440998564781359105/1490447517-chibinidus-sneewer4-energie.jpg")
                                message.author.send(help_embed);
                        break;

                        case 'update':
                                message.delete()
                                var help_embed = new Discord.RichEmbed()
                                .setTitle("**__Update De Konzu__**")
                                .setURL("https://twitter.com/sNeewer4")
                                .addField("**Mise à Jour 0.40 [ BETA ]**","Nous sommes toujours en Beta v 0.40, nous avons encore beaucoups a faire !.")
                                .addField("**Nouvelles commandes !**","une liste de commandes a etait été ajoutés : vous pouvez utiliser [!Konzu] dans le canal #bot-spam vous obtiendrez ainsi les commandes concernant les eidolons.")
                                .addField("**Ne ratez plus les eidolons !**","vous pouvez vous ajouter un rôle en rentrer la commande [!Surah] en ajoutant ce rôle vous serez informé l'arrivée des eidolons.")
                                .addField("**Corrections de bugs**","nous avons corrigé quelques erreurs au niveau du timer des eidolons ainsi que les messages qui ne s'affiche pas.\n\npour finir nous avons optimisé le code de konzu du coup il devrait être plus rapide !")
                                .setColor("#048A81")
                                .setDescription("**ici que vous trouverez toutes les informations concernant les mises à jour de konzu.**")
                                .setFooter(`Actualisé à ${new Date().toLocaleTimeString()}`,"https://vignette.wikia.nocookie.net/warframe/images/4/4b/Vgwfr_glyph.png/revision/latest/scale-to-width-down/480?cb=20171222133402")
                                .setImage("https://cdn.discordapp.com/attachments/447176665752403968/449224729769934848/mis2.jpg")
                                .setThumbnail("https://media.discordapp.net/attachments/436527279057797133/440969425328537600/Konzu.png")
                                .setURL("https://twitter.com/sNeewer4")
                                .setAuthor("sNeewer4","https://cdn.discordapp.com/attachments/417786622919049237/440998564781359105/1490447517-chibinidus-sneewer4-energie.jpg")
                                message.channel.send(help_embed); 
                        break;

                        case 'Surah':
                                //var bot_message; 
                                message.delete();
                                var role = message.guild.roles.find("name", "Surah");
                                if(message.member.roles.find("name", "Surah") !== null){
                                        message.member.removeRole(role)
                                } else {
                                        message.member.addRole(role)
                                }
                        break;

                        case 'teralyst': 
                                //var bot_message;
                                message.delete();
                        
                                update(message, message.channel);
                                setInterval(function() {
                                        try {
                                                update(message, message.channel);
                                        } catch(_exception) {
                                                console.log(_exception);
                                        }
                                }, 15000);
                                
                                var server = servers[message.guild.id];
                                if(!servers[message.guild.id]) servers[message.guild.id] = {
                                        anti_spam: 0,
                                        bot_message: []
                                }
                        break;

                        default: // do something when message not understood
                        break;
                }

        }
        } catch (exception) {
                console.log(exception);
        }
});

function update(discord_message, channel) {
        var data; //=> JSON
        var date_expiry; //=> string
        var is_day; //=> boolean
        var expire_in; //=>Moment
        var added_time;

        request("https://api.warframestat.us/pc/cetusCycle", function(error, response, file) {
                data = JSON.parse(file);
                data_expiry = moment(data.expiry).locale('fr');
                is_day = data.isDay
                expire_in = moment(data_expiry).valueOf() - moment().valueOf(); //=>moment
                added_time = moment(expire_in.valueOf()).add(-1,'hour').valueOf();
                added_time = moment(added_time);
                var message = {};

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
                        if(moment(expire_in).valueOf() < 1200000 && !rememberMsgSent){ // moins de 20 mins
                                var embed = new Discord.RichEmbed()
                                .setTitle("[**__les dernières minutes __**]")
                                .setURL("https://hub.warframestat.us")
                                .setColor("#F4661B")
                                .setDescription('**hey <@&439152204969148446> Les Eidolon arrivent dans quelques minutes! Préparez-vous!**')
                                discord_message.channel.send(embed).then((message) => rememberMsg = message);
                                rememberMsgSent = true;

                        }
                }
                writeMessage(message, discord_message);
        });
}

function writeMessage(_message, discord_message){
        var server = servers[discord_message.guild.id];
        var embed = new Discord.RichEmbed()
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
