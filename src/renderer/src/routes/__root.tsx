import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { FloatingDock } from '@renderer/components/ui/floating-dock'
import { HouseIcon } from 'lucide-react'

const links = [
  {
    title: 'Home',
    icon: <HouseIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '/'
  }
]

export const Route = createRootRoute({
  component: () => (
    <main className="h-screen w-full bg-gray-50 relative flex items-center justify-center p-10">
      <Outlet />
      <TanStackRouterDevtools />
      <FloatingDock items={links} desktopClassName="absolute bottom-10" />
    </main>
  )
})
