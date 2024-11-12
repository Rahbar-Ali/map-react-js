const ErrorMessage = (props) => {
  return <>{props.items.length === 0 && <h3>Items not found</h3>}</>;
};

export default ErrorMessage;
