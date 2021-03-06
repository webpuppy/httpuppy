import expect from 'expect';
import {
	it,
	describe
} from 'mocha';
import { statSync } from 'fs';
import { join, resolve } from 'path';
import {
	_vstats,
	__etag,
	use_config,
	default_http_config
} from '../lib/internal';

describe('test etag generation process', () => {

	it('generates etag for a given content', () => {
		const tag = __etag('foobar');
		expect(tag).toMatch(/\//);
		expect(tag).toBeTruthy();
	});

	it('determines a proper fs.Stat', () => {
		const ex = statSync(resolve(process.cwd(), 'package.json'));
		expect(_vstats(ex)).toBeTruthy();
	});
});

describe('config loading', () => {
	const h_test = { hostname: 'https://test.com' };
	const c_0 = use_config();
	const c_1 = use_config({}, []);
	const c_2 = use_config(h_test);

	it('loads dynamic config opts', () => {
		expect(c_0).toEqual(default_http_config);
		expect(c_1).toEqual(default_http_config);
		expect(c_2).toEqual({...default_http_config, ...h_test});
	});
});
