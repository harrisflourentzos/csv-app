export class CsvMetadata {
  id: string;
  filename: string;
  timestamp: Date;

  constructor(id: string, filename: string, timestamp: Date) {
    this.id = id;
    this.filename = filename;
    this.timestamp = timestamp;
  }
}
