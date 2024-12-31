import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface NavigateProps {
  path: string;
}
export const Navigate = ({ path }: NavigateProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(path);
  }, [navigate, path]);

  return null;
};
