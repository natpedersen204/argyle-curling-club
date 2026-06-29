import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router'
import { Root } from './routes/__root'
import { HomePage } from './routes/home'
import { AboutPage } from './routes/about'
import { LeaguesPage } from './routes/leagues'
import { BonspielsPage } from './routes/bonspiels'
import { RentalsPage } from './routes/rentals'
import { SponsorsPage } from './routes/sponsors'
import { ContactPage } from './routes/contact'

const rootRoute = createRootRoute({ component: Root })

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage })
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: AboutPage })
const leaguesRoute = createRoute({ getParentRoute: () => rootRoute, path: '/leagues', component: LeaguesPage })
const bonspielsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/bonspiels', component: BonspielsPage })
const rentalsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/rentals', component: RentalsPage })
const sponsorsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/sponsors', component: SponsorsPage })
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: ContactPage })

export const router = createRouter({
  routeTree: rootRoute.addChildren([
    indexRoute,
    aboutRoute,
    leaguesRoute,
    bonspielsRoute,
    rentalsRoute,
    sponsorsRoute,
    contactRoute,
  ]),
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
