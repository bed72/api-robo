export enum HeadRotation {
  minusNinetyRotation = "Rotação -90º",
  minusFortyFiveRotation = "Rotação -45º",
  initial = "Em Repouso",
  fortyFiveRotation = "Rotação 45º",
  ninetyRotation = "Rotação 90º",
}

export enum HeadSlope {
  up = "Para cima",
  down = "Para baixo",
  initial = "Em Repouso",
}

export enum HeadComposed {
  HeadRotation,
  HeadSlope
}