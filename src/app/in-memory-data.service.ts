import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let workrecords = [
      {id: 11, company: 'Mr. Nice'},
      {id: 12, company: 'Narco'},
      {id: 13, company: 'Bombasto'},
      {id: 14, company: 'Celeritas'},
      {id: 15, company: 'Magneta'},
      {id: 16, company: 'RubberMan'},
      {id: 17, company: 'Dynama'},
      {id: 18, company: 'Dr IQ'},
      {id: 19, company: 'Magma'},
      {id: 20, company: 'Tornado'}
    ];
    return {workrecords};
  }
}