const mockResidentialAddress = {
  line1: '1234 Mock Residential Address',
  line2: '',
  city: 'Mockton',
  state: 'North Mockarolina',
  zipCode: '00000',
  county: 'Mock County',
};
const mockMailingAddress = {
  line1: '1234 Mock Mailing Address',
  line2: '',
  city: 'Mocktown',
  state: 'New Mockingham',
  zipCode: '00000',
  county: 'Mocksville County',
};
const mockPlan = {
  __typename: 'Plan',
  planId: 'mock-plan-id',
  beginDate: new Date(),
  endDate: new Date(),
  isCurrent: true,
};
const mockPerson = {
  __typename: 'Member',
  personId: 'mock-person-id',
  firstName: 'MockFirstName',
  middleName: 'MockMiddleName',
  lastName: 'MockLastName',
  emailAddress: 'mock@emailaddress.com',
  phoneNumber: '15555555555',
  residentialAddress: mockResidentialAddress,
  mailingAddress: mockMailingAddress,
  ssn: '000000000',
  dateOfBirth: new Date(638514000000),
  sex: 'male',
  race: 'East Asian/Pacific Islander',
  ethnicity: 'Asian',
  activePlan: mockPlan,
};

export default mockPerson;
