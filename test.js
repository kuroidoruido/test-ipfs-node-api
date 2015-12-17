var ipfsAPI = require('ipfs-api');

ipfs = ipfsAPI("localhost", "5001");

//~ ipfs.id(function(err,res) {
	//~ if(err || !res) return console.error(err);
	//~ console.log(res);
	
//~ });

//~ console.log(ipfs.name.publish.toString());
console.log(ipfs.pin.add);

//~ ipfs.pin.add('QmRfCHcebb1UzJvnRVLGTShpPGDTSkKm818ZJydZwBrkcL',function(err,res) {
	//~ console.log(err);
	//~ console.log(res);
//~ }); 

//~ ipfs.name.resolve('/ipns/QmQ6i1eJGvQu9Rmi8LjbeUrXzCqhrq5NHqpWMZimUjyPUe',function(err,res) {
	//~ if(err || !res) return console.error(err);
	
	//~ console.log(res);
//~ });

ipfs.cat('/ipfs/QmRYFuxXzkuJERzNGCvWn6zWzU2B2NqgGhTqfdYYpcTFss',function(err,res) {
	console.log(err);
	//~ console.log(JSON.parse(res._readableState.buffer.toString('utf-8')));
	console.log(res);
});
