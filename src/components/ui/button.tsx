import classNames from "classnames";

export const Button = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={classNames(className)} {...rest}>
      {children}
    </button>
  );
};
