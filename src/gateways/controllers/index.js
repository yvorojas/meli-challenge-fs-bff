import { createRouterInstance } from '../../infrastructure/router'
import healthCheck from './healthCheck'

const router = createRouterInstance()

router.use('/check', healthCheck)

export default router
