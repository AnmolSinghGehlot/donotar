import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

  alert: boolean = false;
  editMember = new FormGroup({
    memberName: new FormControl(''),
    aadhar: new FormControl(''),
    memberAge: new FormControl(''),
    memberAddress: new FormControl(''),
    memberPhone: new FormControl('')
  })

  constructor(
    private ngoService: NgoService,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ngoService.getCurrentData(this.activatedRouter.snapshot.params.memberId).subscribe((result => {
      this.editMember = new FormGroup({
        memberName: new FormControl(result['memberName']),
        aadhar: new FormControl(result['aadhar']),
        memberAge: new FormControl(result['memberAge']),
        memberAddress: new FormControl(result['memberAddress']),
        memberPhone: new FormControl(result['memberPhone']),
      })
    }
    ))
  }

  EditMember(){
    this.ngoService.updateMember(this.activatedRouter.snapshot.params.memberId).subscribe((result => {
      console.log(result,"Data Updated Successfully");
    }))
  }

}
