#! /usr/bin/node
const { useProcessArgs } = require('../lib/internal/argv');
const { WebServer } = require('../lib');
const args = useProcessArgs();
let pathHref = process.cwd();

if(args && args.path) {
	pathHref = args.path;
}

WebServer.create({
	port: 3000,
	static: {
		path: pathHref
	},
	onMount: () => console.log('listening on 3000')
});

