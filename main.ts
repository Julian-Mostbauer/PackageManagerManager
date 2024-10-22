import { PMM } from "./pmm.ts";

const main = () => {
  let pmm: PMM = PMM.Instance;
  console.log(pmm.test());
};

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}
