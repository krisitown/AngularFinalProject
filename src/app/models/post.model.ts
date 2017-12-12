export class PostModel {
    constructor(
        public author : string,
        public title : string,
        public description : string,
        public url : string,
        public imageUrl : string
    ) {}
}