import style from './Label.module.css';
import { LabelProps } from './Label.types';

const Label = ({ text }: LabelProps) => {
  if (!text) return;
  const content = text.toLocaleLowerCase().trim();
  return <div className={style.label}>{content}</div>;
};

export default Label;
