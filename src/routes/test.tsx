import TestPage from '@/pages/TestPage/TestPage';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({

  component: () => <TestPage />
})