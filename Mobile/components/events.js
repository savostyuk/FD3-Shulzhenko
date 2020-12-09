import {EventEmitter} from 'events';

let clientEvents=new EventEmitter();
let formEvents=new EventEmitter();

export {clientEvents};
export {formEvents};