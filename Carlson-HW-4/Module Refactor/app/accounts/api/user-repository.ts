import { Injectable } from '@angular/core';

@Injectable()
export class UserRepository {
    getUser(){
        return {
            name: 'John Lawrimore',
            email: 'jlawrimore@smu.edu',
            phoneNumbers: [
                { number: '2147551234', type: 'mobile' }
            ]
        };
    }
}