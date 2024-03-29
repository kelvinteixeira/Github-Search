import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

export const Searchbar = () => {
  return (
    <Grid justifyContent={"center"} alignItems={"center"}>
      <FormControl variant="outlined">
        <InputLabel htmlFor="searchbar">Search for a github user</InputLabel>
        <OutlinedInput
          sx={{
            width: 600,
            borderRadius: 10
          }}
          id="searchbar"
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Search for a github user"
        />
      </FormControl>
    </Grid>
  );
};
