require('./settings')
const { default: atakbotConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require('@adiwajshing/baileys')
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const figlet = require('figlet')
const FileType = require('file-type')
const path = require('path')
const CFonts = require('cfonts');
const PhoneNumber = require('awesome-phonenumber')
const { color, bgcolor } = require('./Lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./Lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./Lib/myfunc')

baterai = 'unknown'
charging = 'unknown'
blocked = []
global.blocked

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.db = JSON.parse(fs.readFileSync(`Database/database.json`))
global.db.data = {
    users: {},
    chats: {},
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    ...(global.db.data || {})
}
  
async function startatakbot() {
    console.clear()
console.log(color('=> atakbot.js Di Pantau Oleh Ridho'))
console.log(color('=> atakbot.js Di Pantau Oleh Ridho'))
console.log(color('=> atakbot.js Di Pantau Oleh Ridho'))
CFonts.say(`${author} Online`, {
            font: 'tiny',
            align: 'left',
            gradient: ['red', 'magenta']
        })
console.log(color('=> Source code version:', 'yellow'), color('Ridho v2.0', 'cyan'))
console.log(color('=> Bug? Error? Suggestion? Visit here:', 'yellow'), color('6287721317870'))
console.log(color(`${sessionName}.json`), color(`BOT is now online!`, 'red'))
console.log(color('[DEV]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'magenta'))
console.log(color('R', 'green'), color('i', 'red'), color('d', 'yellow'), color('h', 'purple'), color('o', 'blue'), color('BOT', 'cyan'))
                     console.log(color('SUPPORT by htttps://youtube.com/AtakBot', 'cyan'))
    let { version, isLatest } = await fetchLatestBaileysVersion()
    const atakbot = atakbotConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['AtakBot - MD','Safari','1.0.0'],
        auth: state,
        version
    })
    
store.bind(atakbot.ev)

atakbot.ws.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

atakbot.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await atakbot.sendContact(callerId, global.owner)
    atakbot.sendMessage(callerId, { text: `Sistem Otomatis Block!!!\nJangan Menelpon Bot!!!\nSilahkan Hubungi Owner Untuk Dibuka!!!`}, { quoted : pa7rick })
    await sleep(8000)
    await atakbot.updateBlockStatus(callerId, "block")
    }
    })
    
