//this is the data of all 50 excerise and it is saved into monogodb so we are not using this
//this file is now just for display



const activityCalories = {
    basketball: {
      "50 kg": 174,
      "70 kg": 240,
      "90 kg": 305,
    },
    football: {
      "50 kg": 174,
      "70 kg": 240,
      "90 kg": 305,
    },
    tennis: {
      "50 kg": 136,
      "70 kg": 190,
      "90 kg": 240,
    },
    swimming: {
      "50 kg": 204,
      "70 kg": 285,
      "90 kg": 360,
    },
    cycling: {
      "50 kg": 145,
      "70 kg": 205,
      "90 kg": 260,
    },
    running: {
      "50 kg": 210,
      "70 kg": 295,
      "90 kg": 370,
    },
    boxing: {
      "50 kg": 270,
      "70 kg": 380,
      "90 kg": 475,
    },
    golf: {
      "50 kg": 109,
      "70 kg": 155,
      "90 kg": 195,
    },
    volleyball: {
      "50 kg": 116,
      "70 kg": 165,
      "90 kg": 210,
    },
    rowing: {
      "50 kg": 145,
      "70 kg": 205,
      "90 kg": 260,
    },
    hiking: {
      "50 kg": 123,
      "70 kg": 175,
      "90 kg": 220,
    },
    dancing: {
      "50 kg": 136,
      "70 kg": 190,
      "90 kg": 240,
    },
    martialArts: {
      "50 kg": 204,
      "70 kg": 285,
      "90 kg": 360,
    },
    running5mph: {
      "50 kg": 160,
      "70 kg": 225,
      "90 kg": 280,
    },
    jumpingRope: {
      "50 kg": 136,
      "70 kg": 190,
      "90 kg": 240,
    },
    highImpactAerobics: {
      "50 kg": 123,
      "70 kg": 175,
      "90 kg": 220,
    },
    briskWalking: {
      "50 kg": 83,
      "70 kg": 115,
      "90 kg": 145,
    },
    strengthTraining: {
      "50 kg": 66,
      "70 kg": 95,
      "90 kg": 120,
    },
    yoga: {
      "50 kg": 66,
      "70 kg": 95,
      "90 kg": 120,
    },
    pilates: {
      "50 kg": 66,
      "70 kg": 95,
      "90 kg": 120,
    },
    badminton: {
      "50 kg": 136,
      "70 kg": 190,
      "90 kg": 240,
    },
    iceSkating: {
      "50 kg": 136,
      "70 kg": 190,
      "90 kg": 240,
    },
    crossCountrySkiing: {
      "50 kg": 185,
      "70 kg": 260,
      "90 kg": 325,
    },
    downhillSkiing: {
      "50 kg": 136,
      "70 kg": 190,
      "90 kg": 240,
    },
    snowboarding: {
      "50 kg": 136,
      "70 kg": 190,
      "90 kg": 240,
    },
    jumpingJacks: {
      "50 kg": 136,
      "70 kg": 190,
      "90 kg": 240,
    },
    burpees: {
      "50 kg": 185,
      "70 kg": 260,
      "90 kg": 325,
    },
    moderateDancing: {
      "50 kg": 116,
      "70 kg": 165,
      "90 kg": 210,
    },
    stairClimbing: {
      "50 kg": 136,
      "70 kg": 190,
      "90 kg": 240,
    },
    taiChi: {
      "50 kg": 93,
      "70 kg": 130,
      "90 kg": 165,
    },
    baseballSoftball: {
      "50 kg": 116,
      "70 kg": 165,
      "90 kg": 210,
    },
    tableTennis: {
      "50 kg": 97,
      "70 kg": 135,
      "90 kg": 170,
    },
    surfing: {
      "50 kg": 97,
      "70 kg": 135,
      "90 kg": 170,
    },
    canoeingKayaking: {
      "50 kg": 136,
      "70 kg": 190,
      "90 kg": 240,
    },
    skateboarding: {
      "50 kg": 97,
      "70 kg": 135,
      "90 kg": 170,
    },
    mountainBiking: {
      "50 kg": 155,
      "70 kg": 220,
      "90 kg": 275,
    },
    squash: {
      "50 kg": 185,
      "70 kg": 260,
      "90 kg": 325,
    },
    hiit: {
      "50 kg": 185,
      "70 kg": 260,
      "90 kg": 325,
    },
    circuitTraining: {
      "50 kg": 155,
      "70 kg": 220,
      "90 kg": 275,
    },
    trampoline: {
      "50 kg": 136,
      "70 kg": 190,
      "90 kg": 240,
    },
    kickboxing: {
      "50 kg": 204,
      "70 kg": 285,
      "90 kg": 360,
    },
    zumba: {
      "50 kg": 136,
      "70 kg": 190,
      "90 kg": 240,
    },
    rockClimbing: {
      "50 kg": 185,
      "70 kg": 260,
      "90 kg": 325,
    },
    waterAerobics: {
      "50 kg": 97,
      "70 kg": 135,
      "90 kg": 170,
    },
    archery: {
      "50 kg": 83,
      "70 kg": 115,
      "90 kg": 145,
    },
    frisbee: {
      "50 kg": 83,
      "70 kg": 115,
      "90 kg": 145,
    },
    kickball: {
      "50 kg": 116,
      "70 kg": 165,
      "90 kg": 210,
    },
    gardening: {
      "50 kg": 103,
      "70 kg": 145,
      "90 kg": 180,
    },
    horsebackRiding: {
      "50 kg": 116,
      "70 kg": 165,
      "90 kg": 210,
    },
    handball: {
      "50 kg": 185,
      "70 kg": 260,
      "90 kg": 325,
    }
  };
  
  // Accessing the data
  console.log(activityCalories.basketball["70 kg"]); // Output: 240
  console.log(activityCalories.swimming["50 kg"]); // Output: 204
//  