import { cn } from "@/lib/utils";

interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

function Kbd({ className, children, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center rounded bg-muted px-1 text-xs font-medium text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}

export { Kbd };
