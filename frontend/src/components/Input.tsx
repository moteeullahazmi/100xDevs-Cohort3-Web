interface InputProps {
  placeholder: string;
  ref?: any;
}

const Input = ({ placeholder, ref }: InputProps) => {
  return (
    <div>
      <input
        ref={ref}
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2 border rounded"
      />
    </div>
  );
};

export default Input;
