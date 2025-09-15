# react-language-selector-lite

**react-language-selector-lite** is a lightweight and customizable React component for selecting languages, featuring ISO 639 macrolanguage support, and TypeScript compatibility. It offers search functionality, themes (light and dark), and flexible configurations. This package is built using styled-components for seamless integration into any React project. 🚀

---

## ✨ Features

- 🗂️ Select from a comprehensive list of over 184 languages
- 🔍 Search functionality to quickly find languages
- 🌗 Supports light and dark themes
- 🎨 Fully customizable labels and placeholders
- 🌍 Supports ISO 639 macrolanguages
- 📋 Option to include detailed language information
- 🔄 Flexible sorting and filtering of languages
- 📦 Lightweight and easy to integrate
- 📱 Responsive design
- 🎯 TypeScript support
- 📜 Licensed under MIT

---

### About ISO 639 Macrolanguage

**ISO 639** is a set of international standards that lists short codes for language names. The ISO 639-1 and ISO 639-2 codes are primarily used, and these codes cover the majority of languages in the world. This package uses ISO 639 macrolanguages to ensure comprehensive and accurate representation of languages.

For more information about ISO 639 macrolanguage, visit the [Wikipedia page](https://en.wikipedia.org/wiki/ISO_639_macrolanguage).

---

## 📦 Installation

Install the package via npm or yarn:

```bash
npm install react-language-selector-lite
```

or

```bash
yarn add react-language-selector-lite
```

---

## 🚀 Quick Start

### Basic Usage

```jsx
import React from 'react';
import LanguageSelector from 'react-language-selector-lite';

const App = () => {
  const handleLanguageSelect = (language) => {
    console.log('Selected language:', language);
    // Returns the code of the selected language. (e.g., 'es')

    // To access language details, pass prop `includeDetails={true}`. Will return:
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

## 🎨 Advanced Usage

### Using custom toggle button

You can use your own custom toggle button for rendering the select container. Just pass your custom button reference to the `buttonRef` prop. This will override the default toggle button. Here's an example: **Easy peasy!**

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

---

### 🔗 Useful Links

- [NPM Official Package Page](https://www.npmjs.com/package/react-language-selector-lite?activeTab=readme) -  For more information

- [Issue Tracker](https://github.com/JamiuShaibu/react-language-selector-lite/issues) - Report any issues or feature requests

---

## ⚙️ Props Reference

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
| `width`     | `string`                       | `20rem`                 | Adjust the width of the selector container.                  |
| `className`     | `string`                       | `""`                 | Custom CSS class for styling the selector container.                  |
| `toggleBtnClass`     | `string`                       | `""`                 | Custom CSS class for styling the default toggle button.                  |
| `searchClass`     | `string`                       | `""`                 | Custom CSS class for styling the search input container.                  |
| `optionClass`     | `string`                       | `""`                 | Custom CSS class for styling each option.                  |
| `toggleBtnIcon`     | `React.ReactNode` / `string` | `"🌐"`            | Customizes the icon displayed on the toggle button. You can use an emoji (e.g., `"🌍"`), a React component (e.g., `<FaGlobe />`), or a custom SVG. |
| `searchIcon`     | `React.ReactNode` / `string` | `"🔍"`            | Customizes the icon displayed inside the search input. You can use an emoji (e.g., `"🔦"`), a React component (e.g., `<FaSearch />`), or a custom SVG. |
| `buttonRef`     | `React.RefObject< HTMLButtonElement>` | `null`            | A reference to a custom button that toggles the visibility of the language selector container, if not provided, the default toggle button will be rendered.                                    |
| `render`       | `string`:  `"onClick"` / `"onHover"` | `"onClick"` | To render / display the language selector container **onclick** or **onhover** event of the toggle button. |
| `theme`         | `"light"` / `"dark"`             | `"light"`            | Theme of the component.                                     |

---

## 🎨 Styling / Customization

 You can add custom styling by utilizing the following props; `className` for the selector container, `toggleBtnClass` for the default toggle button, `searchClass` for the search container, and `optionClass` for each option. Supports both traditional CSS classes and utility classes from UI libraries like Tailwind CSS, Bootstrap, etc. (e.g., `toggleBtnClass="bg-sky-600 rounded-full"`).

---

### Dark Theme

To use the dark theme, simply set the `theme` prop to `"dark"`:

```jsx
<LanguageSelector onSelect={handleLanguageSelect} theme="dark" />
```

### Advanced Theme Customization

You can take the theme to another level beyond the simple default theme, in this case your main focus should be on 3 key classes, `className`, `searchClass`, and `optionClass`. The following example shows how to customize the dark theme using Tailwind CSS:

```jsx
<LanguageSelector
  onSelect={handleLanguageSelect}
  // Main classes for theming
  className="dark:bg-[#0b191c]"
  searchClass="dark:bg-gray-800"
  optionClass="dark:hover:bg-[#222729] dark:text-gray-400 dark:hover:text-white"
/>

```

### Customizable Icons

You can customize the default toggle button icon and search icon by passing either strings (like emojis) or React nodes (like components from react-icons or custom SVGs).

#### Using Emojis

```jsx
<LanguageSelector
  onSelect={handleLanguageSelect}
  toggleBtnIcon="🌍"
  searchIcon="🔦"
/>
```

#### Using React Components

```jsx
import { FaGlobe, FaSearch } from "react-icons/fa";

<LanguageSelector
  onSelect={handleLanguageSelect}
  toggleBtnIcon={<FaGlobe />}
  searchIcon={<FaSearch />}
/>
```

#### Using Custom SVGs

```jsx
import GlobeIcon from "./your-path-to-svgs/GlobeIcon.svg";
import SearchIcon from "./your-path-to-svgs/SearchIcon.svg";

<LanguageSelector
  onSelect={handleLanguageSelect}
  toggleBtnIcon={<img src={GlobeIcon} alt="Globe" />}
  searchIcon={<img src={SearchIcon} alt="Search" />}
/>
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) by [Jamiu Shaibu](https://github.com/JamiuShaibu)

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

### Steps to Contribute

1. Fork the repository: [GitHub repository](https://github.com/JamiuShaibu/react-language-selector-lite)
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Open a pull request.

---

### 💬 Support

If you encounter any issues or have questions:

- Check the [existing issues](https://github.com/JamiuShaibu/react-language-selector-lite/issues)
- Create a [new issue](https://github.com/JamiuShaibu/react-language-selector-lite/issues/new)

---

### Acknowledgments

- [langs](https://www.npmjs.com/package/langs) - For language data.

---

### ☕ Support the Developer

If you find this package useful, consider buying me a coffee to support development!

<a href="https://www.buymeacoffee.com/jamiushaib5" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

---

### 👨‍💻 Author

- **Jamiu Shaibu** - [GitHub](https://github.com/JamiuShaibu) | [LinkedIn](https://www.linkedin.com/in/jamiu-shaibu-9037ba195/)

---

Happy coding! 🎉
