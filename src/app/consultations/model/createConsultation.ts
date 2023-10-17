export interface createConsultation {
  id: number;
  done: boolean;
  topic: string;
  diagnosis: string;
  date: string;
  hour: string;
  place: string;
  physiotherapistId: number;
  // therapyId?: number;
}

export class createConsultation {
  constructor(
    public id: number,
    public done: boolean,
    public topic: string,
    public diagnosis: string,
    public date: string,
    public hour: string,
    public place: string,
    public physiotherapistId: number,
    // public therapyId?: number
  ) {

  }
}