// DICTIONARY
const phones = [
  {
    home: { country: '+1', area: '211', number: '652-4515' },
    work: { country: '+1', area: '670', number: '752-5856' },
    fax: { country: '+1', area: '322', number: '525-4357' },
  },
];

export const readPhones = (phones) => {
  return phones.map((phone) => {
    phone.number;
  });
};
