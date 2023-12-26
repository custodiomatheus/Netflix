export interface BaseFormProps {
  title: string;
  isLogin?: boolean;
  actionButton?: string;
}

export interface FormField {
  email: string;
  password: string;
}

export interface FormFieldsErrors {
  email: boolean;
  password: boolean;
}
