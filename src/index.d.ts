// src/index.d.ts

declare module 'react-language-selector-lite' {
  import * as React from 'react';

  export interface LanguageSelectorProps {
    onSelect: (language: any) => void;
    includeDetails?: boolean;
    enableSearch?: boolean;
    options?: string[];
    sortOptions?: boolean;
    geoCoverage?: "local" | "international" | "both";
    reverseNames?: boolean;
    buttonLabel?: string;
    notFoundLabel?: string;
    placeholder?: string;
    className?: string;
    theme?: 'light' | 'dark';
    defaultToggleBtn?: boolean;
    buttonRef?: React.RefObject<HTMLButtonElement>;
    render?: "onClick" | "onHover";
  }

  const LanguageSelector: React.FC<LanguageSelectorProps>;
  export default LanguageSelector;
}
