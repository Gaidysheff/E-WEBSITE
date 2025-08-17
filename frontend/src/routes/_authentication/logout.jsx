import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authentication/logout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authentication/logout"!</div>
}
