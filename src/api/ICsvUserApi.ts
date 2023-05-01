import CsvMetadata from "../model/csvMetadata";
import User from "../model/user";

export interface ICsvUserApi {
  UploadCsv(csvContent: string, csvFileName: string): Promise<CsvMetadata>;
  GetMetadata(): Promise<CsvMetadata[]>;
  GetCsvUsers(id: string): Promise<User[]>;
}
