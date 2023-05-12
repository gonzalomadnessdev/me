export interface IUser {
    id: 1,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone: string,
    website: string,
    company: ICompany
}

interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeoLocation
}

interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string
}

interface IGeoLocation {
    lat: number,
    lng: number
}