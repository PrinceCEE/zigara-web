const Button = ({ text, type, onClick }) => {
  return (
    <button
      type={type}
      className="bg-primary text-center px-2 py-2 mt-7 text-white w-full rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
