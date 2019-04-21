import {Router, Request, Response} from "express";
import {CustomerController} from "../controller/customerController";

const _cc = new CustomerController();
const router = Router();


router.get('', _cc.getCustomer());

router.post('', _cc.addCustomer());

router.patch('', _cc.updateCustomer());

export const customer = router;