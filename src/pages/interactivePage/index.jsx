import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/inputUser/index';
import DynamicForm from '../../components/dynamicForm/index';
import UserButton from '../../components/buttonUser/index';

const fieldMessages = {
  firstField: {
    placeholder: 'Enter the first field',
    errors: {
      required: 'firstField field is required',
      minLength: { value: 5, message: 'Minimum length is 5' },
    },
  },
  secondField: {
    placeholder: 'Enter the second field',
    errors: {
      required: 'This field is required',
    },
  },
};
const stylesSpan = {
  fontSize: '20px',
  fontWeight: '700',
};
const stylesForm = {
  margin: '2% 20%',
  paddingTop: '10px',
  borderTop: '1px solid black',
  maxWidth: 'max-content',
  display: 'flex',
  flexDirection: ' column',
  justifyContent: 'space-between',
  gap: '10px',
};
function InteractivePage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showSecondInput, setShowSecondInput] = useState(false);

  // cмотрим за значением первого инпута
  const firstFieldValue = watch('firstField', '');

  useEffect(() => {
    if (firstFieldValue.length >= 5) {
      setShowSecondInput(true);
    } else {
      setShowSecondInput(false);
    }
  }, [firstFieldValue]);

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <DynamicForm onSubmit={handleSubmit(onSubmit)} styles={stylesForm}>
      <span style={stylesSpan}>First Field</span>
      <Input
        type="text"
        placeholder={fieldMessages.firstField.placeholder}
        {...register('firstField', fieldMessages.firstField.errors)}
        error={errors.firstField} // передаем ошибку из useForm
      />

      {showSecondInput && (
        <>
          <span style={stylesSpan}>Second Field</span>
          <Input
            type="text"
            placeholder={fieldMessages.secondField.placeholder}
            {...register('secondField', fieldMessages.secondField.errors)}
            error={errors.secondField}
          />
        </>
      )}

      <UserButton
        color={'rgb(226, 242, 255)'}
        padding={'10px 50px'}
        fontsize={'20px'}
        backgroundColor={'rgb(0, 123, 255)'}
        title={'Submit'}
      />
    </DynamicForm>
  );
}

export default InteractivePage;
