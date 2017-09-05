interface AuthBusiness {
    authorize(code: string, callback: (error: any, result: any) => void);
}

export = AuthBusiness;
