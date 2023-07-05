import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchField({ onChange }) {
  return (
    <TextField 
      id="search-field" 
      label="Search repositories" 
      variant="outlined"
      onChange={onChange} 
      InputProps={{
        endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
      }}
    />
  );
};