import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

export interface ProfileInterface {
    name: string;
    age: string;
    country: string;
    risk: string;
}

export class Profile implements ProfileInterface {

    name: string;
    age: string;
    country: string;
    risk: string;

    constructor(name: string, age: string, country: string, risk: string) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.risk = risk;
    }

    toObject() {
        return {
            "name": this.name,
            "age": this.age,
            "country": this.country,
            "risk": this.risk
        }
    }
}
  
@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    localStorageChanges$ = this.localStorageService.changes$;
    profile: Profile;

    constructor(private localStorageService: LocalStorageService) { 
        const profileObj = localStorageService.getObj('profile');
        this.profile = new Profile(profileObj.name, profileObj.age, profileObj.country, profileObj.risk);
    }

    persist(key: string, value: any) {
        this.localStorageService.set(key, value);
    }

    getProfile() {
        return this.profile;
    }

    updateName(name: string) {
        if(name != "") {
            this.profile = new Profile(name, this.profile.age, this.profile.country, this.profile.risk);
            this.persist('profile', this.profile.toObject());
        }
    }

    updateAge(age: string) {
        if(age != "") {
            this.profile = new Profile(this.profile.name, age, this.profile.country, this.profile.risk);
            this.persist('profile', this.profile.toObject());
        }
    }

    updateCountry(country: string) {
        if(country != "") {
            this.profile = new Profile(this.profile.name, this.profile.age, country, this.profile.risk);
            this.persist('profile', this.profile.toObject());
        }
    }

    updateRisk(risk: string) {
        if(risk != "") {
            this.profile = new Profile(this.profile.name, this.profile.age, this.profile.country, risk);
            this.persist('profile', this.profile.toObject());
        }
    }

    updateProfile(name: string, age: string, country: string, risk: string) {
        this.profile = new Profile(name, age, country, risk);
        this.persist('profile', this.profile.toObject());
    }

    clearProfile() {
        this.profile = new Profile('', '', '', '');
        this.persist('profile', this.profile.toObject());
    }

}