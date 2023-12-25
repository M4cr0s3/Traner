import type {IRegisterData} from "~/pages/sign-in/index.vue";
import type {IUserResponse} from "~/types";

export async function register(formData: IRegisterData) {
    const { data } = await useFetch<IUserResponse>('api/register', {
        method: 'POST',
        body: formData
    })

    return ref(data)
}