import { CsvMetadata } from "./CsvMetadata";
import { User } from "./User";

export class CsvUsers {
  metadata: CsvMetadata;
  users: User[];

  constructor(metadata: CsvMetadata, users: User[]) {
    this.metadata = metadata;
    this.users = users;
  }
}
