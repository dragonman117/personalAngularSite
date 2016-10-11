//Model for Blog Entry

export class BlogEntry{
    constructor(
        public id:number,
        public title:string,
        public date:any,
        public body:string,
        public short:string,
        public imgUrl:string
    ){  }
}