# react-language-selector-lite

**react-language-selector-lite** is a lightweight and customizable React component for selecting languages, featuring ISO 639 macrolanguage support, and TypeScript compatibility. It offers search functionality, themes (light and dark), and flexible configurations. This package is built using styled-components for seamless integration into any React project. 🚀

---

## Features

- Select from a comprehensive list of over 184 languages.
- Search functionality to quickly find languages.
- Supports light and dark themes.
- Fully customizable labels and placeholders.
- Option to include detailed language information.
- Flexible sorting and filtering of languages.
- Licensed under MIT.

---

### About ISO 639 Macrolanguage

**ISO 639** is a set of international standards that lists short codes for language names. The ISO 639-1 and ISO 639-2 codes are primarily used, and these codes cover the majority of languages in the world. This package uses ISO 639 macrolanguages to ensure comprehensive and accurate representation of languages.

For more information about ISO 639 macrolanguage, visit the [Wikipedia page](https://en.wikipedia.org/wiki/ISO_639_macrolanguage).

---

## Installation

Install the package via npm or yarn:

```bash
npm install react-language-selector-lite
```

or

```bash
yarn add react-language-selector-lite
```

---

## Usage

### Basic Example

```jsx
import React from 'react';
import LanguageSelector from 'react-language-selector-lite';

const App = () => {
  const handleLanguageSelect = (language) => {
    console.log('Selected language:', language);
    // Will return the code of the selected language. e.g. 'es'

    // You can also access the language details by passing `includeDetails` prop as true. e.g.
    // {1: 'es', 2: 'spa', 3: 'spa', name: 'Spanish', local: 'Español', 2T: 'spa', 2B: 'spa'}
  };

  return (
    <div>
      <LanguageSelector onSelect={handleLanguageSelect} />
    </div>
  );
};

export default App;
```

### Preview in Action:

<div style="display: flex; align-items: center; gap: 10px;">
  <img src="https://raw.githubusercontent.com/JamiuShaibu/react-language-selector-lite/refs/heads/main/src/images/npm-install-react-language-selector-lite-Img.png" alt="Language Selector Example" width="300" />
  <img src="https://raw.githubusercontent.com/JamiuShaibu/react-language-selector-lite/refs/heads/main/src/images/npm-install-react-language-selector-lite.gif" alt="Language Selector Gif Example" width="300" />
</div>

### Using custom toggle button

You can use your own custom toggle button by passing `defaultToggleBtn` prop as `false` and rendering the select container with reference to your custom button. Here's an example: **Easy peasy!**

```jsx
import React, { useRef } from 'react';
import { RiTranslateAi2 } from "react-icons/ri";
import LanguageSelector from 'react-language-selector-lite';

const App = () => {
  const customButtonRef = useRef(null);

  const handleLanguageSelect = (language) => {
    console.log('Selected language:', language);
    // {1: 'de', 2: 'deu', 3: 'deu', name: 'German', local: 'Deutsch', 2T: 'deu', 2B: 'ger'}
  };

  return (
    <div className="relative w-full">
      <button ref={customButtonRef}>
        <RiTranslateAi2 className="size-6" />
      </button>
      <LanguageSelector
        onSelect={(value) => handleLanguageSelect(value)}
        theme="dark"
        includeDetails={true}
        defaultToggleBtn={false}
        buttonRef={customButtonRef}
      />
    </div>
  );
};

export default App;
```

<img src="https://raw.githubusercontent.com/JamiuShaibu/react-language-selector-lite/refs/heads/main/src/images/npm-install-react-language-selector-lite-darkImg.png" alt="language selector dark theme" width="300" />

### Limiting Language Options

You can limit the available options by passing an array of language codes to the `options` prop:

```jsx
<LanguageSelector
  onSelect={handleLanguageSelect}
  options={['en', 'es', 'fr']}
/>
```

### NPM official package

Visit the [NPM official package page](https://www.npmjs.com/package/react-language-selector-lite?activeTab=readme) for more information.

### Props

| Prop Name       | Type                           | Default Value        | Description                                                 |
|-----------------|--------------------------------|----------------------|-------------------------------------------------------------|
| `onSelect`      | `(language: any) => void`      | **Required**         | Callback function triggered when a language is selected.    |
| `includeDetails`| `boolean`                      | `false`              | Whether to include detailed language info in `onSelect`.    |
| `geoCoverage`   | `string`: `"local"`/ `"international"`/ `"both"`       | `"both"`             | Display local names or international names of languages.    |
| `reverseNames`    | `boolean`                      | `false`              | Reverse the order of the language names when `geoCoverage` is set to `both`.                     |
| `enableSearch`  | `boolean`                      | `true`               | Enable search functionality.                                |
| `options`       | `string[]`                     | `[]`                 | Array of language codes to limit available options.         |
| `sortOptions`   | `boolean`                      | `true`               | Whether to sort the list of languages alphabetically.       |
| `buttonLabel`   | `string`                       | `"Select language"`  | Label for the toggle button.                                |
| `placeholder`   | `string`                       | `"Search language..."` | Placeholder text for the search input.                      |
| `notFoundLabel`   | `string`                       | `"Language not found"` | Label for the not found message. When set to an empty string `""` the message will not show up.                              |
| `className`     | `string`                       | `""`                 | Additional class names for custom styling.                  |
| `defaultToggleBtn`         | `boolean`             | `true`            | When set to `false`, the default toggle button will be hidden and the user can provide their own custom toggle button.                                    |
| `buttonRef`     | `React.RefObject< HTMLButtonElement>` | `null`            | A reference to a custom button that toggles the visibility of the language selector container.                                    |
| `display`       | `string`:  `"onClick"` / `"onHover"` | `"onClick"` | Display the language selector on **click** or **hover** of the custom toggle button. |
| `theme`         | `"light" / "dark"`             | `"light"`            | Theme of the component.                                     |

---

### Styling

The component uses styled-components for styling, so there's no need to import an additional CSS file. You can add custom styling by passing a `className` prop to the component.

---

### Dark Theme

To use the dark theme, simply set the `theme` prop to `"dark"`:

```jsx
<LanguageSelector onSelect={handleLanguageSelect} theme="dark" />
```

---

## License

This project is licensed under the [MIT License](LICENSE) by [Jamiu Shaibu](https://github.com/JamiuShaibu)

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

### Steps to Contribute

1. Fork the repository: [GitHub repository](https://github.com/JamiuShaibu/react-language-selector-lite)
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Open a pull request.

---

## Support

If you encounter any issues or have suggestions, feel free to open an issue on GitHub or contact us directly.

---

### Acknowledgments

- [langs](https://www.npmjs.com/package/langs): Used for fetching language details.

---

### Thank You

Thank you for using **react-language-selector-lite**! Your support is greatly appreciated.

---

### Buy Me a Coffee

If you found this package useful, please consider buying me a coffee.

<a href="https://www.buymeacoffee.com/jamiushaib5" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

---

### Author

- **<NAME>** - [Jamiu Shaibu](https://github.com/JamiuShaibu)
