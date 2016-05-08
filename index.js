0 info it worked if it ends with ok
1 verbose cli [ 'C:\\Program Files\\nodejs\\node.exe',
1 verbose cli   'C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js',
1 verbose cli   'publish',
1 verbose cli   'fdl' ]
2 info using npm@2.14.12
3 info using node@v4.2.6
4 verbose publish [ 'fdl' ]
5 silly cache add args [ 'fdl', null ]
6 verbose cache add spec fdl
7 silly cache add parsed spec Result {
7 silly cache add   raw: 'fdl',
7 silly cache add   scope: null,
7 silly cache add   name: 'fdl',
7 silly cache add   rawSpec: '',
7 silly cache add   spec: 'latest',
7 silly cache add   type: 'tag' }
8 silly addNamed fdl@latest
9 verbose addNamed "latest" is being treated as a dist-tag for fdl
10 info addNameTag [ 'fdl', 'latest' ]
11 silly mapToRegistry name fdl
12 silly mapToRegistry using default registry
13 silly mapToRegistry registry https://registry.npmjs.org/
14 silly mapToRegistry uri https://registry.npmjs.org/fdl
15 verbose addNameTag registry:https://registry.npmjs.org/fdl not in flight; fetching
16 verbose request uri https://registry.npmjs.org/fdl
17 verbose request no auth needed
18 info attempt registry request try #1 at 11:36:40
19 verbose request using bearer token for auth
20 verbose request id 516162e4b937c5da
21 http request GET https://registry.npmjs.org/fdl
22 http 404 https://registry.npmjs.org/fdl
23 verbose headers { 'content-type': 'application/json',
23 verbose headers   'cache-control': 'max-age=0',
23 verbose headers   'content-length': '2',
23 verbose headers   'accept-ranges': 'bytes',
23 verbose headers   date: 'Sun, 08 May 2016 03:36:41 GMT',
23 verbose headers   via: '1.1 varnish',
23 verbose headers   connection: 'keep-alive',
23 verbose headers   'x-served-by': 'cache-nrt6120-NRT',
23 verbose headers   'x-cache': 'MISS',
23 verbose headers   'x-cache-hits': '0',
23 verbose headers   'x-timer': 'S1462678601.327981,VS0,VE498',
23 verbose headers   vary: 'Accept-Encoding' }
24 silly get cb [ 404,
24 silly get   { 'content-type': 'application/json',
24 silly get     'cache-control': 'max-age=0',
24 silly get     'content-length': '2',
24 silly get     'accept-ranges': 'bytes',
24 silly get     date: 'Sun, 08 May 2016 03:36:41 GMT',
24 silly get     via: '1.1 varnish',
24 silly get     connection: 'keep-alive',
24 silly get     'x-served-by': 'cache-nrt6120-NRT',
24 silly get     'x-cache': 'MISS',
24 silly get     'x-cache-hits': '0',
24 silly get     'x-timer': 'S1462678601.327981,VS0,VE498',
24 silly get     vary: 'Accept-Encoding' } ]
25 verbose stack Error: Registry returned 404 for GET on https://registry.npmjs.org/fdl
25 verbose stack     at makeError (C:\Program Files\nodejs\node_modules\npm\node_modules\npm-registry-client\lib\request.js:264:12)
25 verbose stack     at CachingRegistryClient.<anonymous> (C:\Program Files\nodejs\node_modules\npm\node_modules\npm-registry-client\lib\request.js:242:14)
25 verbose stack     at Request._callback (C:\Program Files\nodejs\node_modules\npm\node_modules\npm-registry-client\lib\request.js:172:14)
25 verbose stack     at Request.self.callback (C:\Program Files\nodejs\node_modules\npm\node_modules\request\request.js:198:22)
25 verbose stack     at emitTwo (events.js:87:13)
25 verbose stack     at Request.emit (events.js:172:7)
25 verbose stack     at Request.<anonymous> (C:\Program Files\nodejs\node_modules\npm\node_modules\request\request.js:1082:10)
25 verbose stack     at emitOne (events.js:82:20)
25 verbose stack     at Request.emit (events.js:169:7)
25 verbose stack     at IncomingMessage.<anonymous> (C:\Program Files\nodejs\node_modules\npm\node_modules\request\request.js:1009:12)
26 verbose statusCode 404
27 verbose pkgid fdl
28 verbose cwd F:\index
29 error Windows_NT 6.3.9600
30 error argv "C:\\Program Files\\nodejs\\node.exe" "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js" "publish" "fdl"
31 error node v4.2.6
32 error npm  v2.14.12
33 error code E404
34 error 404 Registry returned 404 for GET on https://registry.npmjs.org/fdl
34 error 404
34 error 404 'fdl' is not in the npm registry.
34 error 404 You should bug the author to publish it (or use the name yourself!)
34 error 404
34 error 404 Note that you can also install from a
34 error 404 tarball, folder, http url, or git url.
35 verbose exit [ 1, true ]
