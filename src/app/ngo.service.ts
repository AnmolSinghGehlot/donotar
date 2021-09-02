import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ngo } from './ngo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgoService {
  constructor(
    private http: HttpClient,
    private route: Router

  ) { }

  OnGet() {
    let url = "http://localhost:8899/Ngo/NgoMembers";
    return this.http.get(url);
  }
  private loginUrl = 'http://localhost:8899/login';
  API = "http://localhost:8899";

  public getMembers(): Observable<Ngo> {
    return this.http.get<Ngo>(this.API + '/Ngo/NgoMembers')
      .pipe(map((res: any) => {
        return res;
      }))
  }

  public createNgoMember(ngo: Ngo) {
    return this.http.post<Ngo>(this.API + '/Ngo/NgoMember', ngo)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  public updateMember(ngo: Ngo): Observable<Ngo> {
    return this.http.put<Ngo>(this.API + '/Ngo/NgoMember/update', ngo)
  }

  public deleteMember(memberId: number) {
    return this.http.delete<void>(this.API + '/Ngo/NgoMember/delete/' + memberId)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  saveMemberData(data: any) {
    console.log(data);
    return this.http.post('http://localhost:8899/Ngo/NgoMember', data);
  }

  getCurrentData(memberId: any) {
    return this.http.get<Ngo>(this.API + '/Ngo/NgoMember/' + memberId)
  }
}
