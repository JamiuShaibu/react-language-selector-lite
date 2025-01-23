import * as langs from "langs";
import React, { useMemo, useRef, useState } from "react";
import useDropdownClickOutside from "./hooks/useDropdownClickOutside.js";
import propTypes from "prop-types";
import styled from "styled-components";

const LanguageSelectorWrapper = styled.div`
  position: relative;
  width: 100%;
  ${(props) =>
    props.geoCoverage === "both"
      ? "min-width: 11rem; max-width: 32rem;"
      : "min-width: 6rem; max-width: 25.6rem;"}
  text-nowrap: nowrap;
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
  text-decoration: none;
`;

const ButtonSpan = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${(props) =>
    props.theme === "dark" ? "#1c1e1d" : "#f7f7f7"};
  border-radius: 0.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 10;
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
`;

const SearchIcon = styled.label`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  color: #808080;
`;

const LanguageList = styled.div`
  max-height: 15rem;
  overflow-y: auto;
`;

const LanguageItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme === "dark" ? "#0f1010" : "#e4e5e5"};
  }
`;

const NoLanguageFound = styled.div`
  padding: 0.5rem;
  color: #808080;
  text-align: center;
`;

const LanguageSelector = ({
  onSelect,
  includeDetails = false,
  geoCoverage = "both",
  reverseNames = false,
  enableSearch = true,
  options = [],
  sortOptions = true,
  buttonLabel = "Select language",
  placeholder = "Search language...",
  className = "",
  theme = "light",
  useDefaultToggleButton = true,
}) => {
  let allLanguages = langs.all();
  if (options.length > 0) {
    sortOptions && options.sort((a, b) => a.localeCompare(b));
    allLanguages = options.map((code) => langs.where("1", code.toLowerCase()));
  }

  const [isOpenSelector, setIsOpenSelector] = useState(
    useDefaultToggleButton ? false : true
  );

  const [searchValue, setSearchValue] = useState("");

  const menuRef = useRef(null);
  useDropdownClickOutside(menuRef, () => setIsOpenSelector(false));

  const handleLanguageChange = (value) => {
    includeDetails ? onSelect(value) : onSelect(value[1]);
    useDefaultToggleButton && setIsOpenSelector(!isOpenSelector);
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

  return (
    <LanguageSelectorWrapper
      ref={menuRef}
      className={className}
      geoCoverage={geoCoverage}
      theme={theme}
    >
      {useDefaultToggleButton && (
        <ToggleButton onClick={() => setIsOpenSelector(!isOpenSelector)}>
          <span>🌐</span>
          <ButtonSpan>{buttonLabel}</ButtonSpan>
        </ToggleButton>
      )}
      {isOpenSelector && (
        <DropdownMenu theme={theme}>
          {enableSearch && (
            <SearchContainer>
              <SearchInput
                type="text"
                id="search"
                name="search"
                placeholder={placeholder}
                value={searchValue}
                onChange={handleSearch}
                theme={theme}
              />
              <SearchIcon htmlFor="search">🔍</SearchIcon>
            </SearchContainer>
          )}
          <LanguageList>
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((language) => (
                <LanguageItem
                  key={language[1]}
                  onClick={() => handleLanguageChange(language)}
                  theme={theme}
                >
                  {lowerCase(geoCoverage) === "local" && language.local}
                  {lowerCase(geoCoverage) === "international" && language.name}
                  {lowerCase(geoCoverage) === "both" && !reverseNames && (
                    <span>
                      {language.local} ({language.name})
                    </span>
                  )}
                  {lowerCase(geoCoverage) === "both" && reverseNames && (
                    <span>
                      {language.name} ({language.local})
                    </span>
                  )}
                </LanguageItem>
              ))
            ) : (
              <NoLanguageFound>Language not found</NoLanguageFound>
            )}
          </LanguageList>
        </DropdownMenu>
      )}
    </LanguageSelectorWrapper>
  );
};

LanguageSelector.propTypes = {
  onSelect: propTypes.func.isRequired,
  includeDetails: propTypes.bool,
  enableSearch: propTypes.bool,
  options: propTypes.arrayOf(propTypes.string),
  sortOptions: propTypes.bool,
  geoCoverage: propTypes.string,
  reverseNames: propTypes.bool,
  buttonLabel: propTypes.string,
  placeholder: propTypes.string,
  className: propTypes.string,
  theme: propTypes.string,
  useDefaultToggleButton: propTypes.bool,
};

export default LanguageSelector;
