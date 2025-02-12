export interface Task {
  id: number
  text: string
  completed: boolean
}

export interface TodoItemProps {
  task: Task;
  handleDelete: (id: number) => void;
  handleComplete: (id: number) => void;
}

export interface TodoFormProps {
  value: string;
  setValue: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface AppBottonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}
