import { string } from 'zod'

interface ScheduleProps {
  user: {
    name: string
    bio: string
    avatarUrl: string
  }
}

export default function Schedule({ user }: ScheduleProps) {
  return (
    <Container>
      <UserHeader>
        <Avatar />
        <Heading></Heading>
        <Text></Text>
      </UserHeader>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // iniciar sem nenhum perfil previamente carregaod, ir carregando a medida que forem entrnado
  return {
    paths: [],
    fallback: 'blocking',
  }
}
