import { string } from 'zod'

interface ScheduleProps {
  user: {
    name: string
    bio: string
    avatarUrl: string
  }
}
