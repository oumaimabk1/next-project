import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { humanReadableLanguage, supportedLanguages } from '@/constants/languages';
import { useTranslation } from 'react-i18next';

export default function BasicSelect() {
  
    const { i18n } = useTranslation()
    console.log(supportedLanguages);
    const handleLanguageChange = (nextLocale: string) => {
      console.log(nextLocale)
      i18n.changeLanguage(nextLocale)
    }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label= {humanReadableLanguage(i18n.language)}
        >
            <div className="py-1">
            {supportedLanguages.map((language) => (
              <MenuItem key={language}
              onClick={() => handleLanguageChange(language)}>
                    {humanReadableLanguage(language)}
              </MenuItem>
            ))}
          </div>
        </Select>
      </FormControl>
    </Box>
  );
}