atakbot.ev.on('messages.upsert', async chatUpdate => {
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!atakbot.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(atakbot, mek, store)
        require("./atakbot")(atakbot, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
atakbot.ev.on('group-participants.update', async (anu) => {
console.log(anu)
        try {
            let metadata = await atakbot.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                try {
                    ppuser = await atakbot.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                try {
                    ppgroup = await atakbot.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

cangton = `Welcome ${num.split("@")[0]}, 😄

*_JANGAN LUPA INTRO_*
️Nama :
Umur :
Hobby :
Gender :
Asal Kota :

Descripsi Grup: ${metadata.desc}

Semoga Betah Kak ><`
cangtion = `${num.split("@")[0]}, Yah Beban Nya Keluar 😓` 
let nama = await atakbot.getName(num)
memb = metadata.participants.length
let btn = [{
urlButton: {
displayText: '🧸ＹＯＵＴＵＢＥ',
url: 'https://youtube.com/channel/UCT76Agxm4N_MbefBoywjDRA'
}
}, 
{
urlButton: {
displayText: '☠️ＯＷＮＥＲ',
url: 'https://wa.me/6287721317870'
}
},
{
quickReplyButton: {
displayText: 'ＷＥＬＣＯＭＥ',
id: 'welcome'
}
}]
let bton = [{
urlButton: {
displayText: '🧸ＹＯＵＴＵＢＥ',
url: 'https://youtube.com/channel/UCT76Agxm4N_MbefBoywjDRA'
}
}, 
{
urlButton: {
displayText: '☠️ＯＷＮＥＲ',
url: 'https://wa.me/6287721317870'
}
},
{
quickReplyButton: {
displayText: 'ＢＹＥ ＢＥＢＡＮ',
id: 'bye'
}
}]                  
Welcome = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=${lolkey}&img1=${ppuser}&img2=${ppgroup}&background=https://telegra.ph/file/38dfc6649ab96b7dc7d41.jpg&username=${nama}&member=${encodeURIComponent(memb)}&groupname=${encodeURIComponent(metadata.subject)}`)
Left = await getBuffer(`https://api.lolhuman.xyz/api/base/leave?apikey=${lolkey}&img1=${ppuser}&img2=${ppgroup}&background=https://telegra.ph/file/38dfc6649ab96b7dc7d41.jpg&username=${nama}&member=${encodeURIComponent(memb)}&groupname=${encodeURIComponent(metadata.subject)}`)
                if (anu.action == 'add') {
                    atakbot.send5ButImg(anu.id, cangton, `Name Grup ${metadata.subject} `, Welcome, btn)
                } else if (anu.action == 'remove') {
                   atakbot.send5ButImg(anu.id, cangtion, `Leaving To  ${metadata.subject} `, Left, bton)
                }
            }
        } catch (err) {
            console.log(err)
        }
    })

atakbot.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
atakbot.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = atakbot.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })
    
atakbot.getName = (jid, withoutContact  = false) => {
        id = atakbot.decodeJid(jid)
        withoutContact = atakbot.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = atakbot.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === atakbot.decodeJid(atakbot.user.id) ?
            atakbot.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
atakbot.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

atakbot.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await atakbot.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await atakbot.getName(i + '@s.whatsapp.net')}\nFN:${await atakbot.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:${email}\nitem2.X-ABLabel:Email\nitem3.URL:${yt}\nitem3.X-ABLabel:YouTube\nitem4.ADR:;;${region};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	atakbot.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
atakbot.setStatus = (status) => {
        atakbot.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
    
atakbot.public = true

atakbot.serializeM = (m) => smsg(atakbot, m, store)

atakbot.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); atakbot.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startatakbot(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startatakbot(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); atakbot.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); atakbot.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startatakbot(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startatakbot(); }
            else atakbot.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log('Connected...', update)
    })
    
atakbot.ev.on('creds.update', saveState)

atakbot.ev.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
atakbot.ev.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

atakbot.send5ButGif = async (jid , text = '' , footer = '', but = [], options = {}) =>{
    let message = await prepareWAMessageMedia({ video: fs.readFileSync('./Image/atakbot.mp4'), gifPlayback: true }, { upload: atakbot.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            atakbot.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    
atakbot.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: atakbot.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            atakbot.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    
atakbot.send5Vid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: atakbot.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            atakbot.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    
atakbot.send5Loc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
               "hydratedContentText": text,
               "locationMessage": {
               "jpegThumbnail": img },
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            atakbot.relayMessage(jid, template.message, { messageId: template.key.id })
    }

atakbot.sendList = async (jid , title = '', text = '', buttext = '', footer = '', but = [], options = {}) =>{
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        listMessage :{
               title: title,
               description: text,
               buttonText: buttext,
               footerText: footer,
               listType: "  SELECT  ",
               sections: but,
               listType: 1
            }
            }), options)
            atakbot.relayMessage(jid, template.message, { messageId: template.key.id })
    }

atakbot.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        atakbot.sendMessage(jid, buttonMessage, { quoted, ...options })
    }

atakbot.sendText = (jid, text, quoted = '', options) => atakbot.sendMessage(jid, { text: text, ...options }, { quoted })

atakbot.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await atakbot.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

atakbot.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await atakbot.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

atakbot.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await atakbot.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

atakbot.sendTextWithMentions = async (jid, text, quoted, options = {}) => atakbot.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

atakbot.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await atakbot.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

atakbot.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await atakbot.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
   
atakbot.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

atakbot.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
	return buffer
     }
     
atakbot.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await atakbot.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await atakbot.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }
       
       
atakbot.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}
        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await atakbot.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }
    
atakbot.cMod = (jid, copy, text = '', sender = atakbot.user.id, options = {}) => {
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === atakbot.user.id
        return proto.WebMessageInfo.fromObject(copy)
    }
    
atakbot.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }
    }

    return atakbot
}

startatakbot()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})