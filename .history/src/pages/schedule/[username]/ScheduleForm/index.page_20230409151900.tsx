import { useState } from 'react'
import { ConfirmStep } from './ConfirmStep/index.page'
import { CalendarStep } from './CalendarStep/index.page'

export function ScheduleForm() {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>()

  function handleClearSelectedDateTime() {
    setSelectedDateTime(null)
  }

  if (selectedDateTime) {
    return <div>sss</div>
  }

  return <CalendarStep onSelectDateTime={setSelectedDateTime} />
}
