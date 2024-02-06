export interface Annexures {
  id: number;
  name: string;
  header: string;
  description: string;
  link: string;
}

export interface Companies {
  id: number;
  name: string;
  panNumber: string;
  gstin: string;
  iec: string;
  constitution: string;
}

export interface Props {
  edit: boolean;
}