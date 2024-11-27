import { defineNuxtPlugin } from "#app";
import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  const axiosInstance = axios.create({
    baseURL: runtimeConfig.public.apiUrl,
  });

  nuxtApp.provide("axios", axiosInstance);
});
