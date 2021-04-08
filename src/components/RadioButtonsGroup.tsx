import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

interface RadioButtonsGroupProps {
  radioButtonLabels: Array<string> 
  groupLabel: string
  setValue: (value:string) => void
  value: string | undefined
}

const RadioButtonsGroup:React.FC<RadioButtonsGroupProps>= ({radioButtonLabels, groupLabel, setValue, value}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{groupLabel}</FormLabel>
      <RadioGroup aria-label={groupLabel} name={groupLabel} value={value} onChange={handleChange}>
        {radioButtonLabels.map((radioButtonLabel, index)=>(
          <FormControlLabel key={`${groupLabel}-${index}`} value={radioButtonLabel} control={<Radio />} label={radioButtonLabel} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default RadioButtonsGroup