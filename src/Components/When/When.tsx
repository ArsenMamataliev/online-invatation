import React from 'react';
// import useReactCountdown from 'use-react-countdown'

export default function When() {
    let dateToEndCountdownAt = "December 31, 2022 20:00:00";
    const { days, hours, minutes, seconds } = useReactCountdown(dateToEndCountdownAt);  
  return (
    <div>{days} {hours} {minutes} {seconds}</div>
  )
}
