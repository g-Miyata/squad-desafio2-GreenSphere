import { FaSpinner } from 'react-icons/fa';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.container}>
      <FaSpinner className={style.loader} />
    </div>
  );
};

export default Loader;
