import CsvMetadata from "../model/csvMetadata";
import User from "../model/user";
import { ICsvUserApi } from "./ICsvUserApi";

export class DummyApi implements ICsvUserApi {
  UploadCsv(csvContent: string, csvFileName: string): Promise<CsvMetadata> {
    const metadata = new CsvMetadata("1234", "TestFile.csv");
    return new Promise<CsvMetadata>((resolve) => resolve(metadata));
  }

  GetMetadata(): Promise<CsvMetadata[]> {
    const allMetadata = [
      new CsvMetadata("1234", "TestFile1.csv"),
      new CsvMetadata("12345", "TestFile2.csv"),
    ];

    return new Promise<CsvMetadata[]>((resolve) => resolve(allMetadata));
  }
  GetCsvUsers(id: string): Promise<User[]> {
    const users = [
      new User(
        "firstName",
        "lastName",
        "jobTitle",
        "emailaddress1",
        "department",
        "contactType",
        "companyName",
        "businessPhone",
        "addressStreet1",
        "addressStreet2",
        "addressCity",
        "addressPostalcode",
        "addressCountry"
      ),
      new User(
        "firstName2",
        "lastName2",
        "jobTitle2",
        "emailaddress12",
        "department2",
        "contactType2",
        "companyName2",
        "businessPhone2",
        "addressStreet12",
        "addressStreet22",
        "addressCity2",
        "addressPostalcode2",
        "addressCountry2"
      ),
    ];
    return new Promise<User[]>((resolve) => resolve(users));
  }
}
