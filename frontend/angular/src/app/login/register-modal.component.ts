import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {

  isSubmitting = false;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    
  }

  submitForm(event) {
    this.isSubmitting = true;
  }

}
