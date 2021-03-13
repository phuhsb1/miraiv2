module.exports.config = {
	name: "timbox",
	version: "0.0.1",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "Cấm hoặc gỡ cấm nhóm",
	commandCategory: "",
	usages: "thread args input",
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


module.exports.run = async ({ event, api, args }) => {
	let content = args.slice(1, args.length);
	switch (args[0]) {
		case "search": {
			let contentJoin = content.join(" ");
			let getThreads =  (await Threads.getAll(['threadID', 'name'])).filter(item => !!item.name);
			let matchThreads = [], a = '', b = 0;
			getThreads.forEach(i => {
				if (i.name.toLowerCase().includes(contentJoin.toLowerCase())) {
					matchThreads.push({
						name: i.name,
						id: i.threadID
					});
				}
			});
			matchThreads.forEach(i => a += `\n${b += 1}. ${i.name} - ${i.id}`);
			(matchThreads.length > 0) ? api.sendMessage(`Đây là kết quả phù hợp: \n${a}`, event.threadID) : api.sendMessage("Không tìm thấy kết quả dựa vào tìm kiếm của bạn!", event.threadID);
			break;
		}
		default:
			break;
    }
}    