
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class InputRobo {
    id?: string;
    head: string;
    leftElbow: string;
    leftWrist: string;
    rightElbow: string;
    rightWrist: string;
}

export class RoboDto {
    id: string;
    head: string;
    leftElbow: string;
    leftWrist: string;
    rightElbow: string;
    rightWrist: string;
}

export abstract class IQuery {
    abstract robo(): RoboDto[] | Promise<RoboDto[]>;
}

export abstract class IMutation {
    abstract createRobo(robo: InputRobo): RoboDto | Promise<RoboDto>;

    abstract updateRobo(id: string, robo: InputRobo): RoboDto | Promise<RoboDto>;
}
