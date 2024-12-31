import style from './Label.module.css';
import { LabelProps } from './Label.types';

const Label = ({ text }: LabelProps) => {
  return <div className={style.label}>{text}</div>;
};

export default Label;
