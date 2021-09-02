import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private formbuilder: FormBuilder,
    private ngoService: NgoService
  ) { }

  addMember = new FormGroup({
    memberName: new FormControl(''),
    aadhar: new FormControl(''),
    memberAddress: new FormControl(''),
    memberAge: new FormControl('')
  }
  );

  ngOnInit(): void {
  }

  SaveData() {
    console.log(this.addMember.value);
    this.ngoService.saveMemberData(this.addMember.value);
  }
}
