import { Injectable } from '@nestjs/common';

import { Database } from 'arangojs';
import { GeneratedAqlQuery } from 'arangojs/aql';
import { CollectionInsertOptions, DocumentCollection, EdgeCollection } from 'arangojs/collection';
import { ArrayCursor } from 'arangojs/cursor';
import { QueryOptions } from 'arangojs/database';
import { DocumentData, DocumentMetadata, DocumentSelector, Patch, Document } from 'arangojs/documents';

import { IArangoDBBaseRepository } from '../base-repository.interface';

@Injectable()
export abstract class ArangoDBBaseRepository<T extends object> implements IArangoDBBaseRepository<T> {
  constructor(readonly db: Database) { }

  abstract collection: DocumentCollection<T> & EdgeCollection<T>;

  async update(selector: DocumentSelector, newData: Patch<DocumentData<T>>): Promise<DocumentMetadata & { new?: Document<T>; old?: Document<T>; }> {
    return await this.collection.update(selector, newData, {
      returnNew: true,
    });
  }

  async insert(data: DocumentData<T>, options?: CollectionInsertOptions): Promise<DocumentMetadata & {
    new?: Document<T>;
  }> {
    return await this.collection.save(data, Object.assign(options || {}, { returnNew: true }));
  }

  async query<T>(query: GeneratedAqlQuery, options?: QueryOptions): Promise<ArrayCursor<T>> {
    return this.db.query(query, options);
  }
}
