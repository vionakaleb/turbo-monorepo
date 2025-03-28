export interface User {
    id: string;
    totalAverageWeightRatings: number;
    numberOfRents: number;
    recentlyActive: string;
    compositeScore?: number;
  }
  
  export class UserModel implements User {
    constructor(
      public id: string,
      public totalAverageWeightRatings: number,
      public numberOfRents: number,
      public recentlyActive: string,
      public compositeScore: number,
    ) {}
  }
  