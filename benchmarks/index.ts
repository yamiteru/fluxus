import { Suite } from "benchmark";
import * as dev from "@dev";
import { Input } from "@dev";
import * as prod from "@prod";
import * as zod from "zod";
import * as valibot from "valibot";

const fluxus_dev = () =>
  dev.object({
    name: dev.string_type,
  });

const fluxus_prod = () =>
  prod.object({
    name: prod.string_type,
  });
const zod_default = () =>
  zod.object({
    name: zod.string(),
  });

const valibot_default = () =>
  valibot.object({
    name: valibot.string(),
  });

const data: Input<typeof fluxus_dev> = {
  name: "John Doe",
};

// add tests
new Suite()
  .add("fluxus_prod", function () {
    prod.parse(fluxus_prod(), data);
  })
  .add("fluxus_dev", function () {
    dev.parse(fluxus_dev(), data);
  })
  .add("valibot_default", function () {
    valibot.parse(valibot_default(), data);
  })
  .add("zod_default", function () {
    zod_default().parse(data);
  })
  // add listeners
  .on("cycle", function (event: any) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run();
