
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class InputRobo {
    id: string;
    head: HeadComposed;
    leftElbow: Elbow;
    leftWrist: Pulse;
    rightElbow: Elbow;
    rightWrist: Pulse;
}

export class HeadRotation {
    minusNinetyRotation?: string;
    minusFortyFiveRotation?: string;
    initial?: string;
    fortyFiveRotation?: string;
    ninetyRotation?: string;
}

export class HeadSlope {
    up?: string;
    down?: string;
    initial?: string;
}

export class HeadComposed {
    headRotation: HeadRotation;
    headSlope: HeadSlope;
}

export class Elbow {
    initial?: string;
    slightlyContracted?: string;
    contracted?: string;
    stronglyContracted?: string;
}

export class Pulse {
    rotationToMinusNinety?: string;
    rotationToMinusFortyFive?: string;
    initial?: string;
    rotationToFortyFive?: string;
    rotationToNinety?: string;
    rotationToHundredAndThirtyFive?: string;
    rotationToHundredAndEighty?: string;
}

export class RoboDto {
    id?: string;
    head?: HeadComposed;
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
