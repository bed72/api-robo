export enum Elbow {
  initial = "Em Repouso",
  slightlyContracted = "Levemente contraído",
  contracted = "Contraído",
  stronglyContracted = "Fortemente contraído"
}

export enum Pulse {
  rotationToMinusNinety = "Rotação para -90º",
  rotationToMinusFortyFive = "Rotação para -45º",
  initial = "Em Repouso",
  rotationToFortyFive = "Rotação para 45º",
  rotationToNinety = "Rotação para 90º",
  rotationToHundredAndThirtyFive = "Rotação para 135º",
  rotationToHundredAndEighty = "Rotação para 180º"
}

export enum ArmComposed {
  Elbow,
  Pulse
}