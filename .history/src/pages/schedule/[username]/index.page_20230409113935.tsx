import { prisma } from '../../../lib/prisma'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container, UserHeader } from './styles'
import { Avatar, Heading, Text } from '@ignite-ui/react'
import { Calendar } from '@/components/Calendar/index.page'

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
        <Avatar src={user.avatarUrl} />
        <Heading>{user.name}</Heading>
        <Text>{user.bio}</Text>
        <Calendar/.
      </UserHeader>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // iniciar sem nenhum perfil previamente carregaod, ir carregando a medida que forem entrando
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username)

  const user = await prisma.user.findUnique({
    // User ganha o valor do username que está no prisma
    where: {
      username,
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user: {
        name: user.name,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },

    revalidate: 60 * 60 * 5, // 5 hours
  }
}
