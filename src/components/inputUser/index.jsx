import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Input = forwardRef(({
  type = 'text',
  id,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  required = false,
  className,
  error,
  ...rest
}, ref) => {
  return (
    <div className={`${styles.inputContainer} ${className || ''}`}>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur} // обработчик потери фокуса
        onFocus={onFocus} // обработчик фокуса
        disabled={disabled} // доступность инпута
        required={required} // обязательность поля
        className={`${styles.input} ${error ? styles.error : ''}`} 
        ref={ref} // используем ref для корректной работы с React Hook Form
        {...rest}
      />
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
});

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.object,
};

export default Input;
