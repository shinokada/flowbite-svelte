import { FATHOM_ID } from "$env/static/private";
import pkg from "../../package.json";

export const prerender = true;

export const load = async () => {
  return { FATHOM_ID, npmVersion: pkg.version };
};
