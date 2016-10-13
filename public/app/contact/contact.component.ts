import {Component} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'html/home.html',
    styleUrls: ['css/blog.css']
})
export class Contact {

    public form: FormGroup;
    public name = new FormControl('', Validators.required);
    public subject = new FormControl('', Validators.required);
    public email = new FormControl('',emailValidator);
    public message = new FormControl('', Validators.required);

    constructor(private fb: FormBuilder){
        this.form = fb.group({
            'name': this.name,
            'subject': this.subject,
            'email': this.email,
            'message': this.message,
        });
    }

    onSubmit(){
        console.log(this.form.value);
        this.form.reset();
    }
}
