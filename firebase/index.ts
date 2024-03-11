import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { useRuntimeConfig } from "#app";

const config = useRuntimeConfig();
export const firebaseApp = initializeApp(config.public.vuefire.config);
export const db = getFirestore(firebaseApp);