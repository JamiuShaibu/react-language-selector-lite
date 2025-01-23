# react-language-selector-lite

**react-language-selector-lite** is a lightweight and customizable React component for selecting languages with support for search, themes (light and dark), and flexible configurations. This package is built using styled-components for seamless integration into any React project🚀.

---

## Features

- Select from a comprehensive list of languages.
- Search functionality to quickly find languages.
- Supports light and dark themes.
- Fully customizable labels and placeholders.
- Option to include detailed language information.
- Flexible sorting and filtering of languages.
- Licensed under MIT.

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
  };

  return (
    <div>
      <LanguageSelector onSelect={handleLanguageSelect} theme="dark" />
    </div>
  );
};

export default App;
```

## Preview in Action:

<div style="display: flex; align-items: center; gap: 10px;">
  <img src="https://raw.githubusercontent.com/JamiuShaibu/react-language-selector-lite/refs/heads/main/src/images/npm-install-react-language-selector-lite-Img.png" alt="PNG Example" width="300" />
  <img src="https://raw.githubusercontent.com/JamiuShaibu/react-language-selector-lite/refs/heads/main/src/images/npm-install-react-language-selector-lite.gif" alt="GIF Example" width="300" />
</div>

### Props

| Prop Name       | Type                           | Default Value        | Description                                                 |
|-----------------|--------------------------------|----------------------|-------------------------------------------------------------|
| `onSelect`      | `(language: any) => void`      | **Required**         | Callback function triggered when a language is selected.    |
| `includeDetails`| `boolean`                      | `false`              | Whether to include detailed language info in `onSelect`.    |
| `geoCoverage`   | `string`: `"local"`/ `"international"`/ `"both"`       | `"both"`             | Display local names or international names of languages.    |
| `enableSearch`  | `boolean`                      | `true`               | Enable search functionality.                                |
| `options`       | `string[]`                     | `[]`                 | Array of language codes to limit available options.         |
| `sortOptions`   | `boolean`                      | `true`               | Whether to sort the list of languages alphabetically.       |
| `buttonLabel`   | `string`                       | `"Select language"`  | Label for the toggle button.                                |
| `placeholder`   | `string`                       | `"Search language..."` | Placeholder text for the search input.                      |
| `className`     | `string`                       | `""`                 | Additional class names for custom styling.                  |
| `useDefaultToggleButton`         | `boolean`             | `true`            | When set to `false`, the default toggle button will be hidden, and the select container will always be visible, allowing users to provide their own custom toggle button                                   |
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

This project is licensed under the [MIT License](LICENSE).

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

## Acknowledgments

- [langs](https://www.npmjs.com/package/langs): Used for fetching language details.

---

## Thank You

Thank you for using **react-language-selector-lite**! Your support is greatly appreciated.

---

## Buy Me a Coffee

If you found this package useful, please consider buying me a coffee.

<a href="https://www.buymeacoffee.com/jamiushaib5" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

---

### Author

- **<NAME>** - [Jamiu Shaibu](https://github.com/JamiuShaibu)
