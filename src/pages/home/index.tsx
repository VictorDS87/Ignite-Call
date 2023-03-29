import Image from 'next/image'
import previewImage from '../../assets/image1.png'

import { Heading, Text } from '@ignite-ui/react'
import { Container, MainText, Preview } from './styles'
import { UserNameForm } from './components/UserNameForm'

export default function Home() {
  return (
    <Container>
      <MainText>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamento no
          seu tempo livre.
        </Text>
        <UserNameForm />
      </MainText>

      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando aplicação em função"
        />
      </Preview>
    </Container>
  )
}
