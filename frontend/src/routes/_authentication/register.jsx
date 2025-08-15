import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authentication/register')({
  component: Register,
})

function Register() {
  return <div>Hello "/_authentication/register"!</div>
}
