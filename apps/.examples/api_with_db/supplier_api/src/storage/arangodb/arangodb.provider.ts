import { Database } from 'arangojs';

export const arangoDBProviders = [
  {
    provide: 'ARANGODB_CONNECTION',
    useFactory: () => {
      const db = new Database('http://root:example@localhost:8529');
      return db.database('triptych');
    },
  },
];
