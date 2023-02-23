import type { PageServerLoad } from './$types';
import type {Config} from "@sveltejs/adapter-vercel";
import { nanoid } from "nanoid";

export const config: Config = {
    isr: {
        expiration: 5
    }
}

export const load: PageServerLoad = () => {

    let id = nanoid();

    return {
        id
    }
}
