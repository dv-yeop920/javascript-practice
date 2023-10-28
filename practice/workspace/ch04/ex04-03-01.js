//커링 기법이 사용된 예제 

function log(target, level, message) {
  const now = new Date();
  console.log(
    `[${now.getHours()}:${now.getMinutes()}] 
      [${target}] [${level}] 
      ${message}`
    );
}
log('console', 'DEBUG', 'debug message...');


//TODO - 다른 예제들 
//NOTE - 한번에 인자를 3개 보내는 것보다 여러개로 쪼개서 보내면 재사용성이 더 좋다? 
const logger = _.curry(log);

logger('console')('debug')('hello');


const mylog = logger('console');
mylog.debug = mylog('debug');
mylog.info = mylog('info');


mylog.info('success');
mylog.debug('test ok');