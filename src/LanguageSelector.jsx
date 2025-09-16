import * as langs from "langs";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useDropdownClickOutside from "./hooks/useDropdownClickOutside.js";
import propTypes from "prop-types";
import styled from "styled-components";

const LanguageSelectorWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  width: fit-content;
`;

const ButtonSpan = styled.span`
  padding-left: 0.25rem;
  &:hover {
    text-decoration: underline;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  width: ${(props) => props.width || "20rem"};
  max-width: 90vw;
  text-nowrap: nowrap;
  background-color: ${(props) =>
    props.theme === "dark" ? "#1c1e1d" : "#f7f7f7"};
  color: ${(props) => (props.theme === "dark" ? "#d1d5db" : "#808080")};
  border-radius: 0.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 10;

  @media (max-width: 425px) {
    width: 16rem;
  }
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  padding-right: 2.5rem;
  border: none;
  outline: none;
  background-color: ${(props) =>
    props.theme === "dark" ? "#27272a" : "#ffffff"};
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 425px) {
    padding: 0.75rem;
    padding-right: 2rem;
  }
`;

const SearchIcon = styled.label`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`;

const LanguageList = styled.div`
  max-height: 15rem;
  overflow-y: auto;
  width: 100%;

  @media (max-width: 425px) {
    right: 0.75rem;
  }
`;

const LanguageItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme === "dark" ? "#0f1010" : "#e4e5e5"};
  }

  @media (max-width: 425px) {
    padding: 0.375rem;
  }
`;

const NoLanguageFound = styled.div`
  padding: 0.5rem;
  text-align: center;
`;

