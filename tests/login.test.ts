import { Login } from "furaffinity-api";
// or
const { Login } = require("furaffinity-api");

// to allow all results to be accessible, add your cookies
Login("cookie_a", "cookie_b");

test("Login ans get userinfo", async () => {
  // Please add your cookies to file .env first.
  Login(cookieA, cookieB);
  const user = await User();
  const exceptContainKeys = ["id", "name", "url", "avatar", "shinies", "stats"];
  expect(Object.keys(user)).toEqual(exceptContainKeys);
  expect(["", "guest"]).not.toContain(user["id"]);
});
