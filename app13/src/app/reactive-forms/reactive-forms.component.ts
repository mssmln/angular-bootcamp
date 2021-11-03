import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  // dichiaro gruppo di elementi del form, gruppo di formcontrol
  loginForm:FormGroup;

  constructor() {
    this.loginForm= new FormGroup({});
   }

  ngOnInit(): void {
    // assegno al gruppo un elenco di controlli inizialmente vuoti
    this.loginForm= new FormGroup({
      username: new FormControl('utente',Validators.required), // istanza di FormControl
      password: new FormControl('123'),
      contatti: new FormGroup({ // istanza di FormGroup
        telefono: new FormControl('000'),
        email:new FormControl('info@pippo.com')
      })
    });


    // metodi per modificare i valori del form
    // con setValue devo dare un valore a tutti i controls
    // this.loginForm.setValue({
    //   username: 'nuovouser',
    //   password: 'nuovapassword'
    // });

    // patchValue sostituisce i valori interessati, non per forza tutti
    // this.loginForm.patchValue({
    //     password: 'nuovapassword'
    //  });


  }


  onSubmit():void{
    alert('dati inviati');
  }

}
