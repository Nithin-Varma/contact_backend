import express from 'express'
import { Router } from 'express' 
import { getContacts, 
  createContact, 
  getContact, 
  updateContact, 
  deleteContact 
} from '../controllers/ContactController.js'
import { validateToken } from '../middleware/validatetTokenHandler.js';

const router = Router();

router.use(validateToken)

router.get('/', getContacts)

router.post('/', createContact)

router.get('/:id', getContact)

router.put('/:id', updateContact)

router.delete('/:id', deleteContact)

export default router;