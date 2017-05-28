import { Company } from "./company";
import { CompanyUser } from "./company-user";

export interface User {
	admin: boolean,
	auth: string,
	cid: string,
	company: Company,
	company_user: CompanyUser,
	credentials: any,
	domain_verify: number[],
	email: number[],
	first_name: string,
	last_name: string,
	login: boolean,
	profile_pic: any,
	profile_pic_l: any,
	profile_pic_s: any,
	status: any,
	user_id: string
}
