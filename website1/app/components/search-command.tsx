import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/app/components/ui/command";
import { useState, useEffect } from "react";
import {
  FileIcon,
  BookIcon,
  ImageIcon,
  PaletteIcon,
  NewspaperIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchCommand({ open, onOpenChange }: SearchCommandProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const runCommand = (path: string) => {
    onOpenChange(false);
    router.push(path);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <Command className="rounded-lg border shadow-md">
        <CommandInput
          placeholder="Type a command or search..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => runCommand("/docs")}>
              <BookIcon className="mr-2 h-4 w-4" />
              <span>Docs</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand("/examples")}>
              <FileIcon className="mr-2 h-4 w-4" />
              <span>Examples</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand("/icons")}>
              <ImageIcon className="mr-2 h-4 w-4" />
              <span>Icons</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand("/themes")}>
              <PaletteIcon className="mr-2 h-4 w-4" />
              <span>Themes</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand("/blog")}>
              <NewspaperIcon className="mr-2 h-4 w-4" />
              <span>Blog</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Documentation">
            <CommandItem onSelect={() => runCommand("/docs/getting-started")}>
              <span>Getting Started</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand("/docs/components")}>
              <span>Components</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand("/docs/api-reference")}>
              <span>API Reference</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
