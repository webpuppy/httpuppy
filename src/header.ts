/**
 * @module headers
 * @description hooks for setting up middleware for the request chain
 */
import { iHTTP } from './types';
import { useEtag } from './internal/include/etag';
import { _useContentSignatures } from './internal/_middleware';
import {
	HTTPuppyServerOptions,
	HTTPuppyWriterOptions,
} from './types/server';

/**
 *
 * @param options the writer options to apply the headers against
 * @param config the server config to apply against
 * @returns default list of http headers based on given config cache settings / content type of the request options
 */
export function useHeaders(
	options : HTTPuppyWriterOptions,
	config	: HTTPuppyServerOptions
): iHTTP.HTTPHeaders {
	const applyHeaders: iHTTP.HTTPHeaders = [
		[
			'Content-Type',
			options.type ?? 'text/plain'
		]
	];

	// set weak etag generation if applicable
	if(config.cache) {
		applyHeaders.push([
			'ETag',
			useEtag(options.virtualFile.fileName, { weak: true })
		]);
	}
	return applyHeaders;
}
