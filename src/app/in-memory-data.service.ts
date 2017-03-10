import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let workrecords = [
      {id: 11, company: 'Mr. Nice', technologies: ["C#"]},
      {id: 12, company: 'Narco', technologies: ["AWS"]},
      {id: 13, company: 'Bombasto', technologies: ["LINQ"]},
      {id: 14, company: 'Celeritas', technologies: ["LINQ"]},
      {id: 15, company: 'Magneta', technologies: []},
      {id: 16, company: 'RubberMan', technologies: []},
      {id: 17, company: 'Dynama', technologies: []},
      {id: 18, company: 'Dr IQ', technologies: []},
      {id: 19, company: 'Magma', technologies: []},
      {id: 20, company: 'Tornado', technologies: []}
    ];
    return {workrecords};
  }
}