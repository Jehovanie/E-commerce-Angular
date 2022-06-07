import { Injectable } from '@angular/core';
import data from "../../data";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public users: any;


    constructor() {
        this.getUsers().then(json => console.log(json));
        console.log("Users : " + this.users)
    }


    private getUsers = async () => {

        const fakedata = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())

        return fakedata;
    }

    getDataByType(type: string) {
        switch (type) {
            case "car":
                return data.car;
            case "informatique":
                return data.informatique;
            case "scouter":
                return data.scouter;
            default:
                return []
        }
    }

    getAllData() {
        return data;
    }

    getDataCar() {
        return data.car;
    }
    getDataInfo() {
        return data.informatique;
    }
    getDataScouter() {
        return data.scouter;
    }

    getByTypeAndId(type: string, id: number) {

        return this.getDataByType(type)[id - 1];
    }
}
