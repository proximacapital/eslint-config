import test, { ExecutionContext } from "ava";
import { Class } from "@Src/Class";

test("Example Test", (t: ExecutionContext): void =>
{
    const lClass: Class = new Class();
    lClass.LogHelloWorld();

    t.pass();
});
