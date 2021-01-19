import healthCheck from './healthCheck'
import { createRouter } from '../interfaces/server'
import items from './items'

const router = createRouter()

router.use('/check', healthCheck)
router.use('/api/items', items)

export default router
