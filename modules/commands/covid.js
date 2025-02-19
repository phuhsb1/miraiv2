module.exports.config = {
	name: "covid",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "SpermLord",
	description: "Lấy thông tin về tình hình dịch bệnh COVID-19",
	commandCategory: "General",
	usages: "covid",
	cooldowns: 5,
	dependencies: ["axios"]
};

module.exports.run = async function({ api, event }) {
	const axios = require('axios');
	let data = (await axios.get('https://www.spermlord.ml/covid')).data;
	api.sendMessage(		
		'====== Thế Giới ======\n' +
		`😷 Nhiễm: ${data.thegioi.nhiem}\n` +
		`💚 Đã hồi phục: ${data.thegioi.hoiphuc}\n` +
		`💀 Tử vong: ${data.thegioi.tuvong}\n` +
		'====== Việt Nam ======\n' +
		`😷 Nhiễm: ${data.vietnam.nhiem}\n` +
		`💚 Đã hồi phục: ${data.vietnam.hoiphuc}\n` +
		`💀 Tử vong: ${data.vietnam.tuvong}\n` +
		`📰 Tin tức mới nhất: ${data.tintuc}\n` +
		`Dữ liệu được cập nhật vào: ${data.updatedAt}`,
		event.threadID, event.messageID
	);
}