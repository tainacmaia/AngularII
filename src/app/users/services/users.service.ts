import { Injectable } from '@angular/core';
import { State } from '../models/state.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public getStatesOfBrazil(): State[] {
    return (
      [
        { nome: 'Acre', sigla: 'AC' },
        { nome: 'Alagoas', sigla: 'AL' },
        { nome: 'Amapá', sigla: 'AP' },
        { nome: 'Amazonas', sigla: 'AM' },
        { nome: 'Bahia', sigla: 'BA' },
        { nome: 'Ceará', sigla: 'CE' },
        { nome: 'Distrito Federal', sigla: 'DF' },
        { nome: 'Espírito Santo', sigla: 'ES' },
        { nome: 'Goiás', sigla: 'GO' },
        { nome: 'Maranhão', sigla: 'MA' },
        { nome: 'Mato Grosso', sigla: 'MT' },
        { nome: 'Mato Grosso do Sul', sigla: 'MS' },
        { nome: 'Minas Gerais', sigla: 'MG' },
        { nome: 'Pará', sigla: 'PA' },
        { nome: 'Paraíba', sigla: 'PB' },
        { nome: 'Paraná', sigla: 'PR' },
        { nome: 'Pernambuco', sigla: 'PE' },
        { nome: 'Piauí', sigla: 'PI' },
        { nome: 'Rio de Janeiro', sigla: 'RJ' },
        { nome: 'Rio Grande do Norte', sigla: 'RN' },
        { nome: 'Rio Grande do Sul', sigla: 'RS' },
        { nome: 'Rondônia', sigla: 'RO' },
        { nome: 'Roraima', sigla: 'RR' },
        { nome: 'Santa Catarina', sigla: 'SC' },
        { nome: 'São Paulo', sigla: 'SP' },
        { nome: 'Sergipe', sigla: 'SE' },
        { nome: 'Tocantins', sigla: 'TO' }
      ]
    );
  }

  public getUsers(): User[] {
    return JSON.parse(localStorage.getItem('USERS') || '[]');
  }

  public saveUser(user: User): void {
    user = {
      ...user,
      id: crypto.randomUUID(),
      address: {
        ...user.address,
        id: crypto.randomUUID()
      }
    }

    const users = this.getUsers();

    users.push(user);
    this.setLocalSorageData(users);
  }

  public getUserById(id: string): User {
    const users = this.getUsers();
    return users.find(user => user.id === id) as User;
  }

  public deleteUser(id: string): void {
    console.log('delete');
    const users = this.getUsers();
    const userIndex = users.findIndex(user => user.id === id);
    users.splice(userIndex, 1);
    this.setLocalSorageData(users);
  }

  public editUser(user: User): void {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === user.id);
    users[index] = user;
    this.setLocalSorageData(users);
  }

  private setLocalSorageData(data: User[]): void {
    localStorage.setItem('USERS', JSON.stringify(data));
  }
}
