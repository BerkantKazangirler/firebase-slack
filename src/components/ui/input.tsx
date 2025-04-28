import cn from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, ...rest }: InputProps) => {
  return <input className={cn(className)} {...rest} />;
};
