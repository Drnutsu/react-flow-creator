import { FormState, FormUIActions } from './types';
export default function (state: FormState | undefined, action: FormUIActions): {
    config: any;
    error: string | null;
};
