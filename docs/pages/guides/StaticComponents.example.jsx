import React, { useState } from 'react';
import { Paper } from '@material-ui/core/';
import DateFnsUtils from '@date-io/date-fns';
import { usePickerState, TimePickerView, Calendar } from 'material-ui-pickers';

function StaticPickers() {
  const [value, handleDateChange] = useState(new Date());
  const { pickerProps, wrapperProps, inputProps } = usePickerState(
    { value, onChange: handleDateChange },
    {
      getDefaultFormat: () => 'MM/dd/yyyy',
      getValidationError: () => null,
    }
  );

  return (
    <div>
      <div className="picker">
        <Paper style={{ overflow: 'hidden' }}>
          <Calendar {...pickerProps} />
        </Paper>
      </div>

      <TimePickerView // or just directly use components
        type="hours"
        date={value}
        ampm={false}
        onMinutesChange={() => {}}
        onSecondsChange={() => {}}
        onHourChange={handleDateChange}
      />
    </div>
  );
}

export default StaticPickers;
