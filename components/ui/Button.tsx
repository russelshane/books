interface IButton {
  children?: React.ReactNode;
  variant?: "default" | "underline";
  onClick?: () => any;
  onSubmit?: () => any;
}

export function Button({ variant, children }: IButton) {
  return (
    <>
      {!variant && (
        <button className="bg-backdrop cursor-pointer rounded-sm px-10 py-2 border-smoke border-2 text-gray font-semibold text-sm hover:opacity-60">
          {children}
        </button>
      )}
      {variant === "underline" && (
        <button className="bg-none cursor-pointer  border-gray border-b-2 text-gray font-semibold text-sm hover:opacity-60">
          {children}
        </button>
      )}
    </>
  );
}
