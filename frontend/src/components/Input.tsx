const Input = ({ onChange, placeholder }: { Onchange: () => void }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2 border rounded"
        onChange={onchange}
      />
    </div>
  );
};

export default Input;
