import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
  standalone: false,
})
export class CadastrarComponent {
  clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private clienteService: ClienteService
  ) {
    this.clienteForm = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(1)]],
    });
  }

  salvar() {
    if (this.clienteForm.valid) {
      this.clienteService.adicionarCliente(this.clienteForm.value);
      this.router.navigate(['/cliente/listar']);
    }
  }

  cancelar() {
    this.router.navigate(['/cliente/listar']);
  }
}
