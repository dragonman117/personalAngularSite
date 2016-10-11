import { Injectable } from '@angular/core';

import { BlogEntry } from '../models/blogEntry';

@Injectable()
export class BlogService {

    public articles:BlogEntry[];

    constructor(){
        this.articles = [];
        this.articles.push({id:1, title:"Reasons to use Angular 2", date:new Date(), body:`<p>
            Angular 2 is the new frameworks from both Google and Microsoft (an unholy alliance I know). It provides
            a unique set of features to build super fast single page applications for next-gen web apps. It utilizes
            a new subset of Javascript called Typescript (all of the .ts files in my source directory). This takes
            all current features of es5 and adds in the future features of es6 now. It then will compile these features
            down to currently suppoted es5 scripts. It also adds in the ability to make your javascript statically typed.
            But perhaps the best feature of angular 2 is it's modular nature.
        </p>
        <p>
            Angular 2 is a modular based frameworks. A properly formatted angular 2 project will be composed of several
            modular components. These components have their own encapsulated routes, html, css, and services. This means
            that a well built component (say this blog) can provide a readme file that defines required endpoints and
            will simply need to be included by the root component in order to be fully functional. Then as it has it's own
            css you can define base formats that can then be overwritten by a particular sites individual global css files.
            These components can also be lazy loaded (meaning they can be loaded after the initial page is shown) to
            help reduce the initial load time of your page.
        </p>`, short:"Angular 2 is the best frameworks ever and everyone should use it", imgUrl:"/img/placeholder.png"});
        this.articles.push({id:2, title:"Reasons to use Angular 2", date:new Date(), body:`<p>
            Angular 2 is the new frameworks from both Google and Microsoft (an unholy alliance I know). It provides
            a unique set of features to build super fast single page applications for next-gen web apps. It utilizes
            a new subset of Javascript called Typescript (all of the .ts files in my source directory). This takes
            all current features of es5 and adds in the future features of es6 now. It then will compile these features
            down to currently suppoted es5 scripts. It also adds in the ability to make your javascript statically typed.
            But perhaps the best feature of angular 2 is it's modular nature.
        </p>
        <p>
            Angular 2 is a modular based frameworks. A properly formatted angular 2 project will be composed of several
            modular components. These components have their own encapsulated routes, html, css, and services. This means
            that a well built component (say this blog) can provide a readme file that defines required endpoints and
            will simply need to be included by the root component in order to be fully functional. Then as it has it's own
            css you can define base formats that can then be overwritten by a particular sites individual global css files.
            These components can also be lazy loaded (meaning they can be loaded after the initial page is shown) to
            help reduce the initial load time of your page.
        </p>`, short:"Angular 2 is the best frameworks ever and everyone should use it", imgUrl:"/img/placeholder.png"});
        this.articles.push({id:3, title:"Reasons to use Angular 2", date:new Date(), body:`<p>
            Angular 2 is the new frameworks from both Google and Microsoft (an unholy alliance I know). It provides
            a unique set of features to build super fast single page applications for next-gen web apps. It utilizes
            a new subset of Javascript called Typescript (all of the .ts files in my source directory). This takes
            all current features of es5 and adds in the future features of es6 now. It then will compile these features
            down to currently suppoted es5 scripts. It also adds in the ability to make your javascript statically typed.
            But perhaps the best feature of angular 2 is it's modular nature.
        </p>
        <p>
            Angular 2 is a modular based frameworks. A properly formatted angular 2 project will be composed of several
            modular components. These components have their own encapsulated routes, html, css, and services. This means
            that a well built component (say this blog) can provide a readme file that defines required endpoints and
            will simply need to be included by the root component in order to be fully functional. Then as it has it's own
            css you can define base formats that can then be overwritten by a particular sites individual global css files.
            These components can also be lazy loaded (meaning they can be loaded after the initial page is shown) to
            help reduce the initial load time of your page.
        </p>`, short:"Angular 2 is the best frameworks ever and everyone should use it", imgUrl:"/img/placeholder.png"});
        this.articles.push({id:4, title:"Angular 2", date:new Date(), body:`<p>
            Angular 2 is the new frameworks from both Google and Microsoft (an unholy alliance I know). It provides
            a unique set of features to build super fast single page applications for next-gen web apps. It utilizes
            a new subset of Javascript called Typescript (all of the .ts files in my source directory). This takes
            all current features of es5 and adds in the future features of es6 now. It then will compile these features
            down to currently suppoted es5 scripts. It also adds in the ability to make your javascript statically typed.
            But perhaps the best feature of angular 2 is it's modular nature.
        </p>
        <p>
            Angular 2 is a modular based frameworks. A properly formatted angular 2 project will be composed of several
            modular components. These components have their own encapsulated routes, html, css, and services. This means
            that a well built component (say this blog) can provide a readme file that defines required endpoints and
            will simply need to be included by the root component in order to be fully functional. Then as it has it's own
            css you can define base formats that can then be overwritten by a particular sites individual global css files.
            These components can also be lazy loaded (meaning they can be loaded after the initial page is shown) to
            help reduce the initial load time of your page.
        </p>`, short:"It rocks", imgUrl:"/img/placeholder.png"});
    }

    getBlogEntries():BlogEntry[]{
        return this.articles;
    }

    getArticle(id):BlogEntry{
        for(var i = 0; i < this.articles.length; i++){
            if(this.articles[i].id == id){
                return this.articles[i];
            }
        }
        return {id:0, body:"", title:"", date:"", short:"", imgUrl:""};
    }

}
