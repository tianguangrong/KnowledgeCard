//被引用的文件只有一个default声明的对象或者函数的话,则引用的时候不用添加{};
import util1 from  './utils-1';

import { fn1, fn2 }  from './utils-2';



console.error(util1.default);

// export class test {
//     constructor(fn1,fn2){
//         alert(fn1());
//         alert(fn2());
//     }
// }

[1,2,3,4].map(t => t+1);