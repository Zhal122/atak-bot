const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['6287721317870','6287721317870','62877213178707']
global.premium = ['6287721317870','62877213178707']
global.rkyt = []
global.banUser = []
global.ntilink = []
global.wlcm = []
global.packname = ''
global.author = 'Wa : 0877-2131-7870\nYT : AtakBot\nIG : atakbot\nGH : Atak676\nTT : atak_gaming047'
global.sessionName = 'atakbot'
global.namabotnya = 'AtakBot'
global.namaownernya = 'Ridho'
global.fake = namabotnya
global.autoread = true
global.replyType = "web"
global.dapkey = 'Kirbotz123'
global.lolkey = 'Atakbotz'
global.zenzkey = 'sanzychan01'
global.wame = 'https://wa.me/6287721317870'
global.gcatakbotz = 'https://chat.whatsapp.com/Hq6tAL2w3dqGgOrsL43VTV'
global.ownerNumber = ["6287721317870@s.whatsapp.net","62877213178707@s.whatsapp.net"]
global.email = 'atakbotzmd@gmail.com'
global.yt = 'https://youtube.com/channel/UCT76Agxm4N_MbefBoywjDRA'
global.webatak = 'blm buat ngab'
global.githubatak = 'https://github.com/Atak676'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.antitags = true
global.autobio = true
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!!!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!!!',
    owner: 'Fitur Khusus Owner Bot!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    error: 'Error Kak Silahkan Chat Owner',
    wait: '*TUNGGU SEBENTAR*⏳', 
    noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    premium: 'Maaf Kamu Bukan User Premium Mau Beli Premiun Klik Button Di Bawah Ini',
    wrongFormat: 'Format salah, coba liat lagi di menu',
}


global.limitawal = {
    premium: "Infinity",
    free: 5
}


global.thumb = fs.readFileSync('./Image/atakbot.jpg')
global.thumbdm = fs.readFileSync('./Image/diamond.jpg')
global.thumbrpg = fs.readFileSync('./Image/atakbotrpg.jpg')
global.imgjoinrpg = fs.readFileSync('./Image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./Image/mining.jpg')
global.sticknya = fs.readFileSync('./Atak/JANGANDIUBAH/fuck.webp')
global.sticknya = fs.readFileSync('./Atak/JANGANDIUBAH/wait.webp') 

global.imgdevil = fs.readFileSync('./Image/img/devil.jpg')
global.imgslime = fs.readFileSync('./Image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./Image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./Image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./Image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./Image/img/behemoth.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
