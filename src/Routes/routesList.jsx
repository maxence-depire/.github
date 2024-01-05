import HomeScreen from "./routeContainer/routeHome";
import MenuScreen from "./routeContainer/routeMenu";

const routeBasic = [
    {
        path: "/",
        exact: true,
        component: () => (<HomeScreen />)
    },
    {
        path: "/menu",
        exact: true,
        component: () => (<MenuScreen />)
    }
]

const allRoutes = [
    routeBasic
]

let routes = []
allRoutes.forEach(routeRow => {
    routeRow.forEach(route => {
        routes.push(route)
    })
});

export default routes;