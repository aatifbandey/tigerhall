import { useCallback } from "react";
import { debounce } from "lodash";
import { Form } from "./styles";

const Search = (props) => {
  const { getSearchValue } = props;
  const debounceFn = useCallback(debounce(getSearchValue, 300), []);
  const onChange = (e) => {
    if (getSearchValue) {
      debounceFn(e.target.value);
    }
  };
  return (
    <Form>
      <input placeholder='Search content' type="text" onChange={(e) => onChange(e)} />
    </Form>
  );
};

export default Search;
