import { Inject, Injectable } from '@nestjs/common';
import { aql, Database } from 'arangojs';
import { DocumentCollection, EdgeCollection } from 'arangojs/collection';
import { readFileSync } from 'fs';

import { IUser } from '../../interfaces';
import { ArangoDBBaseRepository, IArangoDBBaseRepository } from '../../storage';

@Injectable()
export class UsersRepository extends ArangoDBBaseRepository<IUser> implements IArangoDBBaseRepository<IUser> {
  private _collectionName: string = "users";

  collection: DocumentCollection<IUser> & EdgeCollection<IUser>;

  constructor(@Inject('ARANGODB_CONNECTION') readonly db: Database) {
    super(db);
  }

  async uniqueEmailIndex() {
    return this.collection.ensureIndex({
      type: "persistent",
      fields: ["email"],
      name: "unique-email",
      unique: true
    });
  }

  async onModuleInit() {
    const col = this.db.collection(this._collectionName);

    const colExists = await col.exists();

    if (!colExists) {
      await this.db.createCollection(this._collectionName)
    }

    this.collection = col

    await this.uniqueEmailIndex();

    /*
    const file = readFileSync('/workspace/.data/geonames/out/TR.json', 'utf-8')
    const parsed = JSON.parse(file)

    for (const doc of parsed) {
      await this.db.query(aql`
        INSERT {
          ${snakeCase("geonameId")}: ${doc.Id},
          ${snakeCase("Name")}: ${doc.Name},
          ${snakeCase("AsciiName")}: ${doc.AsciiName},
          ${snakeCase("AlternateNames")}: ${doc.AlternateNames},
          ${snakeCase("coordinates")}: [ ${doc.Longitude}, ${doc.Latitude} ],
          ${snakeCase("FeatureClass")}: ${doc.FeatureClass},
          ${snakeCase("FeatureCode")}: ${doc.FeatureCode},
          ${snakeCase("CountryCode")}: ${doc.CountryCode},
          ${snakeCase("cc2")}: ${doc.AlternateCountryCodes},
          ${snakeCase("Admin1")}: ${doc.Admin1Code},
          ${snakeCase("Admin2")}: ${doc.Admin2Code},
          ${snakeCase("Admin3")}: ${doc.Admin3Code},
          ${snakeCase("Admin4")}: ${doc.Admin4Code},
          ${snakeCase("Population")}: ${doc.Population},
          ${snakeCase("Elevation")}: ${doc.Elevation},
          ${snakeCase("dem")}: ${doc.DigitalElevationModel},
          ${snakeCase("Timezone")}: ${doc.Timezone},
          ${snakeCase("ModificationDate")}: ${doc.ModificationDate},
        } INTO geonames
      `)
    }
    */
  }
}
