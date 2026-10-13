import { mountHeader } from "./ui/header";
import { mountFooter } from "./ui/footer";
import { mountFloats } from "./ui/floats";

export function initPage(active: string): void {
  mountHeader(active);
  mountFooter();
  mountFloats();
}
