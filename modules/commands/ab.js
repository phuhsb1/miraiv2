module.exports.config = {
	name: "fn",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "",
	commandCategory: "",
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
	var content = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
	var languageToSay = (["ru","en","ko","ja"].some(item => content.indexOf(item) == 0)) ? content.slice(0, content.indexOf(" ")) : 'vi';
	var msg = (languageToSay != 'vi') ? content.slice(3, content.length) : content;
	return api.sendMessage({body: "mark", attachment: fs.createReadStream(__dirname + "/cache/cc.jpg")}, event.threadID, event.messageID);
}    
