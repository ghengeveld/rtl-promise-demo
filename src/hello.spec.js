import React from "react"
import { render } from "@testing-library/react"

const Hello = () => {
  const promise = Promise.reject("Oh no!")
  console.log(promise)
  return <div>Hello RTL</div>
}

test("HelloRTL", async () => {
  const { findByText } = render(<Hello />)
  await findByText("Hello RTL")
})
