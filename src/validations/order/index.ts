import * as yup from 'yup';

export const orderSchema = yup
  .object()
  .shape({
    firstName: yup.string().trim().required('First Name is required'),
    lastName: yup.string().trim().required('Last Name is required'),
    phone: yup.string().trim().required('Number is required'),
    email: yup.string().required('Email is required'),
    country: yup.string().trim().required('Country is required'),
    city: yup.string().trim().required('City is required'),
    street: yup.string().trim().required('Street is required'),
    apartment: yup.string().trim().required('Apartment is required'),
    postCode: yup.number().required('Post code is required'),
    cardNumber: yup.number().required("Card's number is required"),
    cardHolder: yup.string().required("Holder's name is required"),
    expiryDate: yup.string().required('Expiry date is required'),
    cvcCode: yup
      .number()
      .min(100, 'Wrong CVC')
      .max(999, 'Wrong CVC')
      .required('CVC is required'),
  })
  .required();
