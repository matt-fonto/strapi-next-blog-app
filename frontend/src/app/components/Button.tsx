type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button type="submit" className="btn-primary">
      {children}
    </button>
  );
};

export default Button;
