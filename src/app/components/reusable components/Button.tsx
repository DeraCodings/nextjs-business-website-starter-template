import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  disabled?: false;
  url: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  disabled = false,
  url,
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    outline:
      "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <div>
      <Link href={url} className={combinedStyles} aria-disabled={disabled}>
        {children}
      </Link>
    </div>
  );
};

export default Button;
