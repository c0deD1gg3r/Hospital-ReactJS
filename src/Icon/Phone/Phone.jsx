import './Phone.css';
import { FaPhoneFlip } from "react-icons/fa6";

const Phone = () => {
  return (
    <>
      {/* 
        Сделать при isActive=true значка телефона
        высвечивается телефон и подпись 'мы работаем круглосуточно'
      */}

      <FaPhoneFlip
        className='phone'
      />
    </>
  );
};

export default Phone;