import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  standalone: false,
})
export class ListarComponent implements OnInit {
  clientes: any[] = [];
  displayedColumns: string[] = ['nome', 'idade'];

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {
    this.clienteService.clientes$.subscribe((clientes) => {
      this.clientes = clientes;
    });
  }

  novoCliente() {
    this.router.navigate(['/cliente/cadastrar']);
  }
}
