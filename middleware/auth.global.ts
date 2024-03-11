export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await getCurrentUser();

  const publicRoutes = [
    "/auth/login",
    "/auth/signup",
    "/"
  ]

  if (!user && !publicRoutes.includes(to.path)) {
    return navigateTo({
      path: "/auth/login",
      query: {
        redirect: to.fullPath
      }
    })
  }

  if (user && publicRoutes.includes(to.path)) {
    return navigateTo({
      path: "/home"
    });
  }
})