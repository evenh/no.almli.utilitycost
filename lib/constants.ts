import {GridSettingsConfigMap} from "./types";

export const GridCosts: GridSettingsConfigMap = {
    "aenett": {
        id: "aenett",
        description: "Agder Energi Nett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 245,
            gridCapacity2_5: 315,
            gridCapacity5_10: 440,
            gridCapacity10_15: 815,
            gridCapacity15_20: 1500,
            gridCapacity20_25: 2188,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.5251,
            gridEnergyNight: 0.4251,
            gridEnergyLowWeekends: true,
            gridEnergyLowHoliday: false,
        }
    },
    "bkk": {
        id: "bkk",
        description: "BKK Nett AS",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 125,
            gridCapacity2_5: 206,
            gridCapacity5_10: 350,
            gridCapacity10_15: 494,
            gridCapacity15_20: 638,
            gridCapacity20_25: 781,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.499,
            gridEnergyNight: 0.399,
            gridEnergyLowWeekends: true,
            gridEnergyLowHoliday: false,
        }
    },
    "elinett": {
        id: "elinett",
        description: "Elinett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 170,
            gridCapacity2_5: 212.5,
            gridCapacity5_10: 255,
            gridCapacity10_15: 425,
            gridCapacity15_20: 510,
            gridCapacity20_25: 595,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4326,
            gridEnergyNight: 0.3326,
            gridEnergyLowWeekends: true,
            gridEnergyLowHoliday: true,
        }
    },
    "elvia": {
        id: "elvia",
        description: "Elvia",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 125,
            gridCapacity2_5: 200,
            gridCapacity5_10: 325,
            gridCapacity10_15: 450,
            gridCapacity15_20: 575,
            gridCapacity20_25: 700,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.431,
            gridEnergyNight: 0.3685,
            gridEnergyLowWeekends: true,
            gridEnergyLowHoliday: true,
        }
    },
    "fagne": {
        id: "fagne",
        description: "Fagne",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 310,
            gridCapacity2_5: 310,
            gridCapacity5_10: 410,
            gridCapacity10_15: 510,
            gridCapacity15_20: 610,
            gridCapacity20_25: 710,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.5151,
            gridEnergyNight: 0.4151,
            gridEnergyLowWeekends: true,
            gridEnergyLowHoliday: false,
        }
    },
    "glitre": {
        id: "glitre",
        description: "Glitre Energi",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 150,
            gridCapacity2_5: 250,
            gridCapacity5_10: 410,
            gridCapacity10_15: 735,
            gridCapacity15_20: 975,
            gridCapacity20_25: 1210,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4725,
            gridEnergyNight: 0.3525,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "lede": {
        id: "lede",
        description: "Lede",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 205,
            gridCapacity2_5: 205,
            gridCapacity5_10: 350,
            gridCapacity10_15: 493.75,
            gridCapacity15_20: 638.75,
            gridCapacity20_25: 783.75,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4176,
            gridEnergyNight: 0.4176,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "lnett": {
        id: "lnett",
        description: "Lnett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 250,
            gridCapacity2_5: 250,
            gridCapacity5_10: 350,
            gridCapacity10_15: 475,
            gridCapacity15_20: 625,
            gridCapacity20_25: 750,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.486,
            gridEnergyNight: 0.406,
            gridEnergyLowWeekends: true,
            gridEnergyLowHoliday: false,
        }
    },
    "linja": {
        id: "linja",
        description: "Linja",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 193,
            gridCapacity2_5: 268,
            gridCapacity5_10: 343,
            gridCapacity10_15: 493,
            gridCapacity15_20: 593,
            gridCapacity20_25: 693,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4426,
            gridEnergyNight: 0.4051,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "mellom": {
        id: "mellom",
        description: "Mellom",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 186,
            gridCapacity2_5: 279,
            gridCapacity5_10: 419,
            gridCapacity10_15: 559,
            gridCapacity15_20: 708,
            gridCapacity20_25: 885,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4465,
            gridEnergyNight: 0.3715,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "midtnett": {
        id: "midtnett",
        description: "Midtnett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 200,
            gridCapacity2_5: 200,
            gridCapacity5_10: 300,
            gridCapacity10_15: 450,
            gridCapacity15_20: 675,
            gridCapacity20_25: 1013,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4551,
            gridEnergyNight: 0.3551,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "morenett": {
        id: "morenett",
        description: "Mørenett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 173,
            gridCapacity2_5: 216,
            gridCapacity5_10: 259,
            gridCapacity10_15: 431,
            gridCapacity15_20: 518,
            gridCapacity20_25: 604,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4051,
            gridEnergyNight: 0.3301,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "norgesnett": {
        id: "norgesnett",
        description: "Norgesnett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 168.75,
            gridCapacity2_5: 281.25,
            gridCapacity5_10: 462.5,
            gridCapacity10_15: 822.5,
            gridCapacity15_20: 1092.5,
            gridCapacity20_25: 1355,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.5676,
            gridEnergyNight: 0.4426,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "tensio": {
        id: "tensio",
        description: "Tensio",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 73,
            gridCapacity2_5: 128,
            gridCapacity5_10: 219,
            gridCapacity10_15: 323,
            gridCapacity15_20: 426,
            gridCapacity20_25: 530,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.3626,
            gridEnergyNight: 0.2839,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "vonett": {
        id: "vonett",
        description: "Vonett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 209,
            gridCapacity2_5: 272,
            gridCapacity5_10: 335,
            gridCapacity10_15: 460,
            gridCapacity15_20: 586,
            gridCapacity20_25: 711,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.499,
            gridEnergyNight: 0.436,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
};