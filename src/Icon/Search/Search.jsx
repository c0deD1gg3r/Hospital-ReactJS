import React, { useState } from 'react';
import './Search.css';
import { IoSearch } from "react-icons/io5";

const Search = () => {
  // Состояние для управления видимостью input
  const [isInputVisible, setIsInputVisible] = useState(false);

  // Функция обработки клика по иконке
  const handleIconClick = () => {
    setIsInputVisible(!isInputVisible); // переключаем состояние видимости input
  };

  return (
    <>
      <IoSearch
        className='Search'
        onClick={handleIconClick} // обработчик клика
      />
      {isInputVisible && ( // условное отображение input
        <input
          type="text"
          placeholder="Что ищете"
          className='search-input' // добавляем класс для стилизации (по желанию)
        />
      )}
    </>
  );
};

export default Search;