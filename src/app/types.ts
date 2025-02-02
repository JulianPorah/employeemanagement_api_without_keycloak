export type Employee =  {
  id: number,
  lastName: string,
  firstName: string,
  street: string,
  postcode: string,
  city: string,
  phone: string
}

export type CreateEmployee =  {
  lastName: string|null,
  firstName: string|null,
  street: string|null,
  postcode: string|null,
  city: string|null,
  phone: string|null
};
