export class PersonDto {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: any;
    address?: any;

    constructor(){
        this.firstName = "";
        this.lastName = "";
    }
}