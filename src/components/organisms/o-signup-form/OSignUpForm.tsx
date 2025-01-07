import NButton from "@/components/atoms/n-button/NButton";
import NCheckbox from "@/components/atoms/n-checkbox/NCheckbox";
import NDatePicker from "@/components/atoms/n-datepicker/NDatePicker";
import NInput from "@/components/atoms/n-input/NInput";
import { NSelect } from "@/components/atoms/n-select";
import MInputSearch from "@/components/molecules/m-input-search/MInputSearch";
import { SelectItem } from "@nextui-org/react";
import { Country, State, City } from "country-state-city";
import { useEffect, useRef, useState } from "react";
import "./OSignUpForm.scss";

function OSignUpForm() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focus, setFocus] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const [countryList, setCountryList] = useState(50);
  function handleScroll() {
    if (loadMoreRef.current?.getAttribute("data-bottom-scroll") === "false") {
      setCountryList(countryList + 50);
      setIsLoading(!isLoading);
    }
  }
  useEffect(() => {
    const loadMore = loadMoreRef.current;
    if (loadMore) {
      loadMore.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (loadMore) {
        loadMore.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isOpen, isLoading]);

  return (
    <div className="o-signup-form">
      <form>
        {/* <p className="o-signup-form-subtitle">
          Create an account to get all of your favorite stories in one place
        </p> */}
        {/* <div className="o-signup-form-1">
          <p className="o-signup-form-title">Join us</p>

          <p className="o-signup-form-label">*First Name</p>
          <NInput></NInput>
          <p className="o-signup-form-label">Middle Name</p>
          <NInput></NInput>
          <p className="o-signup-form-label">*Last Name</p>
          <NInput></NInput>
          <p className="o-signup-form-label">
            What is your gender? (optional){" "}
          </p>
          <div className="o-signup-form-checkbox-group">
            <NCheckbox></NCheckbox>
            <NCheckbox></NCheckbox>
            <NCheckbox></NCheckbox>
          </div>
          <p className="o-signup-form-label">What is your date of birth? </p>
          <NDatePicker></NDatePicker>
          <NButton type="button" className="o-signup-form-1-button">
            Sign Up
          </NButton>
        </div> */}
        <div className="o-signup-form-2">
          <p className="o-signup-form-2-title">Contact Infor</p>

          <div className="o-signup-form-2-social-group">
            <p className="o-signup-form-label">*Email</p>
            <NInput></NInput>
            <p className="o-signup-form-label">*Phone Number</p>
            <NInput></NInput>
            <p className="o-signup-form-label">*Country</p>
            <div className="o-signup-form-country-select-box">
              <NInput
                
                inputMode="search"
                onClick={() => {
                  setIsOpen(true);
                  
                }}
                autoComplete="nope"
                type="text"
                className="o-signup-form-country-select-box-search"
              />
              <NSelect
                isOpen={isOpen}
                onOpenChange={(isOpen) => {
                  setIsOpen(isOpen);
                  setFocus(true);
                  console.log(focus);
                }}
                scrollRef={loadMoreRef}
                className="o-signup-form-country-select-box-select"
                onChange={(e) => {
                  setCountry(e.target.value);
                  setCountryList(50);
                }}
              >
                {Country.getAllCountries()
                  .slice(0, countryList)
                  .map((country, index) => (
                    <SelectItem key={index} value={country.isoCode}>
                     
                      {country.name}
                    </SelectItem>
                  ))}
              </NSelect>
            </div>

            <p className="o-signup-form-label">*State</p>
            <NSelect
              className="o-signup-form-select"
              onChange={(e) => setState(e.target.value)}
            >
              {country !== "" ? (
                State.getStatesOfCountry(country).map((state) => (
                  <SelectItem key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </SelectItem>
                ))
              ) : (
                <SelectItem key="null" value="null" isDisabled>
                  Select Country First
                </SelectItem>
              )}
            </NSelect>
            <p className="o-signup-form-label">*First Name</p>
            <NInput></NInput>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OSignUpForm;
