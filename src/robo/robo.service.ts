import { Repository } from 'typeorm';
import { RoboDto } from './dto/robo.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoboEntity } from './entity/robo.entity';

@Injectable()
export class RoboService {
  constructor(
    @InjectRepository(RoboEntity)
    private readonly roboRepository: Repository<RoboEntity>,
  ) { }

  async createRobo(data: RoboDto): Promise<RoboEntity> {
    const robo = new RoboEntity();
    /** Cabeca */
    robo.head = data.head;
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

    /** Cabeca */
    robo.head = data.head;
    /** Braço e Pulso esquerdo */
    robo.leftElbow = data.leftElbow;
    robo.leftWrist = data.leftWrist;
    /** Braço e Pulso direito */
    robo.rightElbow = data.rightElbow;
    robo.rightWrist = data.rightWrist;

    await this.roboRepository.save(robo);

    return robo;
  }

  async getRobo(): Promise<RoboEntity[]> {
    return await this.roboRepository.find();
  }
}
