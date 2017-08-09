interface Person {
  firstName: string, 
  lastName: string
}

type PersonKeys = keyof Person;
