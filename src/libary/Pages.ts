export type Address = {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type Designer = {
  id: number;
  name: string;
  username: string;
  phone: string;
  email: string;
  website: string;
  company: {
    name: string;
    bs: string;
    catchPrase: string;
  };
  address: Address;
};

export enum Status {
  IDLE = "idle",
  LOADING = "loading",
  FULFILLED = "fulfilled",
  ERROR = "error",
  NOT_FOUND = "not_found",
}
