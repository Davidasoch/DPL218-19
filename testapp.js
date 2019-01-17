

var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	arrayu = q.pathname.split('/');
	fs.readFile('./views/'+arrayu[1], 'utf-8', (err, data) => {
		  if(err) {
		    console.log('error: ', err);
		    res.end('<p>error 404 file not found</p>')
		  } else {
				res.end(data);
		  }
		});
	
}).listen(80);