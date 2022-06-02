const { join } = require('path');
const { useServer } = require('../lib');

const app = useServer({
	static: {
		path: join(process.cwd(), './examples/files')
	},
    throwWarnings: false,
	middleware: [
		{
			href: '/',
			handler: (req, res) => console.log(req.url)
		}
	]
});


app.listen(3000, app.onMount);
