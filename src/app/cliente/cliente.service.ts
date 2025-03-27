import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Cliente {
  nome: string;
  idade: number;
}

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private clientes = new BehaviorSubject<Cliente[]>([]);

  clientes$ = this.clientes.asObservable();

  adicionarCliente(cliente: Cliente) {
    const listaAtualizada = [...this.clientes.value, cliente];
    this.clientes.next(listaAtualizada);
  }
}
