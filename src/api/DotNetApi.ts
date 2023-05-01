import { CsvMetadata } from "../model/CsvMetadata";
import { CsvUsers } from "../model/CsvUsers";
import { User } from "../model/User";

const ASPNET_DOMAIN = "https://localhost:7038/api/users";

export async function getAllCsvs() {
  const response = await fetch(`${ASPNET_DOMAIN}/metadata`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch all Csv files.");
  }

  const metadata = data as CsvMetadata[];

  return metadata;
}

export async function getCsvUsers(csvId: string) {
  const response = await fetch(`${ASPNET_DOMAIN}/${csvId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Csv file.");
  }

  const metadata = data.metadata as CsvMetadata;
  const users = data.users as User[];

  return new CsvUsers(metadata, users);
}

export async function saveCsv(filename: string, csvContent: string) {
  const response = await fetch(`${ASPNET_DOMAIN}/upload`, {
    method: "POST",
    body: JSON.stringify({ filename: filename, content: csvContent }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not upload Csv file.");
  }

  const metadata = new CsvMetadata(data.id, data.filename, data.timestamp);

  return metadata;
}
