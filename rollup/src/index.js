//被引用的文件只有一个default声明的对象或者函数的话,则引用的时候不用添加{};
import util1 from  './utils-1';

import { fn1, fn2 }  from './utils-2';



console.error(util1.default);

export class Test {
    constructor(fn1,fn2){
       this.f = fn1();
       this.n = fn2();
    }

    add(){
        return this.f+this.n;
    }


}

[1,2,3,4].map(t => t+1);