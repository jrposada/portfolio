function Select({ name, children, ...restProps }) {
  return (
    <select name={name} {...restProps}>
      {children}
    </select>
  );
}
Select.Option = function ({ value, children, ...restProps }) {
  return (
    <option value={value} {...restProps}>
      {children}
    </option>
  );
};
export default Select;
