type FieldType = "email" | "password" | "text" | "checkbox" | "tel";

interface Field {
  label: { text: string };
  name: string;
  type: FieldType;
}

export interface TextField extends Field {
  placeholder: string;
  maxlength?: number;
  minlength?: number;
  rules: string;
  mask?: string[];
}

export interface CheckboxField extends Field {
  checked: boolean;
}
