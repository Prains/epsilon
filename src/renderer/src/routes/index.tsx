import { HomePage } from '@renderer/pages/HomePage'
import { createFileRoute } from '@tanstack/react-router'

const Home = () => <HomePage />

export const Route = createFileRoute('/')({
  component: Home
})
