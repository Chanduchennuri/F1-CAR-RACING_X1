export type DriverStatus =
  | "Running"
  | "Pit"
  | "Finished"
  | "Retired";

export type TireCompound =
  | "SOFT"
  | "MEDIUM"
  | "HARD"
  | "INTERMEDIATE"
  | "WET";

export type Driver = {
  position: number;
  driverNumber: number;
  code: string;
  name: string;
  team: string;
  tire: TireCompound;
  lastLap: string;
  gap: string;
  pitStops: number;
  status: DriverStatus;
};

export const scoreboardData = {
  race: {
    name: "Belgian Grand Prix",
    circuit: "Circuit de Spa-Francorchamps",
    round: 13,
    status: "LIVE",
    currentLap: 31,
    totalLaps: 44,
    leader: "VER",
    fastestLap: "1:31.245",
    progress: 70,
  },

  drivers: [
    {
      position: 1,
      driverNumber: 1,
      code: "VER",
      name: "Max Verstappen",
      team: "Red Bull Racing",
      tire: "SOFT",
      lastLap: "1:32.104",
      gap: "LEADER",
      pitStops: 1,
      status: "Running",
    },

    {
      position: 2,
      driverNumber: 16,
      code: "LEC",
      name: "Charles Leclerc",
      team: "Ferrari",
      tire: "MEDIUM",
      lastLap: "1:32.440",
      gap: "+3.421",
      pitStops: 1,
      status: "Running",
    },

    {
      position: 3,
      driverNumber: 4,
      code: "NOR",
      name: "Lando Norris",
      team: "McLaren",
      tire: "MEDIUM",
      lastLap: "1:32.201",
      gap: "+5.812",
      pitStops: 1,
      status: "Running",
    },

    {
      position: 4,
      driverNumber: 81,
      code: "PIA",
      name: "Oscar Piastri",
      team: "McLaren",
      tire: "HARD",
      lastLap: "1:32.805",
      gap: "+9.225",
      pitStops: 1,
      status: "Running",
    },

    {
      position: 5,
      driverNumber: 63,
      code: "RUS",
      name: "George Russell",
      team: "Mercedes",
      tire: "HARD",
      lastLap: "1:33.102",
      gap: "+12.781",
      pitStops: 2,
      status: "Running",
    },

    {
      position: 6,
      driverNumber: 44,
      code: "HAM",
      name: "Lewis Hamilton",
      team: "Mercedes",
      tire: "SOFT",
      lastLap: "1:32.901",
      gap: "+15.230",
      pitStops: 2,
      status: "Running",
    },

    {
      position: 7,
      driverNumber: 14,
      code: "ALO",
      name: "Fernando Alonso",
      team: "Aston Martin",
      tire: "MEDIUM",
      lastLap: "1:33.021",
      gap: "+18.402",
      pitStops: 1,
      status: "Running",
    },

    {
      position: 8,
      driverNumber: 55,
      code: "SAI",
      name: "Carlos Sainz",
      team: "Williams",
      tire: "HARD",
      lastLap: "1:33.502",
      gap: "+22.801",
      pitStops: 1,
      status: "Running",
    },
  ],

  raceControl: [
    {
      type: "green",
      message: "All cars running",
      lap: 31,
    },
    {
      type: "yellow",
      message: "Yellow flag cleared",
      lap: 29,
    },
    {
      type: "red",
      message: "Safety car deployed",
      lap: 22,
    },
  ],

  constructors: [
    {
      position: 1,
      team: "McLaren",
      points: 412,
    },
    {
      position: 2,
      team: "Red Bull Racing",
      points: 387,
    },
    {
      position: 3,
      team: "Ferrari",
      points: 351,
    },
    {
      position: 4,
      team: "Mercedes",
      points: 284,
    },
    {
      position: 5,
      team: "Aston Martin",
      points: 156,
    },
  ],
};