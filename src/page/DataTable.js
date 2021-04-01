import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../components/FormikControl';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import Table from '../components/Table';

const DataTable = () => {
  const [formValue, setFormValue] = useState(null);

  const radioOptions = [
    { key: 'spasi', value: 'spasi' },
    { key: 'koma', value: 'koma' },
    { key: 'koma spasi', value: 'koma-spasi' },
  ];

  const initialValues = {
    data: '',
    radioOption: '',
  };

  const validationSchema = Yup.object({
    data: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    setFormValue(values);
  };

  return (
    <div className="w-10/12 ml-auto my-8">
      <h1 className="font-semibold text-4xl text-primary-blue mb-8">
        Data to Table
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="textarea"
              name="data"
              label="Masukkan Data Angka:"
              rows="5"
              className="block w-10/12 border-primary-blue border-2 rounded-md p-2"
            />
            <FormikControl
              control="radio"
              name="radioOption"
              label="Pilih Separator:"
              options={radioOptions}
              mt={4}
            />
            <Button type="submit" base blue mt={4}>
              Solve
            </Button>
          </Form>
        )}
      </Formik>
      {formValue && (
        <>
          <h2 className="mt-10 font-medium text-lg mb-4">Answer:</h2>
          <Accordion title="Mean" data={formValue} />
          <Accordion title="Modus" data={formValue} />
          <Accordion title="Median" data={formValue} />
          <Table data={formValue} />
        </>
      )}
    </div>
  );
};

export default DataTable;
