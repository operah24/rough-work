function Button(props) {
  return (
    <button
      className={props.className}
      onClick={props.onclick}
      type={props.type}
    >
      {props.name}
    </button>
  );
}

export default Button;
