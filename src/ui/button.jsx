import { useTheme } from './theme-provider';

function Button({ ...restProps }) {
  const theme = useTheme();
  return <button {...restProps}>{theme.backgroundColor}</button>;
}

export default Button;
