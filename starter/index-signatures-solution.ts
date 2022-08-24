// DICTIONARY
const phones = [
  {
    home: { country: '+1', area: '211', number: '652-4515' },
    work: { country: '+1', area: '670', number: '752-5856' },
    fax: { country: '+1', area: '322', number: '525-4357' },
  },
];

// INDEX-SIGNATURE (TS)
type phonesType = {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
};

export const readPhones = (phones: phonesType[]) => {
  return phones.map((phone) => {
    phone.number;
  });
};
