// Using inline loader for simplicity to avoid ejecting create-react-app.
// Ideally, This should be configured this as part of css loader in webpack:
// {
//   test: /\.css$/,
//   loader: ['raw-loader', 'css-loader']
// }
import style from '!raw-loader!./button.css';
import { FC, useCallback } from 'react';

export interface ButtonProps {
  color?: 'blue' | 'green' | 'yellow';
}

const colorMap = {
  blue: '#1890ff',
  green: '#2cbb5d',
  yellow: '#ffc01e',
};

const Button: FC<ButtonProps> = ({ color = 'blue' }) => {
  const onClick = useCallback(() => {
    alert('You have clicked on the React button.');
  }, []);

  return (
    <>
      <button style={{ backgroundColor: colorMap[color] ?? color }} onClick={onClick}>
        React Button in {color}
      </button>
      <style>{style}</style>
    </>
  );
};

export default Button;
