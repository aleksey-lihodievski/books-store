import React, { useCallback } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';

import Input from 'components/Input';
import FormInformationBlock from 'containers/FormInformationBlock';
import { initialOrder } from 'constants/orders';
import { orderSchema } from 'validations/order';
import { IOrder } from 'typings/order';
import { Columns } from '../Columns';

interface IOrderFormProps {
  submitRef: React.RefObject<HTMLButtonElement>;
  handleSubmit: (values: IOrder) => void;
}

const OrderForm: React.FC<IOrderFormProps> = ({ handleSubmit, submitRef }) => {
  const onSubmit = useCallback(
    (
      values: IOrder,
      { setSubmitting, setErrors, resetForm }: FormikHelpers<IOrder>,
    ) => {
      handleSubmit(values);
      setSubmitting(false);
      setErrors({});
      resetForm();
    },
    [handleSubmit],
  );

  return (
    <Formik
      validationSchema={orderSchema}
      initialValues={initialOrder}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Columns quantity={3}>
            <FormInformationBlock title='Personal information'>
              <Input
                type='text'
                name='firstName'
                label='First Name'
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName && errors.firstName}
                required
              />
              <Input
                type='text'
                name='lastName'
                label='Last Name'
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName && errors.lastName}
                required
              />
              <Input
                type='text'
                name='phone'
                label='Phone number'
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && errors.phone}
                required
              />
              <Input
                type='text'
                name='email'
                label='Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
                required
              />
            </FormInformationBlock>

            <FormInformationBlock title='Shipping'>
              <Input
                type='text'
                name='country'
                label='Country'
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.country && errors.country}
                required
              />
              <Input
                type='text'
                name='city'
                label='City'
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.city && errors.city}
                required
              />
              <Input
                type='text'
                name='street'
                label='Street'
                value={values.street}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.street && errors.street}
                required
              />
              <Input
                type='text'
                name='apartment'
                label='Apartment'
                value={values.apartment}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.apartment && errors.apartment}
                required
              />
              <Input
                type='number'
                name='postCode'
                label='Post code'
                value={values.postCode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.postCode && errors.postCode}
                required
              />
            </FormInformationBlock>

            <FormInformationBlock title='Payment details'>
              <Input
                type='number'
                name='cardNumber'
                label='Card number'
                value={values.cardNumber}
                placeholder='0000 0000 0000 0000'
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.cardNumber && errors.cardNumber}
                required
              />
              <Input
                type='text'
                name='cardHolder'
                label='Card holder'
                value={values.cardHolder}
                placeholder='John Doe'
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.cardHolder && errors.cardHolder}
                required
              />
              <Input
                type='text'
                name='expiryDate'
                label='Expiry date'
                value={values.expiryDate}
                placeholder='MM/YY'
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.expiryDate && errors.expiryDate}
                required
              />
              <Input
                type='number'
                name='cvcCode'
                label='CVC code'
                value={values.cvcCode}
                placeholder='123'
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.cvcCode && errors.cvcCode}
                required
              />
            </FormInformationBlock>
          </Columns>
          <button ref={submitRef} type='submit' hidden>
            submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;

//  (
//   data?: Partial<FormikState<IOrder>> | undefined,
// ): => FormEvent<HTMLFormElement>,
