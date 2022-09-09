import { doTheThing } from 'lib'
import { doSomethingElse } from 'lib/subpath'

export const test = () => {
  return [
    doTheThing(),
    doSomethingElse(),
  ]
}
