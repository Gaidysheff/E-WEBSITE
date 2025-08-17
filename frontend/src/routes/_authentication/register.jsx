import Form from '@/components/form/Form.jsx';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authentication/register')({
  component: Register,
})

function Register() {
  return <Form route="/api/user/register/" method="register" />
}