const LanguageSelector = ({
  onSelect,
  defaultLang = "",
  includeDetails = false,
  geoCoverage = "both",
  reverseNames = false,
  enableSearch = true,
  options = [],
  sortOptions = true,
  buttonLabel = "Select language",
  placeholder = "Search language...",
  notFoundLabel = "Language not found",
  width = "20rem",
  className = "",
  theme = "light",
  toggleBtnClass = "",
  searchClass = "",
  optionClass = "",
  toggleBtnIcon = "🌐",
  searchIcon = "🔍",
  buttonRef = null,
  render = "onClick",
  ...props
}) => {
  const [isOpenSelector, setIsOpenSelector] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [storedLang, setStoredLang] = useState(() => {
    const storedValue = localStorage.getItem("lite-lang");
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return defaultLang ? langs.where("1", defaultLang.toLowerCase()) : null;
  });

  useEffect(() => {
    if (!isSelect && storedLang) {
      onSelect(includeDetails ? storedLang : storedLang[1]);
    }
  }, [storedLang, isSelect, includeDetails]);

  let allLanguages = langs.all();
  if (options.length > 0) {
    sortOptions && options.sort((a, b) => a.localeCompare(b));
    allLanguages = options.map((code) => langs.where("1", code.toLowerCase()));
  }

  const menuRef = useRef(null);
  useDropdownClickOutside(menuRef, () => setIsOpenSelector(false));

  const handleLanguageChange = (value) => {
    localStorage.setItem("lite-lang", JSON.stringify(value));
    setStoredLang(value);
    onSelect(includeDetails ? value : value[1]);
    setIsOpenSelector(!isOpenSelector);
    setIsSelect(true);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const lowerCase = useMemo(() => (str) => str.toLowerCase(), []);

  const filteredLanguages = allLanguages.filter(
    (language) =>
      lowerCase(language.local).includes(lowerCase(searchValue)) ||
      lowerCase(language.name).includes(lowerCase(searchValue))
  );

  const toggleSelector = useCallback(() => {
    setIsOpenSelector((prev) => !prev);
  }, []);

  const defaultButtonRef = useRef(null);
  const activeButtonRef = buttonRef ? buttonRef : defaultButtonRef;

  useEffect(() => {
    const event = lowerCase(render);
    const buttonElement = activeButtonRef.current;

    // Detect if the device supports hover
    const canHover = window.matchMedia("(hover: hover)").matches;
    // Detect if the device supports touch
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const renderEvent =
      event === "onhover" && (isTouchDevice || !canHover) ? "onclick" : event;

    const handleMouseEnter = () => setIsOpenSelector(true);
    const handleMouseLeave = (e) => {
      if (!menuRef.current.contains(e.relatedTarget)) {
        setIsOpenSelector(false);
      }
    };

    const addEventListeners = () => {
      // default render is onClick
      if (renderEvent === "onhover") {
        buttonElement?.addEventListener("mouseenter", handleMouseEnter);
        buttonElement?.addEventListener("mouseleave", handleMouseLeave);
        menuRef.current?.addEventListener("mouseleave", handleMouseLeave);
      } else {
        buttonElement?.addEventListener("click", toggleSelector);
      }
    };

    const removeEventListeners = () => {
      if (renderEvent === "onhover") {
        buttonElement?.removeEventListener("mouseenter", handleMouseEnter);
        buttonElement?.removeEventListener("mouseleave", handleMouseLeave);
        menuRef.current?.removeEventListener("mouseleave", handleMouseLeave);
      } else {
        buttonElement?.removeEventListener("click", toggleSelector);
      }
    };

    addEventListeners();
    return () => removeEventListeners();
  }, [activeButtonRef, render, toggleSelector]);

  return (
    <LanguageSelectorWrapper ref={menuRef} theme={theme} {...props}>
      {!buttonRef && (
        <ToggleButton
          role="button"
          ref={defaultButtonRef}
          className={toggleBtnClass}
        >
          <span>{toggleBtnIcon}</span>
          {buttonLabel && (
            <ButtonSpan>
              {!storedLang
                ? ["both", "local", "international"].includes(
                    buttonLabel.toLowerCase()
                  )
                  ? "Select language"
                  : buttonLabel
                : buttonLabel.toLowerCase() === "both"
                ? reverseNames
                  ? `${storedLang.name} (${storedLang.local})`
                  : `${storedLang.local} (${storedLang.name})`
                : buttonLabel.toLowerCase() === "local"
                ? storedLang.local
                : buttonLabel.toLowerCase() === "international"
                ? storedLang.name
                : buttonLabel}
            </ButtonSpan>
          )}
        </ToggleButton>
      )}
      {isOpenSelector && (
        <DropdownMenu
          theme={theme}
          role="listbox"
          width={width}
          className={className}
          aria-label="language-selector-label"
        >
          {enableSearch && (
            <SearchContainer className={searchClass}>
              <SearchInput
                type="text"
                id="search"
                name="search"
                aria-label="Search languages"
                placeholder={placeholder}
                value={searchValue}
                onChange={handleSearch}
                className={searchClass}
                theme={theme}
              />
              <SearchIcon htmlFor="search">{searchIcon}</SearchIcon>
            </SearchContainer>
          )}
          <LanguageList className={className}>
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((language) => (
                <LanguageItem
                  className={optionClass}
                  role="option"
                  key={language[1]}
                  onClick={() => handleLanguageChange(language)}
                  theme={theme}
                >
                  {lowerCase(geoCoverage) === "local" && language.local}
                  {lowerCase(geoCoverage) === "international" && language.name}
                  {lowerCase(geoCoverage) === "both" && (
                    <span>
                      {!reverseNames
                        ? `${language.local} (${language.name})`
                        : `${language.name} (${language.local})`}
                    </span>
                  )}
                </LanguageItem>
              ))
            ) : (
              <NoLanguageFound>{notFoundLabel}</NoLanguageFound>
            )}
          </LanguageList>
        </DropdownMenu>
      )}
    </LanguageSelectorWrapper>
  );
};

LanguageSelector.propTypes = {
  onSelect: propTypes.func.isRequired,
  defaultLang: propTypes.string,
  includeDetails: propTypes.bool,
  enableSearch: propTypes.bool,
  options: propTypes.arrayOf(propTypes.string),
  sortOptions: propTypes.bool,
  geoCoverage: propTypes.oneOf(["local", "international", "both"]),
  reverseNames: propTypes.bool,
  buttonLabel: propTypes.string,
  notFoundLabel: propTypes.string,
  placeholder: propTypes.string,
  className: propTypes.string,
  width: propTypes.string,
  toggleBtnClass: propTypes.string,
  optionClass: propTypes.string,
  searchClass: propTypes.string,
  theme: propTypes.oneOf(["light", "dark"]),
  toggleBtnIcon: propTypes.oneOfType([propTypes.string, propTypes.node]),
  searchIcon: propTypes.oneOfType([propTypes.string, propTypes.node]),
  buttonRef: propTypes.shape({ current: propTypes.instanceOf(Element) }),
  render: propTypes.oneOf(["onClick", "onHover"]),
};

export default LanguageSelector;
