import React from 'react';
import PropTypes from 'prop-types';

function DynamicForm({ onSubmit, name, styles, children }) {
  return (
    <form name={name} style={styles} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

DynamicForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // Функция отправки обязательна
  name: PropTypes.string, // Имя формы опционально
  styles: PropTypes.object, // Объект стилей опционален
  children: PropTypes.node.isRequired, // Дочерние элементы обязательны
};

export default DynamicForm;
