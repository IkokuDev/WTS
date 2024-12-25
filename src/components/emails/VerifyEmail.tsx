import * as React from 'react'
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface EmailTemplateProps {
  verificationLink: string
}

export const VerifyEmail = ({
  verificationLink,
}: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Verify your email address</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={text}>Hi there,</Text>
            <Text style={text}>
              Welcome to the WTS Family! Please verify your email address by clicking the button below:
            </Text>
            <Button style={button} href={verificationLink}>
              Verify Email
            </Button>
            <Text style={text}>
              If you didn&apos;t sign up for WTS, you can safely ignore this email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
}

const text = {
  fontSize: '16px',
  lineHeight: '26px',
}

const button = {
  backgroundColor: '#000000',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px',
  marginTop: '20px',
  marginBottom: '20px',
}
