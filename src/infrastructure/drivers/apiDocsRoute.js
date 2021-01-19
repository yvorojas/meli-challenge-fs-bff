import { Router } from 'express'
import { specs, apiDocsUi } from '../drivers/apiDocs'

const router = Router()

router.use('/', apiDocsUi.serve)
router.get(
  '/',
  apiDocsUi.setup(specs, {
    explorer: false,
  })
)

export default router
