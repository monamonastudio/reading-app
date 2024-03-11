<template>
  <div class="h-[100dvh] w-full bg-gradient-to-br from-indigo-700 to-purple-700 p-6">
    <div class="my-20">
      <img class="mx-auto" src="https://placehold.co/250" alt="">
    <h1 class="text-center text-xl m-4">Welcome to MonaMona.</h1>
    </div>
    <div class="my-20">
      <button class="my-2 w-full text-xl bg-white text-neutral-800 py-3 font-semibold rounded-full"><font-awesome-icon class="pr-2" icon="fa-solid fa-envelope" />Sign Up With Email</button>
      <button @click="signInWithGoogle" class="my-2 w-full text-xl bg-white text-neutral-800 py-3 font-semibold rounded-full"><font-awesome-icon class="pr-2" icon="fa-brands fa-google" />Sign Up With Google</button>
      <div class="text-center text-lg my-2">
        Already have an account? <button class="font-bold">Log In</button> 
      </div>
      <div class="my-20 text-center text-neutral-300 text-sm px-4">
        By creating an account, you agree to MonaMona's Terms of Service and Privacy Policy.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();

const router = useRouter()
async function signInWithGoogle() {
  await signInWithPopup(auth, googleAuthProvider);
  router.go(0);
}
</script>