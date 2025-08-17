import Form from '@/components/form/Form.jsx';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authentication/login')({
  component: Login,
})

export function Login() {

  return <Form route="/api/token/" method="login" />

}
