import { setupWorker } from "msw/browser";
import { getUserMockHandler } from "../api/get-user-mock";

const handlers = [getUserMockHandler];

const worker = setupWorker(...handlers);

export async function enableMocking() {
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}
