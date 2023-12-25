export interface IAdvantage {
    icon: string
    title: string
    description: string
}

export type Advantages = IAdvantage[]

export interface IReview {
    img: string
    author: string
    content: string
}

export interface ITokenPayload {
    id: number,
    email: string
}

export interface IUseTokenOptions {
    expiresIn: string
    subject: string
    issuer: string
}

export interface IUser  {
    id: number
    email: string
    name: string
    surname: string
    about: string
    cityId: number
    countryId: number
    city: string
    created_at: Date
    updated_at: Date
    hobbies: JSON
    isEmailVerified: boolean
    username: string
}

export interface IUserResponse {
    success: boolean
    data: {
        id: number
        name: string
        surname: string
        email: string
    }
}