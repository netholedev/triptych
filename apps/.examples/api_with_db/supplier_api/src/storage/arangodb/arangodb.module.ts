import { Module } from '@nestjs/common';
import { arangoDBProviders } from './arangodb.provider';

@Module({
  providers: [...arangoDBProviders],
  exports: [...arangoDBProviders],
})
export class ArangoDBModule { }
