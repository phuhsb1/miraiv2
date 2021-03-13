module.exports.config = {
	name: "fu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "",
	commandCategory: "Other",
	usages: "",
	cooldowns: 5,
	info: [
		{
			key: "",
			prompt: "",
			type: '',
			example: ''
		},
		{
			key: "",
			prompt: "",
			type: '',
			example: ''
		}
	]
};


module.exports.run = function({ api, event, args }) {
	const request = require("request");
	const fs = require("fs-extra");
	const path = require("path");
	const __root = path.resolve(__dirname, "cache");
	let content = args.slice(1, args.length);
	switch (args[0]) {
		case "yamate": {
		return api.sendMessage({body: "đảk", attachment: fs.createReadStream(__dirname + "/cache/yamate.mp3")}, event.threadID, event.messageID);
		break;
		}
        case "mark": {
        return api.sendMessage({body: "đại ca em", attachment: fs.createReadStream(__dirname + "/cache/cc.jpg")}, event.threadID, event.messageID);	
	    break;
	    }
	    case "yeugiang": {
        return api.sendMessage({body: "yêu em <3", attachment: fs.createReadStream(__dirname + "/cache/yeugiang.jpeg")}, event.threadID, event.messageID);	
	    break;
	    }
	    case "ngu": {
        return api.sendMessage({body: "Nghe anh tao nói", attachment: fs.createReadStream(__dirname + "/cache/ngu.jpeg")}, event.threadID, event.messageID);	
	    break;
	    }
	    case "anh": {
        return api.sendMessage({body: "ảnh đại ca tui", attachment: fs.createReadStream(__dirname + "/cache/fu.jpg")}, event.threadID, event.messageID);	
	    break;
	    }
	    case "thayba": {
        return api.sendMessage({body: "Chết với thầy 🥴", attachment: fs.createReadStream(__dirname + "/cache/thayba.mp4")}, event.threadID);	
	    break;
	    }
	    case "cak": {
		return api.sendMessage({body: "😏", attachment: fs.createReadStream(__dirname + "/cache/cak.mp4")}, event.threadID, event.messageID);
		break;
		}
		case "dmm": {
		return api.sendMessage({body: "🙂", attachment: fs.createReadStream(__dirname + "/cache/dmm.mp4")}, event.threadID, event.messageID);
		break;
		}
		case "khok": {
		return api.sendMessage({body: "🥺", attachment: fs.createReadStream(__dirname + "/cache/khok.mp4")}, event.threadID, event.messageID);
		break;
		}
		case "rose": {
		return api.sendMessage({body: "thầy bảo này!", attachment: fs.createReadStream(__dirname + "/cache/rose.mp4")}, event.threadID, event.messageID);
		break;
		}
		case "dit": {
		return api.sendMessage({ attachment: fs.createReadStream(__dirname + "/cache/dit.mp4")}, event.threadID);
		break;
		}
		case "paylak": {
		return api.sendMessage({ attachment: fs.createReadStream(__dirname + "/cache/paylak.mp4")}, event.threadID);
		break;
		}
		default:
			break;
    }
}    