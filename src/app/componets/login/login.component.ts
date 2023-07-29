import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  adminName!: string;
  adminPassword!: string;
  showPassword: boolean = false;
  loginForm !: FormGroup ;

  constructor (private fb : FormBuilder , private auth : LoginService){}

  ngOnInit() : void{
    this.loginForm = this.fb.group({
      adminName : ['',[ Validators.required , Validators.minLength(5) ]],
      adminPassword: ['', [Validators.required , Validators.minLength(5)]]
    })
  }

  onLogin() {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);

      this.auth.adminlogin(this.loginForm.value)
      .subscribe({
        next:(res=>{
          alert(res);
        }),
        error:(err)=>{
          alert(err.error.message);
        }
      })
    }
    else{
      this.validateAllFields(this.loginForm);
      alert("your form is invalid")
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  private validateAllFields(formGroup : FormGroup){
    Object.keys(formGroup.controls).forEach(field =>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control?.markAsDirty({onlySelf : true})
      }
      else if(control instanceof FormGroup){
        this.validateAllFields(formGroup);
      }
    })
  }
}
