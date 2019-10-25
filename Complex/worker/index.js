const keys = require("./keys")
const redis = require("redis")

const client = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: ()=>1000
});

const sub = client.duplicate();

function fib(index){
  if(index < 2) return 1;
  else return fib(index - 1) + fib(index - 2);
}

sub.on('message',(channel,message)=>{
  client.hset('values', message, fib(parseInt(message)));
});

sub.subscribe('insert');
