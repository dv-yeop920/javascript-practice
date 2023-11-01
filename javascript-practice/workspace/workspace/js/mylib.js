//NOTE 프로토타입에 메모 함수 생성해서 추가
Function.prototype.memo = function(key) {
    // 캐시를 위한 코드
    //NOTE 여기서 this는 isPrime 함수
    this._cache = this._cache || {};
    
    if (this._cache[key] !== undefined) {
      return this._cache[key];
    }
    else {
      return this._cache[key] = this(key);
    }
  }


//NOTE 프로토타입에 메모이즈 함수 추가 
Function.prototype.memoize = function() {
  var fn = this; // = isPrime
  return function() {
    return fn.memo.apply(fn, arguments);
  }
}