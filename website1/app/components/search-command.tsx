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
import { useLocation } from "wouter";

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchCommand({ open, onOpenChange }: SearchCommandProps) {
  const [query, setQuery] = useState("");
  const [, navigate] = useLocation();

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const runCommand = (command: () => void) => {
    onOpenChange(false);
    command();
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
            <CommandItem onSelect={() => runCommand(() => navigate("/docs"))}>
              <BookIcon className="mr-2 h-4 w-4" />
              <span>Docs</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => navigate("/examples"))}
            >
              <FileIcon className="mr-2 h-4 w-4" />
              <span>Examples</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/icons"))}>
              <ImageIcon className="mr-2 h-4 w-4" />
              <span>Icons</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/themes"))}>
              <PaletteIcon className="mr-2 h-4 w-4" />
              <span>Themes</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/blog"))}>
              <NewspaperIcon className="mr-2 h-4 w-4" />
              <span>Blog</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Documentation">
            <CommandItem
              onSelect={() =>
                runCommand(() => navigate("/docs/getting-started"))
              }
            >
              <span>Getting Started</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => navigate("/docs/components"))}
            >
              <span>Components</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => navigate("/docs/api-reference"))}
            >
              <span>API Reference</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
