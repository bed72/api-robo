import { Repository } from 'typeorm';
import { RoboDto } from './dto/robo.dto';
import { Elbow } from './enums/arm.enum';
import { Slope } from './enums/head.enum';
import { Injectable } from '@nestjs/common';
import { RoboEntity } from './entity/robo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoboService {
  constructor(
    @InjectRepository(RoboEntity)
    private readonly roboRepository: Repository<RoboEntity>,
  ) {}

  async createRobo(data: RoboDto): Promise<RoboEntity> {
    const robo = new RoboEntity();
    /** Cabeca */
    robo.rotation = data.rotation;
    robo.slope = data.slope;
    /** Braço e Pulso esquerdo */
    robo.leftElbow = data.leftElbow;
    robo.leftWrist = data.leftWrist;
    /** Braço e Pulso direito */
    robo.rightElbow = data.rightElbow;
    robo.rightWrist = data.rightWrist;

    await this.roboRepository.save(robo);

    return robo;
  }

  async updateRobo(id: string, data: RoboDto): Promise<RoboEntity> {
    const robo = await this.roboRepository.findOneOrFail(id);

    // Só poderá Rotacionar a Cabeça caso sua Inclinação da Cabeça não esteja em
    // estado Para Baixo.
    data.slope != Slope.down ? (robo.rotation = data.rotation) : robo;
    robo.slope = data.slope;

    // Só poderá movimentar o Pulso caso o Cotovelo esteja Fortemente Contraído.
    data.leftElbow == Elbow.stronglyContracted
      ? (robo.leftWrist = data.leftWrist)
      : robo;
    data.rightElbow == Elbow.stronglyContracted
      ? (robo.rightWrist = data.rightWrist)
      : robo;

    /** Braço e Pulso esquerdo */
    robo.leftElbow = data.leftElbow;
    /** Braço e Pulso direito */
    robo.rightElbow = data.rightElbow;

    await this.roboRepository.save(robo);

    return robo;
  }

  async getRobo(): Promise<RoboEntity[]> {
    return await this.roboRepository.find();
  }
}
