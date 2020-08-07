
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Rotation {
    minusNinetyRotation = "minusNinetyRotation",
    minusFortyFiveRotation = "minusFortyFiveRotation",
    initial = "initial",
    fortyFiveRotation = "fortyFiveRotation",
    ninetyRotation = "ninetyRotation"
}

export enum Slope {
    up = "up",
    down = "down",
    initial = "initial"
}

export enum Elbow {
    initial = "initial",
    slightlyContracted = "slightlyContracted",
    contracted = "contracted",
    stronglyContracted = "stronglyContracted"
}

export enum Pulse {
    rotationToMinusNinety = "rotationToMinusNinety",
    rotationToMinusFortyFive = "rotationToMinusFortyFive",
    initial = "initial",
    rotationToFortyFive = "rotationToFortyFive",
    rotationToNinety = "rotationToNinety",
    rotationToHundredAndThirtyFive = "rotationToHundredAndThirtyFive",
    rotationToHundredAndEighty = "rotationToHundredAndEighty"
}

export class InputRobo {
    id?: string;
    rotation?: Rotation;
    slope?: Slope;
    leftElbow?: Elbow;
    leftWrist?: Pulse;
    rightElbow?: Elbow;
    rightWrist?: Pulse;
}

export class RoboDto {
    id?: string;
    rotation?: Rotation;
    slope?: Slope;
    leftElbow?: Elbow;
    leftWrist?: Pulse;
    rightElbow?: Elbow;
    rightWrist?: Pulse;
}

export abstract class IQuery {
    abstract robo(): RoboDto[] | Promise<RoboDto[]>;
}

export abstract class IMutation {
    abstract createRobo(robo: InputRobo): RoboDto | Promise<RoboDto>;

    abstract updateRobo(id: string, robo: InputRobo): RoboDto | Promise<RoboDto>;
}
