import {Component, NgZone} from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'html/home.html',
    styleUrls: ['css/home.css']
})
export class Home {
    public height;

    constructor(ngZone:NgZone) {
        window.onresize = (e) =>
        {
            ngZone.run(() => {
                this.height = window.innerHeight - 64;
            });
        };
    }

    ngOnInit(){
        //Set initial
        this.height = window.innerHeight - 64;
    }
}
