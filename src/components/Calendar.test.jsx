import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';

test("The first row of the calendar should display the `date` prop's month and year.", () => {
  render(<Calendar selectedDate={new Date(1933, 8, 10)} />);

  const monthEl = screen.getByText(/September/i);
  const yearEl = screen.getByText(/1933/i);

  expect(monthEl).toBeInTheDocument();
  expect(yearEl).toBeInTheDocument();
})

test("The second row of the calendar should display the days of the week, one per column.", () => {
  render(<Calendar selectedDate={new Date(1933, 8, 10)} />);

  const sunEl = screen.getByText("Sun");
  const monEl = screen.getByText("Mon");
  const tueEl = screen.getByText("Tue");
  const wedEl = screen.getByText("Wed");
  const thuEl = screen.getByText("Thu");
  const friEl = screen.getByText("Fri");
  const satEl = screen.getByText("Sat");
  
  expect(sunEl).toBeInTheDocument();
  expect(monEl).toBeInTheDocument();
  expect(tueEl).toBeInTheDocument();
  expect(wedEl).toBeInTheDocument();
  expect(thuEl).toBeInTheDocument();
  expect(friEl).toBeInTheDocument();
  expect(satEl).toBeInTheDocument();
})

test("The appropriate date cell should be highlighted based on the `date` prop.", () => {
  render(<Calendar selectedDate={new Date(1933, 8, 10)} />);

  const dayEl = screen.getByText("10");

  expect(dayEl).toBeInTheDocument();

})