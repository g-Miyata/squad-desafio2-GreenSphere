import Button from '../../components/Button/Button';
import Titles from '../../components/Titles/Titles';

import style from './NotFoud.module.css';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <Titles titleText="404 -" highlightText="PAGE NOT FOUND" text={`Oops! It seems you've wandered off the path.\nThe page you're looking for might have been moved, deleted, or never existed.`} />
          <Link to={'/'}>
            <Button text="Homepage" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
