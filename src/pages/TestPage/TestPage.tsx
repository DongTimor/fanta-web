import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Country } from "country-state-city";
import { useAsyncList } from "react-stately";
import "./TestPage.scss";

import { useState } from "react";
import MInputSearch from "@/components/molecules/m-input-search/MInputSearch";

function TestPage() {
  const countries = Country.getAllCountries();
  const [searchTerm, setSearchTerm] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  // const [isOpen2, setIsOpen2] = useState(false);
  // Kiểm tra trạng thái loading
  // console.log("Loading state:", list.isLoading);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <div>
      <p>---------------------------------------------</p>
      <p>---------------------------------------------</p>
      <p>---------------------------------------------</p>
      <p>---------------------------------------------</p>
      <p>---------------------------------------------</p>
{/* 
      <div className="test-page">
        <MInputSearch
          className="item"
          onClick={() => {
            setIsOpen(true);
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select
          isOpen={isOpen}
          onOpenChange={(isOpen) => {
            setIsOpen(isOpen);
          }}
        >
          {countries
            .filter((country) =>
              country.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((country) => (
              <SelectItem key={country.name}>{country.name}</SelectItem>
            ))}
        </Select>
      </div>
      <Input
        onClick={() => {
          setIsOpen2(true);
        }}
      />
      <Dropdown isOpen={isOpen}>
        <DropdownTrigger>
          <Input />
        </DropdownTrigger>
        <DropdownMenu style={{ height: "300px", overflowY: "auto" }}>
          {countries
            .filter((country) =>
              country.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((country) => (
              <DropdownItem key={country.name}>{country.name}</DropdownItem>
            ))}
        </DropdownMenu>
      </Dropdown> */}

      {/* <Input
        list="ice-cream2"
        id="ice-cream-choice"
        name="ice-cream-choice"
      />

      <datalist id="ice-cream2">
        {countries.map((country) => (
          <option value={country.name}></option>
        ))}
      </datalist>

      <select id="ice-cream" style={{ width: "300px" }}>
        <option  value=""><input type="text" /></option>
        {countries.map((country) => (
          <option value={country.name}>{country.name}</option>
        ))}
      </select> */}

      <div className="custom-select">
      <div onClick={() => setIsOpen(!isOpen)} className="select-trigger">
        {inputValue || "Chọn một tùy chọn..."}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nhập lựa chọn..."
          />
          <Select isOpen={isOpen}>
            {countries
              .filter(option => option.name.toLowerCase().includes(inputValue.toLowerCase()))
              .map((option) => (
                <SelectItem key={option.name}>{option.name}</SelectItem>
              ))}
          </Select>
        </div>
      )}
    </div>
    </div>
  );
}

export default TestPage;
