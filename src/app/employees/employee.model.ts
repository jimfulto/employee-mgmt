export class Employee {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public age: number;
    public gender: string;
    public rating: number;

    constructor(id: number, 
                name: string, 
                desc: string, 
                imagePath: string,
                age: number,
                gender: string,
                rating: number) {
                    this.id = id;
                    this.name =name;
                    this.description = desc;
                    this.imagePath = imagePath;
                    this.age = age;
                    this.gender = gender;
                    this.rating = rating;
    }
}