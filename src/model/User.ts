class User {
  firstName: string;
  lastName: string;
  jobTitle: string;
  emailaddress1: string;
  department: string;
  contactType: string;
  companyName: string;
  businessPhone: string;
  addressStreet1: string;
  addressStreet2: string;
  addressCity: string;
  addressPostalcode: string;
  addressCountry: string;

  constructor(
    firstName: string,
    lastName: string,
    jobTitle: string,
    emailaddress1: string,
    department: string,
    contactType: string,
    companyName: string,
    businessPhone: string,
    addressStreet1: string,
    addressStreet2: string,
    addressCity: string,
    addressPostalcode: string,
    addressCountry: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.emailaddress1 = emailaddress1;
    this.department = department;
    this.contactType = contactType;
    this.companyName = companyName;
    this.businessPhone = businessPhone;
    this.addressStreet1 = addressStreet1;
    this.addressStreet2 = addressStreet2;
    this.addressCity = addressCity;
    this.addressPostalcode = addressPostalcode;
    this.addressCountry = addressCountry;
  }
}

export default User;
