// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { get } from '@loopback/rest';
import { ApiBase } from '../config';

console.log(ApiBase);

export class HelloController {
  @get(ApiBase + '/hello')
  hello(): string {
    return 'Hello world!';
  }
}
