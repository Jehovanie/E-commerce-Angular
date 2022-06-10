import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IData } from '../../interface/Idata';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public users: any;

    ///c'est l'api qui stock les datas ( le plus souvent url point sur le back )
    private readonly API_DATA = "api/data.json";

    ///injection de HttpClient.
    constructor(private httpClient: HttpClient) { }

    ///gere les errors via observable.
    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }


    private getUsers = async () => {

        const fakedata = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())

        return fakedata;
    }

    //// get all data from the back.
    getAllData(): Observable<any> {
        return this.httpClient.get<any>(this.API_DATA).pipe(
            catchError(this.handleError)
        )
    }


    getDataByType(type: string): IData[] {
        console.log("getDataByType...")
        var element!: IData[];
        switch (type) {
            case "car":
                this.getAllData().subscribe({
                    next: data => element = data.car,
                    complete: () => console.log("get car finised...")
                });
                console.log(element)
                return element
            case "informatique":
                this.getAllData().subscribe(
                    {
                        next: data => element = data.informatique,
                        complete: () => console.log("get info finised...")
                    })
                return element;
            case "scouter":
                this.getAllData().subscribe({
                    next: data => element = data.scouter,
                    complete: () => console.log("get scouter finised...")
                })
                return element;
            default:
                return []
        }
    }

    getByTypeAndId(type: string, id: number) {
        console.log("getDataByTypeAndId...")
        console.log(this.getDataByType(type)[id - 1])
        return this.getDataByType(type)[id - 1];

    }

}