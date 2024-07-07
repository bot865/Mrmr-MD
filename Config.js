const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "201028085788"],
global.ownername = process.env.OWNER_NAME || "💙𝐸𝐿𝐴𝐾𝑅𝐴𝐵 𝐸𝐿𝑌𝛩𝑇𝑈𝐵𝐸𝑅_✰",
global.ytname = "YT: AyushBotz.inc"
global.socialm = "GitHub: ELAKRAB ELYOTUBER "
global.location = "Indian"

global.botname = process.env.BOTNAME || "Marmar-MD",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "𝐸𝐿𝐴𝐾𝑅𝐴𝐵 𝐸𝐿𝑌𝛩𝑇𝑈𝐵𝐸𝑅",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "𝐸𝐿𝐴𝐾𝑅𝐴𝐵 𝐸𝐿𝑌𝛩𝑇𝑈𝐵𝐸𝑅",
//console view/theme
global.themeemoji = '🧩'
global.wm = "ELAKRAB ELYOTUBER "

//theme link
global.link = 'https://whatsapp.com/channel/0029VahbMZl4tRrkdpJrCv2f'

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '🐍 *تفضلي يا عزيزتي!*',
 prem: '🐍 *عزيزتي، هذه الميزة مخصصة للمستخدمين المميزين فقط*',
 admin: '🐍 *عزيزتي، هذه الميزة مخصصة للمشرفين فقط*',
 botAdmin: '🐍 *عزيزي، لا يمكن استخدام هذه الميزة إلا عندما يكون الروبوت مسؤولاً عن المجموعة*',
 groupadmin: '🐍 *عزيزتي، هذه الميزة مخصصة للمالك فقط*',
 owner: '🐍 *عزيزتي، هذه الميزة مخصصة للمجموعات حصريًا*',
 group: '🐍 *حبيبتي، هذه الميزة مخصصة للمحادثات الخاصة فقط*',
 :'🐍 *عزيزي، قيد المعالجة...*',
 Error: '🐍 *يا حبيبي، يبدو أن هناك خطأ!*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
