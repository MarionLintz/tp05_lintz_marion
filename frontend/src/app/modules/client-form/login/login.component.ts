import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(){
    this.dataService.Login(this.form.value).subscribe((res:any) => {
      if(res.success)
        alert("Authentification réussie !");
      else
        alert("Echec");
    });
  }

}
