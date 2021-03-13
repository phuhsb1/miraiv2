module.exports.config = {
    name: "ghep",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SpermLord",
    description: "Ghép cặp",
    commandCategory: "",
    usages: "ghep",
    cooldowns: 1,
    dependencies: ['request', 'fs-extra'],
    info: [
        {
            key: ".ghep => Để trống",
            prompt: "ghep",
            type: "null",
            example: ""
        },
        {
            key: "ghep",
            prompt: "ghep",
            type: "string",
            example: "ghep"
        }
    ],
};

module.exports.run = function({ type, data, min, max }) {


var random = function(min, max) { 
    return global.getRandomNumber(min, max, 0);
}

var ghep = async function(type, data) {

            var adinfo = await data.facebookapi.getThreadInfo(data.msgdata.threadID);

            var gendernam = [];
            var gendernu = [];
            var idnam =[];
            var idnu =[];
            //nam va nu
            for (let z in adinfo.userInfo) {
                var gioitinhone = adinfo.userInfo[z].gender;
                if (gioitinhone == "MALE") {
                    gendernam.push(z);
                    idnam.push(adinfo.userInfo[z].id);
                }  
            }

           for (let z in adinfo.userInfo) {
                var gioitinhone = adinfo.userInfo[z].gender;
                if (gioitinhone == "FEMALE") {
                    gendernu.push(z);
                    idnu.push(adinfo.userInfo[z].id);
                }  
            
           }
           var sendID = data.msgdata.senderID;
           for (let z in adinfo.userInfo) {
                for (var i = 0; i < idnam.length; i++) {
                if(sendID == idnam[i]){
                     var sp = gendernu[random(0,gendernu.length-1)];
                     var name = adinfo.userInfo[sp].name
                     var idty = adinfo.userInfo[sp].id
                 }

            }

             for (var i = 0; i < idnu.length; i++) {
                if(sendID == idnu[i]){
                     var sp = gendernam[random(0,gendernam.length-1)];
                     var name = adinfo.userInfo[sp].name
                     var idty = adinfo.userInfo[sp].id
                 }

            } 
            
           }
      var tname = global.data.cacheName["FB-" + data.msgdata.senderID]; 
        //thay đổi njck name
        data.facebookapi.changeNickname(`♥♥ tình yêu của ${name}`,data.msgdata.threadID,data.msgdata.senderID,(err) => {
        if(err) return console.error(err);
    });
        data.facebookapi.changeNickname(`♥♥ tình yêu của ${tname}`,data.msgdata.threadID,idty,(err) => {
        if(err) return console.error(err);
    });
            
          
        
        //lấy avt nạn nhân :V
        var imgX = `https://graph.facebook.com/${idty}/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`;
        var fetchimgD = await fetch(imgX);
        var buffer = await fetchimgD.buffer();
        var imagesx = new streamBuffers.ReadableStreamBuffer({
            frequency: 10,
            chunkSize: 1024
        });
        imagesx.path = 'image.png';
        imagesx.put(buffer);
        imagesx.stop();
            var nametag = `@${name}`

                         data.facebookapi.sendMessage({
							body: `Chúc mừng bạn đã kiếm được ny\n♥Ny của bạn là :\n${nametag}`,
							mentions: [{
								tag: nametag,
								id: idty
							}],
                            attachment: ([imagesx])
						}, data.msgdata.threadID);
                    }
                }             