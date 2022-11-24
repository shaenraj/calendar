import React, { useState } from 'react';
import {format} from 'date-fns'
import Calendar from './components/Calendar';

function App() {
  const [updatedDate, setUpdatedDate] = useState<Date>(new Date());
  const onClickWhen = (date: Date) => {
    setUpdatedDate(date);
  }

  const handleChange = (value: string) => {
    setUpdatedDate(new Date(value));
  }
  return (
    <div className='pt-40 flex justify-around items-center'>
      <Calendar selectedDate={updatedDate} onSelectDate={onClickWhen} />
      <div className='w-[300px] border-2 rounded-md border-blue p-1'>
        <input
          type="date"
          value={format(updatedDate, 'yyyy-MM-dd')}
          className='w-full'
          onChange={e => {
            handleChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default App;
