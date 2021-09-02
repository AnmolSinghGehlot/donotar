import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgoService } from '../ngo.service';

export class ngo {
  constructor(
    public memberId: number,
    public memberName: string,
    public aadhar: number,
    public active: boolean,
    public gender: string,
    public memberAddress: string,
    public memberAge: number,
    public memberPhone: number
  ) { }
}

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css']
})
export class ListMembersComponent implements OnInit {
  formValue !: FormGroup;
  ngo !: ngo[];
  constructor(
    private httpClient: HttpClient,
    private formbuilder: FormBuilder,
    private ngoService: NgoService
  ) { }

  addMember = new FormGroup({
    memberName: new FormControl(''),
    aadhar: new FormControl(''),
    memberAddress: new FormControl(''),
    memberAge: new FormControl(''),
    memberPhone: new FormControl('')
  }
  );
  select: String ='';
  genders:any =['Male','Female'];

  ngOnInit(): void {
    this.getMembers();
    this.formValue = this.formbuilder.group({
      memberName: [''],
      aadhar: [''],
      gender: [],
      memberAddress: [''],
      memberAge: [''],
      memberPhone: ['']
    })
  }

  getMembers() {
    this.httpClient.get<any>('http://localhost:8899/Ngo/NgoMembers').subscribe(
      response => {
        console.log(response);
        this.ngo = response;
      }
    );
  }

  SaveData() {
    this.ngoService.saveMemberData(this.addMember.value)
      .subscribe(
        (result: any) => {
          console.log(result);
          alert("Ngo Member Added Successfully")
          let ref = document.getElementById('cancel')
          ref?.click();
          this.getMembers();
          this.formValue.reset();
        },
        err => {
          alert("Something Went Wrong");
        }
      )
  }

  deleteMember(memberId: any) {
    console.log(memberId);
    this.ngoService.deleteMember(memberId).subscribe((result) => {
      console.log(result);
      alert("Member Deleted Successfully");
      this.getMembers();
    })
  }

  OnEdit(row: any) {
    this.formValue.controls['memberName'].setValue(row.memberName);
    this.formValue.controls['aadhar'].setValue(row.aadhar);
    this.formValue.controls['memberAddress'].setValue(row.memberAddress);
    this.formValue.controls['memberAge'].setValue(row.memberAge);
    this.formValue.controls['memberPhone'].setValue(row.memberPhone);
  }

  updateMemberDetials(){

  }

  radioChangeHandler(event: any){
    this.select=event.target.value;
    return this.select;
  }
}
