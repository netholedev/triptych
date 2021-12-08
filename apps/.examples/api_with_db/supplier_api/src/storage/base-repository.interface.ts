import { ArrayCursor } from 'arangojs/cursor';
import { QueryOptions } from 'arangojs/database';
import { GeneratedAqlQuery } from 'arangojs/aql';
import { DocumentData, DocumentMetadata, DocumentSelector, Patch, Document } from 'arangojs/documents';
import { CollectionInsertOptions } from 'arangojs/collection';

export interface IArangoDBBaseRepository<T> {
  update(selector: DocumentSelector, newData: Patch<DocumentData<T>>): Promise<DocumentMetadata & { new?: Document<T>; old?: Document<T>; }>
  insert(data: DocumentData<T>, options?: CollectionInsertOptions): Promise<DocumentMetadata & {
    new?: Document<T>;
  }>
  query<T>(query: GeneratedAqlQuery, options?: QueryOptions): Promise<ArrayCursor<T>>
}