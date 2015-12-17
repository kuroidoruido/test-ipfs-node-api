var ipfsAPI = require('ipfs-api');


var DocumentStore = function (serverIp,serverPort) {
	this.serverIp = serverIp;
	this.serverPort = serverPort;
	
	this._ipfs = ipfsAPI(this.serverIp, this.serverPort);
};

/* PRIVATE FUNCTIONS */

DocumentStore.prototype._getIndex = function (callback) {
	_this = this;
	this._ipfs.name.resolve(this._peerId,function(err,resolveRes) {
		var _resolveRes = resolveRes.Path;
		_this._ipfs.cat(_resolveRes,function(err,indexRes) {
			if(err || !resolveRes) {
				// no index existing, so create one
				_this._ipfs.add(new Buffer(JSON.stringify({'index':_resolveRes})),function(err,addNewIndexRes) {
					if(err || !addNewIndexRes) return console.trace(err);
					_resolveRes = addNewIndexRes;
					_this._ipfs.pin.add(addNewIndexRes[0].Hash,function(err,pinAddNewIndex) {
						if(err || !addNewIndexRes) return console.trace(err);
						_this._ipfs.name.publish(addNewIndexRes[0].Hash,function(err,publishRes) {
							if(err || !addNewIndexRes) return console.trace(err);
							callback(
								{}
							);
						});
					});
				});
			} else {
				callback(
					JSON.parse(indexRes._readableState.buffer.toString('utf-8'))
				);
			}
		});
	});
};

/* PUBLIC FUNCTIONS */

DocumentStore.prototype.init = function (callback) {
	var docStore = this;
	docStore._ipfs.id(function(err,res) {
		if(err || !res) return console.trace(err);
		docStore._peerId = res.ID;
		callback();
	});
};

DocumentStore.prototype.getDocument = function (fileId) {
	
};

DocumentStore.prototype.putDocument = function (fileId, newContent) {
	
};


db = new DocumentStore("localhost","5001");
db.init(function() {
	db._getIndex(function(index){
		console.log(index);
	});
});

//~ db.putDocument("jeSuisUnFichier.txt","bla bla bla");
