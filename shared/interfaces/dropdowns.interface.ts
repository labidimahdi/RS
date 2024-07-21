export interface optionInterface {
  id: number;
  label: string;
  value: string;
}
export interface inputInterface {
  name?: string;
  type: string;
  placeholder?: string | undefined;
  className?: string;
  value?: any;
  required?: boolean;
  icon?: boolean;
  iconIsRight?: boolean;
  ImageSrc?: string;
  id?: any;
  onChange: any;
}
export interface autocompleteInterface {
  options: optionInterface[];
  onChange?: any;
  className?: string;
  name: string;
  value: string | null;
  placeholder?: string;
  outlined?: boolean;
}

export interface autocompleteMultiInterface {
  options: optionInterface[];
  onChange?: any;
  className?: string;
  name: string;
  value: string[] | null;
  placeholder?: string;
  outlined?: boolean;
}

export interface autocompleteMultiInterface {
  options: optionInterface[];
  onChange?: any;
  className?: string;
  name: string;
  value: string[] | null;
  placeholder?: string;
  outlined?: boolean;
}
export interface ModalSectionInterface {
  offer_id: any;
  onFormValidated: any;
}
enum Gender {
  Homme = "Homme",
  Femme = "Femme"
}
export interface ValidationErrors {
  [key: string]: string | undefined;
}
export interface FormData {
  job_offer_id: string;
  gender: Gender;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  sub_address: string;
  postal_code: string;
  city: string;
  driving_license: any;
  personal_vehicle: any;
  curriculum_vitae: any;
  cover_letter: any;
  experience: any;
  note: any;
}

export interface optionInterface {
  id: number;
  label: string;
  value: string;
}
export interface CareerFiltersInterface {
  references: optionInterface[];
  work_times: optionInterface[];
  contract_types: optionInterface[];
  filter: filterInterface;
  setFilter: any;
  setData: any;
}
export interface BlogFiltersInterface {
  tags: optionInterface[];
  filter: blogFilterInterface;
  setFilter: any;
  setData: any;
}

export interface filterInterface {
  reference: string;
  contract_type: string | null;
  work_time: string | null;
}

export interface blogFilterInterface {
  tags: string[];
}
