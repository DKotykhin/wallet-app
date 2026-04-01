export interface Transaction {
  id: number;
  type: "payment" | "credit";
  amount: number;
  name: string;
  description: string;
  date: string; // ISO format date string
  status: "pending" | "completed" | "failed";
  user?: string;
  icon: string; // FontAwesome icon name
}
