/**
 * Объект, накапливающий функции, а потом вызывающий их все с одними и теми же аргументами
 */

class Callbacks{
	constructor(){
		this._callbacks = new Set();
		this._done = false;
		
	}
	
	on(callback){
		if(this._done){
			callback(...this._arg);
		}
		else{
			this._callbacks.add(callback);
		}
		return this;
	}
	
	off(callback){
		this._callbacks.delete(callback);
	}
	
	fire(...arg){
		this._arg = arg;
		this._done = true;
		for(let callback of this._callbacks){
			callback(...arg);
		}
	}
}

module.exports = Callbacks;