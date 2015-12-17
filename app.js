var ipfsAPI = require('ipfs-api')

var ipfs = ipfsAPI('localhost', '5001')

/*
ipfs.add("test.txt", function(err, res) {
    if(err || !res) return console.error(err);

    res.forEach(function(file) {
        console.log(file.Hash);
        console.log(file.Name);
        ipfs.name.publish(file.Hash,function(err,res){
			if(err || !res) return console.error(err);
			
			//~ res.forEach(function(file) {
				console.log(file);
			//~ });
		});
    })
});

console.log(ipfs);
*/

ipfs.add(new Buffer("Je suis un test"), function(err, res) {
    if(err || !res) return console.error(err);

    res.forEach(function(file) {
        console.log(file.Hash);
        console.log(file.Name);
    })
});

console.log("end")
