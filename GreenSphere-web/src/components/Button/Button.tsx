import style from './Button.module.css';
import { ButtonProps } from './Button.types';

const Button = ({ text }: ButtonProps) => {
  return (
    <button type="submit" className={style.button}>
      {text}
    </button>
  );
};

export default Button;
