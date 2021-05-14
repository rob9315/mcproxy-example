import * as mcproxyExample from './main';
let test: mcproxyExample.ProxyServer = new mcproxyExample.ProxyServer({
  'online-mode': true,
  host: 'localhost',
  port: 25566,
});
test.server.on('login', (pclient) => {
  console.log(`${pclient.username} logged onto the proxyServer`);
});
