import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('routes/Home.tsx'),
  route('uncontrolled-form', 'routes/UncontrolledForm.tsx'),
  route('controlled-form', 'routes/ControlledForm.tsx'),
] satisfies RouteConfig
